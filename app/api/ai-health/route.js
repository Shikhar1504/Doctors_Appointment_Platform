import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Available model names to try (in order of preference)
// Note: gemini-2.5-pro sometimes returns empty responses, so we prefer other models
const AVAILABLE_MODELS = [
  "gemini-1.5-flash", // Most reliable
  "gemini-1.5-pro",
  "gemini-2.5-flash",
  "models/gemini-1.5-pro",
  "models/gemini-1.5-flash",
  "models/gemini-pro",
  "gemini-2.5-pro", // Last resort due to empty response issues
];

async function getWorkingModel() {
  for (const modelName of AVAILABLE_MODELS) {
    try {
      console.log(`Trying model: ${modelName}`);
      const model = genAI.getGenerativeModel({ model: modelName });

      // Test the model with a simple prompt
      const testResult = await model.generateContent("Hello");
      const testResponse = await testResult.response.text();
      
      // Check if the model returns empty responses (gemini-2.5-pro issue)
      if (!testResponse || testResponse.trim().length === 0) {
        console.log(`❌ Model ${modelName} returned empty response, skipping...`);
        continue;
      }

      console.log(`✅ Successfully connected to model: ${modelName}`);
      return { model, modelName };
    } catch (error) {
      console.log(`❌ Model ${modelName} failed:`, error.message);
      continue;
    }
  }
  throw new Error("No working Gemini model found");
}

