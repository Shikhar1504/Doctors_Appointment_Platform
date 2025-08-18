import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
  Bot,
  Stethoscope,
  Heart,
  Shield,
  Search,
  Smartphone,
  AlertTriangle,
  DollarSign,
  Settings,
  Lightbulb,
  Lock,
  Activity,
  UserCheck,
  Clock,
  Zap,
} from "lucide-react";

// Comprehensive JSON data for all CareMeet features
export const features = [
  {
    icon: <Bot className="h-6 w-6 text-purple-500" />,
    title: "AI Health Assistant",
    description:
      "Get instant symptom analysis and health guidance powered by Google Gemini AI with emergency detection and specialist recommendations.",
    category: "ai",
    priority: 1
  },
  {
    icon: <User className="h-6 w-6 text-purple-500" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized healthcare recommendations and role-based access to platform features.",
    category: "onboarding",
    priority: 2
  },
  {
    icon: <Calendar className="h-6 w-6 text-purple-500" />,
    title: "Smart Appointment Booking",
    description:
      "Browse doctor profiles, check real-time availability, and book appointments with intelligent conflict prevention and instant confirmation.",
    category: "appointments",
    priority: 3
  },
  {
    icon: <Video className="h-6 w-6 text-purple-500" />,
    title: "Secure Video Consultations",
    description:
      "Connect with doctors through HIPAA-compliant, HD video consultations powered by Vonage Video API with end-to-end encryption.",
    category: "video",
    priority: 4
  },
  {
    icon: <CreditCard className="h-6 w-6 text-purple-500" />,
    title: "Flexible Credit System",
    description:
      "Purchase subscription-based credit packages with automatic monthly allocation, transparent pricing, and never-expiring credits.",
    category: "credits",
    priority: 5
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-purple-500" />,
    title: "Verified Doctor Network",
    description:
      "Connect with thoroughly vetted healthcare providers across 15+ specialties with verified credentials and continuous quality monitoring.",
    category: "doctors",
    priority: 6
  },
  {
    icon: <FileText className="h-6 w-6 text-purple-500" />,
    title: "Medical Documentation",
    description:
      "Access comprehensive health records, doctor's notes, treatment plans, and downloadable consultation summaries with secure sharing.",
    category: "documentation",
    priority: 7
  },
  {
    icon: <DollarSign className="h-6 w-6 text-purple-500" />,
    title: "Doctor Earnings & Payouts",
    description:
      "Real-time earnings tracking for doctors with secure PayPal payouts, performance analytics, and transparent revenue sharing.",
    category: "earnings",
    priority: 8
  },
  {
    icon: <Settings className="h-6 w-6 text-purple-500" />,
    title: "Admin Dashboard",
    description:
      "Comprehensive platform management with doctor verification, payout processing, user management, and system analytics.",
    category: "admin",
    priority: 9
  },
  {
    icon: <Search className="h-6 w-6 text-purple-500" />,
    title: "Intelligent Doctor Matching",
    description:
      "AI-powered specialty matching that connects patients with the most suitable doctors based on symptoms, availability, and expertise.",
    category: "matching",
    priority: 10
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-purple-500" />,
    title: "Emergency Care Integration",
    description:
      "Immediate emergency detection with 911 integration, urgent care routing, and clear safety protocols for critical health situations.",
    category: "emergency",
    priority: 11
  },
  {
    icon: <Smartphone className="h-6 w-6 text-purple-500" />,
    title: "Cross-Platform Accessibility",
    description:
      "Mobile-first responsive design with PWA capabilities, dark/light themes, and WCAG compliance for seamless access across all devices.",
    category: "accessibility",
    priority: 12
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-purple-500" />,
    title: "Personalized Health Insights",
    description:
      "AI-driven health recommendations, preventive care alerts, lifestyle suggestions, and medication reminders for optimal wellness.",
    category: "insights",
    priority: 13
  },
  {
    icon: <Lock className="h-6 w-6 text-purple-500" />,
    title: "Enterprise Security",
    description:
      "End-to-end encryption, HIPAA compliance, multi-factor authentication, and comprehensive audit logging for maximum data protection.",
    category: "security",
    priority: 14
  },
  {
    icon: <Activity className="h-6 w-6 text-purple-500" />,
    title: "Real-Time Analytics",
    description:
      "Live performance metrics for doctors, appointment tracking, earnings insights, and platform-wide analytics for informed decision making.",
    category: "analytics",
    priority: 15
  },
  {
    icon: <Clock className="h-6 w-6 text-purple-500" />,
    title: "Availability Management",
    description:
      "Flexible doctor scheduling with custom time slots, real-time updates, and intelligent conflict prevention for optimal appointment planning.",
    category: "scheduling",
    priority: 16
  }
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "SP",
    name: "Sarah P.",
    role: "Patient",
    quote:
      "The video consultation feature saved me so much time. I was able to get medical advice without taking time off work or traveling to a clinic.",
  },
  {
    initials: "DR",
    name: "Dr. Robert M.",
    role: "Cardiologist",
    quote:
      "This platform has revolutionized my practice. I can now reach more patients and provide timely care without the constraints of a physical office.",
  },
  {
    initials: "JT",
    name: "James T.",
    role: "Patient",
    quote:
      "The credit system is so convenient. I purchased a package for my family, and we've been able to consult with specialists whenever needed.",
  },
];

// JSON data for credit system benefits
export const creditBenefits = [
  "Each consultation requires <strong class='text-purple-500'>2 credits</strong> regardless of duration",
  "Credits <strong class='text-purple-500'>never expire</strong> - use them whenever you need",
  "Monthly subscriptions give you <strong class='text-purple-500'>fresh credits every month</strong>",
  "Cancel or change your subscription <strong class='text-purple-500'>anytime</strong> without penalties",
];