// Helper function to clean up duplicate urgency sections and emergency instructions
function cleanupDuplicateUrgency(text) {
  // Remove any existing urgency boxes or duplicate emergency instructions
  let cleanedText = text;

  // Remove existing urgency sections (various formats)
  cleanedText = cleanedText.replace(/---[\s\S]*?Urgency:[\s\S]*?---/g, "");
  cleanedText = cleanedText.replace(/\*\*Urgency:\*\*[\s\S]*?(?=\n\n|$)/g, "");
  
  // Remove AI-generated urgency classifications that appear in main text
  cleanedText = cleanedText.replace(/URGENCY CLASSIFICATION:[\s\S]*?(?=\n\n|$)/gi, "");
  cleanedText = cleanedText.replace(/Urgency:[\s\S]*?(?=\n\n|$)/gi, "");
  cleanedText = cleanedText.replace(/\*\*Urgency Level\*\*:[\s\S]*?(?=\n\n|$)/gi, "");
  
  // Remove standalone emergency instructions that might duplicate
  cleanedText = cleanedText.replace(
    /Call 911 or go to the emergency room immediately[\s\S]*?Do not drive yourself\.?/g,
    ""
  );

  // Remove extra disclaimers that might duplicate
  cleanedText = cleanedText.replace(
    /⚠️ This AI assistant provides general health information[\s\S]*?treatment\.?/g,
    ""
  );

  // Clean up extra whitespace
  cleanedText = cleanedText.replace(/\n{3,}/g, "\n\n");
  cleanedText = cleanedText.trim();

  return cleanedText;
}

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is not set");
    }

    // Get a working model
    const { model, modelName } = await getWorkingModel();
    console.log(`🤖 Using model: ${modelName}`);

    // Create a health-focused prompt that includes urgency determination and specialist recommendations
    const prompt = `You are CareMeet AI, a professional healthcare assistant. Analyze the following health concern and provide a comprehensive response with urgency classification and specialist recommendations.

User message: "${message}"

Please provide your response in this EXACT format:

URGENCY_LEVEL: [Determine ONE of: "High (Emergency)", "High", "Medium", "Low"]
SPECIALISTS: [List relevant specialists from: General Medicine, Cardiology, Dermatology, Endocrinology, Gastroenterology, Neurology, Obstetrics & Gynecology, Oncology, Ophthalmology, Orthopedics, Pediatrics, Psychiatry, Pulmonology, Radiology, Urology, Other]

**1. Possible Causes**
**Common causes:**
- [List 2-3 common, benign causes with brief explanations]

**Serious causes to consider:**
- [List 2-3 more serious conditions that could cause these symptoms]

**2. Red Flag Symptoms**
Seek immediate emergency care if you experience:
- [List specific emergency warning signs relevant to these symptoms]
- [Include evidence-based urgent symptoms]

**3. Recommendations**
[Provide detailed guidance based on symptom severity. Include:
- Self-care measures if appropriate
- When to seek medical attention
- Risk factors to consider (age, medical history, etc.)
- Lifestyle modifications if relevant]

**4. Next Steps**
[Provide a clear care pathway:
- Immediate actions to take
- Timeline for seeking care
- What to monitor
- When to escalate care]

URGENCY CLASSIFICATION RULES:
- **High (Emergency)**: Life-threatening symptoms requiring immediate 911/ER care (chest pain, difficulty breathing, pregnancy with bleeding/severe pain, sudden neurological symptoms, loss of consciousness, severe bleeding, coughing up blood)
- **High**: Urgent same-day medical care needed (severe pain, high fever, concerning symptoms that can't wait)
- **Medium**: Should contact doctor soon for evaluation (moderate symptoms, persistent issues, concerning but not urgent)
- **Low**: Monitor symptoms, routine follow-up appropriate (mild symptoms, chronic stable conditions)

SPECIALIST SELECTION RULES:
- Children (under 18): Always include Pediatrics
- Heart/chest symptoms: Include Cardiology
- Pregnancy/women's health: Include Obstetrics & Gynecology
- Mental health symptoms: Include Psychiatry
- Always start with General Medicine for primary care
- List 1-3 most relevant specialists

CRITICAL: 
- Pregnancy with bleeding/pain is ALWAYS "High (Emergency)"
- Chest pain/discomfort is ALWAYS "High (Emergency)"
- Children's symptoms: Always include Pediatrics
- Be very conservative - when in doubt, choose higher urgency
- Do NOT include urgency/specialist info in main response sections
- Professional, empathetic tone`;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Check if the model returned empty text (known issue with gemini-2.5-pro)
    if (!text || text.trim().length === 0) {
      console.log(`❌ Model ${modelName} returned empty response for actual prompt`);
      
      // Try to get a different working model
      const remainingModels = AVAILABLE_MODELS.filter(m => m !== modelName);
      
      for (const fallbackModelName of remainingModels) {
        try {
          console.log(`🔄 Trying fallback model: ${fallbackModelName}`);
          const fallbackModel = genAI.getGenerativeModel({ model: fallbackModelName });
          
          const fallbackResult = await fallbackModel.generateContent(prompt);
          const fallbackResponse = await fallbackResult.response;
          const fallbackText = fallbackResponse.text();
          
          if (fallbackText && fallbackText.trim().length > 0) {
            console.log(`✅ Fallback model ${fallbackModelName} worked!`);
            text = fallbackText;
            break;
          }
        } catch (fallbackError) {
          console.log(`❌ Fallback model ${fallbackModelName} failed:`, fallbackError.message);
          continue;
        }
      }
      
      // If still no response, throw error
      if (!text || text.trim().length === 0) {
        throw new Error('All models returned empty responses');
      }
    }

    // Extract AI-generated urgency level from the response
    const urgencyMatch = text.match(/URGENCY_LEVEL:\s*([^\n]+)/i);
    let aiGeneratedUrgency = null;
    
    if (urgencyMatch) {
      aiGeneratedUrgency = urgencyMatch[1].trim().replace(/["\']/g, '');
      console.log('🎯 AI Generated Urgency:', aiGeneratedUrgency);
      // Remove the urgency level line from the main text
      text = text.replace(/URGENCY_LEVEL:[^\n]+\n?/i, '');
    }

    // Extract AI-generated specialists from the response
    const specialistsMatch = text.match(/SPECIALISTS:\s*([^\n]+)/i);
    let aiGeneratedSpecialists = [];
    
    if (specialistsMatch) {
      const specialistsText = specialistsMatch[1].trim();
      // Parse comma-separated specialists
      aiGeneratedSpecialists = specialistsText
        .split(',')
        .map(s => s.trim().replace(/["\']/g, ''))
        .filter(s => s.length > 0);
      console.log('👨‍⚕️ AI Generated Specialists:', aiGeneratedSpecialists);
      // Remove the specialists line from the main text
      text = text.replace(/SPECIALISTS:[^\n]+\n?/i, '');
    }

    // Clean up any duplicate urgency sections or emergency instructions
    text = cleanupDuplicateUrgency(text);

    // Use AI-generated urgency if available, otherwise fall back to keyword detection
    const urgencyLevel = aiGeneratedUrgency || determineUrgency(message);
    console.log('📊 Final Urgency Level Used:', urgencyLevel);

    // Get appropriate recommendations based on urgency level
    const getRecommendations = (urgency) => {
      switch (urgency) {
        case "High (Emergency)":
          return "Call 911 or go to the emergency room immediately. Do not drive yourself.";
        case "High":
          return "Seek urgent same-day medical care.";
        case "Medium":
          return "Contact your Primary Care Provider soon for evaluation.";
        case "Low":
          return "Monitor your symptoms and follow up routinely with your doctor.";
        default:
          return "Contact your Primary Care Provider for evaluation.";
      }
    };

    const urgencyRecommendations = getRecommendations(urgencyLevel);

    // Append the standardized urgency box
    const standardizedUrgencyBox = `

---
**Urgency:** ${urgencyLevel}
**Recommended next steps:**
- ${getRecommendations(urgencyLevel)}

⚠️ This AI assistant provides general health information only. Always consult qualified healthcare professionals for medical advice, diagnosis, or treatment.
---`;

    const finalMessage = text + standardizedUrgencyBox;

    // Debug: Log the AI response to check if it's generating detailed content
    console.log('AI Generated Text Length:', text.length);
    console.log('AI Generated Text Preview:', text.substring(0, 200));
    
    // Parse the response to extract key information
    const aiResponse = {
      message: text, // Clean message with detailed analysis
      timestamp: new Date().toISOString(),
      disclaimer:
        "⚠️ This AI assistant provides general health information only. Always consult qualified healthcare professionals for medical advice, diagnosis, or treatment.",
      urgency: {
        level: urgencyLevel,
        recommendations: urgencyRecommendations,
        color: getUrgencyColor(urgencyLevel)
      },
      suggestions: {
        urgency: urgencyLevel,
        specialties: suggestSpecialties(message, urgencyLevel, aiGeneratedSpecialists), // Pass AI specialists
        nextSteps: extractNextSteps(message),
      },
    };

    return NextResponse.json(aiResponse);
  } catch (error) {
    console.error("Gemini AI Error:", error);

    // Fallback response if AI fails
    return NextResponse.json(
      {
        message:
          "I'm having trouble processing your request right now. For immediate health concerns, please contact a healthcare professional or emergency services.",
        timestamp: new Date().toISOString(),
        disclaimer:
          "⚠️ This AI assistant provides general health information only. Always consult qualified healthcare professionals for medical advice, diagnosis, or treatment.",
        urgency: {
          level: "Medium",
          recommendations: "Contact your Primary Care Provider soon for evaluation.",
          color: "yellow"
        },
        suggestions: {
          urgency: "Medium",
          specialties: ["General Physician"],
          nextSteps: ["Consult with a healthcare provider"],
        },
        error: true,
      },
      { status: 500 }
    );
  }
}

// Helper function to determine urgency using specific categories only
function determineUrgency(message) {
  const lowerMessage = message.toLowerCase();

  // HIGH (Emergency) - Life-threatening symptoms requiring immediate 911/ER care
  const emergencyKeywords = [
    "chest pain",
    "chest discomfort",
    "chest pressure",
    "chest tightness",
    "difficulty breathing",
    "severe shortness of breath",
    "can't breathe",
    "sudden weakness",
    "sudden numbness",
    "sudden confusion",
    "sudden vision loss",
    "lost vision",
    "vision loss",
    "can't see",
    "can't move",
    "cannot move",
    "paralysis",
    "paralyzed",
    "sudden paralysis",
    "sudden arm weakness",
    "sudden leg weakness",
    "coughing up blood",
    "coughing blood",
    "blood in cough",
    "unconscious",
    "loss of consciousness",
    "passed out",
    "severe bleeding",
    "crushing pain",
    "sudden severe headache",
    "worst headache of my life",
    "stroke symptoms",
    "sudden speech problems",
    "sudden confusion",
    "sudden dizziness",
  ];

  // Check for emergency symptoms
  if (emergencyKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    return "High (Emergency)";
  }

  // HIGH (non-Emergency) - Urgent same-day medical care needed
  const urgentKeywords = [
    "severe pain",
    "high fever",
    "fever over",
    "worst headache",
    "worst pain",
  ];
  if (urgentKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    return "High";
  }

  // Check for severe modifiers with common symptoms
  if (
    (lowerMessage.includes("severe") || lowerMessage.includes("worst")) &&
    (lowerMessage.includes("headache") ||
      lowerMessage.includes("abdominal") ||
      lowerMessage.includes("back pain"))
  ) {
    return "High";
  }

  // MEDIUM - Should contact PCP soon for evaluation
  const mediumKeywords = [
    "persistent",
    "ongoing",
    "chronic",
    "recurring",
    "moderate pain",
    "concerning",
    "shortness of breath",
    "short of breath",
    "always thirsty",
    "urinate a lot",
    "frequent urination",
    "excessive thirst",
  ];
  if (mediumKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    return "Medium";
  }

  // Common symptoms that typically warrant medium urgency
  if (
    lowerMessage.includes("headache") ||
    lowerMessage.includes("nausea") ||
    lowerMessage.includes("dizziness") ||
    lowerMessage.includes("cough") ||
    lowerMessage.includes("fever") ||
    lowerMessage.includes("pain")
  ) {
    return "Medium";
  }

  // LOW - Monitor symptoms, routine follow-up appropriate
  return "Low";
}

// Helper function to suggest medical specialties following precise safety guidelines
function suggestSpecialties(message, aiUrgency, aiGeneratedSpecialists = []) {
  const lowerMessage = message.toLowerCase();
  const urgency = aiUrgency || determineUrgency(message); // Use AI urgency if available

  // Emergency cases - direct to emergency care
  if (urgency === "High (Emergency)") {
    return {
      primary: "Emergency Care",
      specialists: [],
      appSpecialties: [],
      browseUrl: null,
      emergencyMessage: "Call 911 immediately - Do not use the app for emergency care"
    };
  }

  const suggestions = {
    primary: "General Medicine", // Start with General Medicine from app
    specialists: [],
    appSpecialties: ["General Medicine"], // Always include General Medicine
    browseUrl: "/doctors?specialty=General%20Medicine",
    emergencyMessage: null
  };

  // If AI provided specialists, use them as the primary suggestion source
  if (aiGeneratedSpecialists && aiGeneratedSpecialists.length > 0) {
    console.log('🤖 Using AI-generated specialists:', aiGeneratedSpecialists);
    
    // Map AI specialists to our app's available specialties
    const specialtyMapping = {
      "General Medicine": "General Medicine",
      "Cardiology": "Cardiology", 
      "Dermatology": "Dermatology",
      "Endocrinology": "Endocrinology",
      "Gastroenterology": "Gastroenterology",
      "Neurology": "Neurology",
      "Obstetrics & Gynecology": "Obstetrics & Gynecology",
      "Oncology": "Oncology",
      "Ophthalmology": "Ophthalmology",
      "Orthopedics": "Orthopedics",
      "Pediatrics": "Pediatrics",
      "Psychiatry": "Psychiatry",
      "Pulmonology": "Pulmonology",
      "Radiology": "Radiology",
      "Urology": "Urology"
    };
    
    // Process AI-generated specialists
    aiGeneratedSpecialists.forEach(specialist => {
      const normalizedSpecialist = specialist.trim();
      
      // Check if the specialist exists in our mapping
      if (specialtyMapping[normalizedSpecialist]) {
        if (!suggestions.appSpecialties.includes(specialtyMapping[normalizedSpecialist])) {
          suggestions.specialists.push(normalizedSpecialist);
          suggestions.appSpecialties.push(specialtyMapping[normalizedSpecialist]);
        }
      } else {
        // Handle partial matches or common variations
        const lowerSpecialist = normalizedSpecialist.toLowerCase();
        if (lowerSpecialist.includes('cardio')) {
          if (!suggestions.appSpecialties.includes('Cardiology')) {
            suggestions.specialists.push('Cardiology');
            suggestions.appSpecialties.push('Cardiology');
          }
        } else if (lowerSpecialist.includes('neuro')) {
          if (!suggestions.appSpecialties.includes('Neurology')) {
            suggestions.specialists.push('Neurology');
            suggestions.appSpecialties.push('Neurology');
          }
        } else if (lowerSpecialist.includes('pediatric') || lowerSpecialist.includes('child')) {
          if (!suggestions.appSpecialties.includes('Pediatrics')) {
            suggestions.specialists.push('Pediatrics');
            suggestions.appSpecialties.push('Pediatrics');
          }
        } else if (lowerSpecialist.includes('gynec') || lowerSpecialist.includes('obstetric')) {
          if (!suggestions.appSpecialties.includes('Obstetrics & Gynecology')) {
            suggestions.specialists.push('Obstetrics & Gynecology');
            suggestions.appSpecialties.push('Obstetrics & Gynecology');
          }
        } else if (lowerSpecialist.includes('dermat') || lowerSpecialist.includes('skin')) {
          if (!suggestions.appSpecialties.includes('Dermatology')) {
            suggestions.specialists.push('Dermatology');
            suggestions.appSpecialties.push('Dermatology');
          }
        } else if (lowerSpecialist.includes('ortho') || lowerSpecialist.includes('bone')) {
          if (!suggestions.appSpecialties.includes('Orthopedics')) {
            suggestions.specialists.push('Orthopedics');
            suggestions.appSpecialties.push('Orthopedics');
          }
        } else if (lowerSpecialist.includes('psychiatr') || lowerSpecialist.includes('mental')) {
          if (!suggestions.appSpecialties.includes('Psychiatry')) {
            suggestions.specialists.push('Psychiatry');
            suggestions.appSpecialties.push('Psychiatry');
          }
        } else if (lowerSpecialist.includes('pulmon') || lowerSpecialist.includes('lung')) {
          if (!suggestions.appSpecialties.includes('Pulmonology')) {
            suggestions.specialists.push('Pulmonology');
            suggestions.appSpecialties.push('Pulmonology');
          }
        }
      }
    });
    
    // Set the primary specialist and browse URL based on first AI suggestion
    if (suggestions.appSpecialties.length > 1) { // More than just General Medicine
      const primarySpecialty = suggestions.appSpecialties[1]; // Skip General Medicine
      suggestions.primary = primarySpecialty;
      suggestions.browseUrl = `/doctors?specialty=${encodeURIComponent(primarySpecialty)}`;
      
      // Remove the primary specialty from the specialists array to avoid duplication
      suggestions.specialists = suggestions.specialists.filter(s => s !== primarySpecialty);
    }
    
    console.log('🎯 Final AI-based suggestions:', suggestions);
    return suggestions;
  }

  // Enhanced keyword matching for better specialty detection
  
  // CARDIOLOGY - Heart, chest, cardiovascular
  if (
    lowerMessage.includes("heart") || 
    lowerMessage.includes("chest") ||
    lowerMessage.includes("cardiac") ||
    lowerMessage.includes("cardiovascular") ||
    lowerMessage.includes("palpitation") ||
    lowerMessage.includes("blood pressure") ||
    lowerMessage.includes("hypertension")
  ) {
    suggestions.specialists.push("Cardiology");
    suggestions.appSpecialties.push("Cardiology");
    suggestions.browseUrl = "/doctors?specialty=Cardiology";
  }
  
  // NEUROLOGY - Brain, neurological, headaches
  if (
    lowerMessage.includes("head") ||
    lowerMessage.includes("headache") ||
    lowerMessage.includes("migraine") ||
    lowerMessage.includes("neurological") ||
    lowerMessage.includes("brain") ||
    lowerMessage.includes("seizure") ||
    lowerMessage.includes("memory") ||
    lowerMessage.includes("confusion") ||
    lowerMessage.includes("dizziness") ||
    lowerMessage.includes("numbness") ||
    lowerMessage.includes("tingling")
  ) {
    suggestions.specialists.push("Neurology");
    suggestions.appSpecialties.push("Neurology");
    suggestions.browseUrl = "/doctors?specialty=Neurology";
  }
  
  // PULMONOLOGY - Respiratory, lung, breathing
  if (
    lowerMessage.includes("cough") ||
    lowerMessage.includes("breathing") ||
    lowerMessage.includes("lung") ||
    lowerMessage.includes("respiratory") ||
    lowerMessage.includes("asthma") ||
    lowerMessage.includes("shortness of breath") ||
    lowerMessage.includes("wheezing")
  ) {
    suggestions.specialists.push("Pulmonology");
    suggestions.appSpecialties.push("Pulmonology");
    suggestions.browseUrl = "/doctors?specialty=Pulmonology";
  }
  
  // OPHTHALMOLOGY - Eyes, vision
  if (
    lowerMessage.includes("eye") || 
    lowerMessage.includes("vision") ||
    lowerMessage.includes("sight") ||
    lowerMessage.includes("blurry") ||
    lowerMessage.includes("blind")
  ) {
    suggestions.specialists.push("Ophthalmology");
    suggestions.appSpecialties.push("Ophthalmology");
    suggestions.browseUrl = "/doctors?specialty=Ophthalmology";
  }
  
  // DERMATOLOGY - Skin, rash
  if (
    lowerMessage.includes("skin") || 
    lowerMessage.includes("rash") ||
    lowerMessage.includes("acne") ||
    lowerMessage.includes("mole") ||
    lowerMessage.includes("eczema") ||
    lowerMessage.includes("itchy") ||
    lowerMessage.includes("psoriasis")
  ) {
    suggestions.specialists.push("Dermatology");
    suggestions.appSpecialties.push("Dermatology");
    suggestions.browseUrl = "/doctors?specialty=Dermatology";
  }
  
  // GASTROENTEROLOGY - Digestive, stomach, abdominal
  if (
    lowerMessage.includes("stomach") ||
    lowerMessage.includes("digestive") ||
    lowerMessage.includes("abdominal") ||
    lowerMessage.includes("nausea") ||
    lowerMessage.includes("vomiting") ||
    lowerMessage.includes("diarrhea") ||
    lowerMessage.includes("constipation") ||
    lowerMessage.includes("bowel") ||
    lowerMessage.includes("gastro")
  ) {
    suggestions.specialists.push("Gastroenterology");
    suggestions.appSpecialties.push("Gastroenterology");
    suggestions.browseUrl = "/doctors?specialty=Gastroenterology";
  }
  
  // ORTHOPEDICS - Bones, joints, muscles
  if (
    lowerMessage.includes("bone") ||
    lowerMessage.includes("joint") ||
    lowerMessage.includes("fracture") ||
    lowerMessage.includes("orthopedic") ||
    lowerMessage.includes("muscle") ||
    lowerMessage.includes("back pain") ||
    lowerMessage.includes("knee") ||
    lowerMessage.includes("shoulder") ||
    lowerMessage.includes("hip") ||
    lowerMessage.includes("ankle") ||
    lowerMessage.includes("sprain") ||
    lowerMessage.includes("arthritis")
  ) {
    suggestions.specialists.push("Orthopedics");
    suggestions.appSpecialties.push("Orthopedics");
    suggestions.browseUrl = "/doctors?specialty=Orthopedics";
  }
  
  // ENDOCRINOLOGY - Hormones, diabetes, thyroid
  if (
    lowerMessage.includes("diabetes") ||
    lowerMessage.includes("thyroid") ||
    lowerMessage.includes("hormone") ||
    lowerMessage.includes("endocrine") ||
    lowerMessage.includes("blood sugar") ||
    lowerMessage.includes("insulin") ||
    lowerMessage.includes("metabolism")
  ) {
    suggestions.specialists.push("Endocrinology");
    suggestions.appSpecialties.push("Endocrinology");
    suggestions.browseUrl = "/doctors?specialty=Endocrinology";
  }
  
  // UROLOGY - Urinary, kidney, bladder
  if (
    lowerMessage.includes("urinary") ||
    lowerMessage.includes("urine") ||
    lowerMessage.includes("kidney") ||
    lowerMessage.includes("bladder") ||
    lowerMessage.includes("urination") ||
    lowerMessage.includes("uti")
  ) {
    suggestions.specialists.push("Urology");
    suggestions.appSpecialties.push("Urology");
    suggestions.browseUrl = "/doctors?specialty=Urology";
  }
  
  // OBSTETRICS & GYNECOLOGY - Women's health, pregnancy
  if (
    lowerMessage.includes("pregnant") ||
    lowerMessage.includes("pregnancy") ||
    lowerMessage.includes("menstrual") ||
    lowerMessage.includes("period") ||
    lowerMessage.includes("gynecolog") ||
    lowerMessage.includes("obstetric") ||
    lowerMessage.includes("pelvic")
  ) {
    suggestions.specialists.push("Obstetrics & Gynecology");
    suggestions.appSpecialties.push("Obstetrics & Gynecology");
    suggestions.browseUrl = "/doctors?specialty=Obstetrics%20%26%20Gynecology";
  }
  
  // PSYCHIATRY - Mental health
  if (
    lowerMessage.includes("depression") ||
    lowerMessage.includes("anxiety") ||
    lowerMessage.includes("panic") ||
    lowerMessage.includes("mental health") ||
    lowerMessage.includes("mood") ||
    lowerMessage.includes("stress") ||
    lowerMessage.includes("psychiatric")
  ) {
    suggestions.specialists.push("Psychiatry");
    suggestions.appSpecialties.push("Psychiatry");
    suggestions.browseUrl = "/doctors?specialty=Psychiatry";
  }
  
  // ONCOLOGY - Cancer-related
  if (
    lowerMessage.includes("cancer") ||
    lowerMessage.includes("tumor") ||
    lowerMessage.includes("oncology") ||
    lowerMessage.includes("chemotherapy") ||
    lowerMessage.includes("radiation")
  ) {
    suggestions.specialists.push("Oncology");
    suggestions.appSpecialties.push("Oncology");
    suggestions.browseUrl = "/doctors?specialty=Oncology";
  }

  console.log('🏥 Specialty suggestions generated:', suggestions);
  return suggestions;
}

// Helper function to extract next steps following precise safety guidelines
function extractNextSteps(message) {
  const steps = [];
  const lowerMessage = message.toLowerCase();
  const urgency = determineUrgency(message);

  // HIGH (Emergency) - Direct to emergency care
  if (urgency === "High (Emergency)") {
    steps.push("Call 911 or go to the emergency room immediately");
    steps.push("Do not wait or try to manage these symptoms at home");
    steps.push("Have someone drive you - do not drive yourself");
    return steps;
  }

  // All non-emergency cases start with Primary Care Provider
  steps.push("Contact your Primary Care Provider to schedule an evaluation");

  // Add symptom-specific guidance
  if (lowerMessage.includes("chest") || lowerMessage.includes("heart")) {
    steps.push("Your PCP may refer you to a cardiologist if needed");
    steps.push("Monitor symptoms and note triggers, duration, and severity");
    steps.push(
      "Discuss risk factors: age, family history, smoking, diabetes, hypertension"
    );
  } else if (
    lowerMessage.includes("headache") ||
    lowerMessage.includes("head")
  ) {
    steps.push("Your PCP may refer you to a neurologist if needed");
    steps.push(
      "Keep a symptom diary: triggers, timing, severity, associated symptoms"
    );
    steps.push("Note any changes in pattern or severity");
  } else if (lowerMessage.includes("cough")) {
    steps.push("Your PCP may refer you to a pulmonologist if needed");
    steps.push("Monitor for blood in sputum, fever, or breathing difficulties");
    steps.push("Note duration, triggers, and any associated symptoms");
  } else {
    steps.push("Your PCP will evaluate and refer to specialists if necessary");
    steps.push("Monitor your symptoms and note any changes or patterns");
  }

  // Add emergency escalation advice for non-emergency cases
  if (urgency !== "High (Emergency)") {
    steps.push("Seek immediate emergency care if red flag symptoms develop");
  }

  return steps;
}

// Helper function to get urgency color for frontend
function getUrgencyColor(urgency) {
  switch (urgency) {
    case "High (Emergency)":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return "yellow";
    case "Low":
      return "green";
    default:
      return "gray";
  }
}
