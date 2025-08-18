# 🩺 CareMeet - AI-Powered Telemedicine Platform

<p align="center">
  <img src="./public/banner.png" alt="CareMeet - AI-Powered Telemedicine Platform" />
</p>

<p align="center">
  <b>Next-Generation Healthcare Platform</b> 🚀
</p>

<p align="center">
  CareMeet is an advanced AI-powered telemedicine platform that revolutionizes healthcare delivery through intelligent symptom analysis, secure video consultations, and comprehensive patient-doctor management. Built with cutting-edge technology, CareMeet provides emergency care routing, specialist matching, and enterprise-grade security for modern healthcare needs.
</p>

<p align="center">
  <a href="#-how-caremeet-works">🩺 Explore Features</a> •
  <a href="#-getting-started">🚀 Quick Start</a> •
  <a href="#%EF%B8%8F-tech-stack">🛠️ Tech Stack</a> •
  <a href="#-project-structure">📂 Documentation</a>
</p>

---

## ✨ Features

- 🤖 **AI Health Assistant**: Advanced symptom analysis powered by Google Gemini AI with urgency classification and specialist recommendations
- 🏥 **Doctor Management**: Profile creation, verification system, and availability scheduling
- 📅 **Smart Appointment System**: Book, manage, and track appointments with real-time availability and conflict prevention
- 🎥 **Secure Video Consultations**: Integrated Vonage Video API for HIPAA-compliant telemedicine sessions
- 💳 **Flexible Credit System**: Subscription-based credit packages with automatic monthly allocation
- 👥 **Multi-Role Platform**: Patient, Doctor, and Admin roles with role-specific dashboards
- 🔒 **Enterprise Authentication**: Secure authentication and authorization using Clerk
- 📊 **Comprehensive Admin Dashboard**: Complete user management, doctor verification, and payout processing
- 💰 **Automated Payout System**: Real-time earnings tracking and secure payout processing for doctors
- 🚨 **Emergency Classification**: AI-powered urgency detection with emergency care routing
- 📱 **Responsive Design**: Modern, accessible UI built with Tailwind CSS and Radix UI
- 🔍 **Specialty Matching**: Intelligent doctor-patient matching based on symptoms and specialties
- 📈 **Analytics Dashboard**: Real-time insights for doctors including earnings, appointments, and performance metrics

---

## 🛠️ Tech Stack

### Core Technologies
- **Frontend Framework:** [Next.js](https://nextjs.org/) 15.3.2 with App Router
- **Runtime:** Node.js 18+
- **Language:** JavaScript/JSX
- **Package Manager:** npm/yarn

### AI & Machine Learning
- **AI Assistant:** [Google Gemini AI](https://ai.google.com/) for symptom analysis and medical recommendations
- **AI Models:** Gemini-1.5-Flash, Gemini-1.5-Pro, Gemini-2.5-Flash for health consultations

### Authentication & Security
- **Authentication:** [Clerk](https://clerk.com/) with role-based access control
- **Authorization:** Server-side middleware and route protection
- **Security:** HIPAA-compliant data handling

### Database & ORM
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/) with advanced schema management
- **Database Operations:** Server actions with transaction support

### Frontend & UI
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 4.1.7 with custom medical themes
- **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives with custom implementations
- **Icons:** [Lucide React](https://lucide.dev/) for consistent iconography
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/) for toast notifications
- **Theme:** Custom dark/light theme support with medical-focused design

### Video & Communication
- **Video Calls:** [Vonage Video API (OpenTok)](https://www.vonage.com/communications-apis/video/)
- **Real-time:** WebRTC for secure peer-to-peer communication
- **Session Management:** Token-based video session authentication

### Forms & Validation
- **Forms:** [React Hook Form](https://react-hook-form.com/) for performant form handling
- **Validation:** [Zod](https://zod.dev/) for runtime type validation
- **Form UI:** Custom form components with Radix UI integration

### State Management & Data Fetching
- **State Management:** React hooks with custom context providers
- **Server State:** Custom hooks for data fetching and caching
- **Optimistic Updates:** Real-time UI updates with revalidation

### Development & Deployment
- **Build Tool:** Turbopack for fast development builds
- **Linting:** ESLint with Next.js configuration
- **Deployment:** [Vercel](https://vercel.com/) with automatic CI/CD
- **Monitoring:** Built-in error tracking and performance monitoring

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have installed:

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager
- [PostgreSQL](https://www.postgresql.org/download/) database

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Shikhar1504/Doctors_Appointment_Platform.git
   cd Doctor
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env.local` file in the root directory and add the following variables. You can get the required keys from the respective platforms.

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/doctor_appointment"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_SIGN_IN_URL=your_sign_in_url
   NEXT_PUBLIC_SIGN_UP_URL=your_sign_up_url
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=your_next_sign_in_url
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=your_next_sign_up_url

   # Google Gemini AI (for AI Health Assistant)
   GEMINI_API_KEY=your_gemini_api_key

   # Vonage Video API (for video calls)
   NEXT_PUBLIC_VONAGE_APPLICATION_ID=your_vonage_app_id
   VONAGE_PRIVATE_KEY=your_vonage_api_key
   ```

4. **Set up the database**:

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma db push
   ```

5. **Run the development server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📂 Project Structure

```
Doctor/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── ai-health/     # AI Health Assistant API
│   ├── (auth)/            # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/            # Main application pages
│   │   ├── admin/         # Admin dashboard with verification
│   │   ├── appointments/  # Appointment management
│   │   ├── doctor/        # Doctor dashboard & earnings
│   │   ├── doctors/       # Doctor listing & filtering
│   │   ├── onboarding/    # User role selection & setup
│   │   ├── pricing/       # Credit packages & subscription
│   │   └── video-call/    # Secure video consultation
│   ├── globals.css        # Global styles & medical themes
│   ├── layout.js          # Root layout with auth
│   └── page.js            # Landing page with AI assistant
├── components/            # Reusable UI components
│   ├── ui/               # Base components (Radix UI)
│   │   ├── alert.jsx
│   │   ├── badge.jsx
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   └── ...
│   ├── ai-health-chat.jsx    # AI symptom analyzer
│   ├── urgency-badge.jsx     # Medical urgency indicators
│   ├── doctor-suggestions.jsx # AI specialist recommendations
│   ├── appointment-card.jsx  # Appointment display
│   ├── header.jsx           # Navigation header
│   ├── page-header.jsx      # Page title components
│   ├── pricing.jsx          # Credit pricing cards
│   └── theme-provider.jsx   # Dark/light theme
├── lib/                  # Utility functions and data
│   ├── prisma.js         # Database connection
│   ├── schema.js         # Zod validation schemas
│   ├── data.js           # Static data & feature definitions
│   └── checkUser.js      # Authentication utilities
├── hooks/                # Custom React hooks
│   └── use-fetch.js      # Data fetching hook
├── actions/              # Server actions
│   ├── admin.js          # Admin operations
│   ├── appointments.js   # Booking & video sessions
│   ├── credits.js        # Credit management
│   ├── doctor.js         # Doctor profile management
│   ├── patient.js        # Patient operations
│   └── payout.js         # Doctor earnings & payouts
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Complete database schema
├── public/               # Static assets
├── middleware.js         # Authentication & route protection
├── components.json       # shadcn/ui configuration
├── tailwind.config.js    # Tailwind customization
├── jsconfig.json         # JavaScript configuration
└── eslint.config.mjs     # ESLint configuration
```

---

## 🩺 How CareMeet Works

### 🤖 AI Health Assistant
Get instant health guidance with our advanced AI-powered symptom analyzer:
- **Smart Symptom Analysis**: Powered by Google Gemini AI for accurate health assessments
- **Urgency Classification**: Automatic categorization (Emergency, High, Medium, Low priority)
- **Specialist Recommendations**: AI suggests the most relevant medical specialists
- **Emergency Detection**: Immediate routing to emergency services for critical symptoms
- **Real-time Chat Interface**: Interactive conversation with medical-grade AI assistant
- **Evidence-based Guidance**: Recommendations based on medical best practices

### 👤 User Onboarding & Profile Management
Seamless registration and profile setup for all user types:
- **Role-based Registration**: Separate flows for Patients, Doctors, and Admins
- **Secure Authentication**: Enterprise-grade security with Clerk integration
- **Profile Customization**: Detailed profiles with medical history and preferences
- **Verification System**: Multi-step doctor credential verification process
- **Document Upload**: Secure handling of medical credentials and certifications

### 🏥 Doctor Management System
Comprehensive tools for healthcare providers:
- **Professional Profiles**: Detailed doctor profiles with specialties and experience
- **Credential Verification**: Admin-controlled verification of medical licenses
- **Availability Management**: Flexible scheduling with custom time slots
- **Specialty Categorization**: 15+ medical specialties for precise matching
- **Performance Analytics**: Earnings tracking and appointment insights
- **Status Management**: Active/suspended account controls

### 📅 Smart Appointment System
Intelligent booking with real-time conflict prevention:
- **Real-time Availability**: Live calendar integration with instant updates
- **Conflict Prevention**: Automatic detection and prevention of double-bookings
- **Time Slot Management**: 30-minute consultation windows with buffer time
- **Multi-day Booking**: Book appointments up to 4 days in advance
- **Appointment History**: Complete record of past and upcoming consultations
- **Status Tracking**: Real-time updates (Scheduled, Completed, Cancelled)
- **Patient Descriptions**: Pre-consultation symptom and concern documentation

### 🎥 Secure Video Consultations
HIPAA-compliant telemedicine powered by Vonage Video API:
- **Enterprise Video Quality**: HD video with adaptive streaming
- **Secure WebRTC**: End-to-end encrypted video communications
- **Session Authentication**: Token-based access control for privacy
- **Multi-platform Support**: Works on desktop, tablet, and mobile devices
- **Real-time Controls**: Toggle video/audio, screen sharing capabilities
- **Session Recording**: Optional recording for medical documentation
- **Automatic Cleanup**: Sessions terminate securely after consultations

### 💳 Flexible Credit System
Subscription-based payment model with automatic credit allocation:
- **Multiple Plans**: Free (10 credits), Standard (20 credits), Premium (50 credits)
- **Automatic Allocation**: Monthly credit distribution based on subscription tier
- **Pay-per-Consultation**: 2 credits per appointment (approximately $20 value)
- **Never-expiring Credits**: Credits remain available until used
- **Transparent Pricing**: Clear cost structure with no hidden fees
- **Subscription Management**: Easy plan changes and cancellation

### 💰 Doctor Earnings & Payout System
Automated earning distribution and payout processing:
- **Real-time Earnings**: Live tracking of consultation revenue
- **Revenue Sharing**: $8 per consultation to doctors, $2 platform fee
- **Secure Payouts**: PayPal integration for safe money transfers
- **Earnings Analytics**: Monthly summaries and performance insights
- **Payout Requests**: On-demand withdrawal of earned credits
- **Transaction History**: Complete financial record keeping
- **Tax Documentation**: Detailed earning reports for tax purposes

### 📊 Comprehensive Admin Dashboard
Powerful administrative tools for platform management:
- **User Management**: Complete oversight of patients, doctors, and staff
- **Doctor Verification**: Review and approve medical credentials
- **Payout Processing**: Approve and manage doctor payment requests
- **Platform Analytics**: System-wide metrics and performance indicators
- **User Suspension**: Account management and security controls
- **Financial Oversight**: Credit transaction monitoring and audit trails
- **System Health**: Real-time platform status and error monitoring

### 🔍 Intelligent Doctor Matching
AI-powered specialty matching for optimal care:
- **Symptom-based Matching**: Connect patients with relevant specialists
- **Specialty Filtering**: Browse doctors by medical expertise
- **Availability Optimization**: Show doctors with open time slots first
- **Experience Ranking**: Prioritize doctors based on credentials and reviews
- **Geographic Considerations**: Future support for location-based matching
- **Patient Preferences**: Match based on previous consultation history

### 📱 Cross-platform Accessibility
Modern, responsive design for all devices:
- **Mobile-first Design**: Optimized for smartphones and tablets
- **Progressive Web App**: App-like experience in web browsers
- **Dark/Light Themes**: Comfortable viewing in any lighting condition
- **Accessibility Compliance**: WCAG-compliant for users with disabilities
- **Multi-browser Support**: Works across Chrome, Safari, Firefox, and Edge
- **Offline Capabilities**: Limited functionality available without internet

### 🚨 Emergency Care Integration
Immediate routing for critical health situations:
- **Emergency Detection**: AI identifies life-threatening symptoms
- **911 Integration**: Direct emergency service contact for critical cases
- **Urgent Care Routing**: Fast-track scheduling for high-priority symptoms
- **Safety Protocols**: Clear escalation procedures for medical emergencies
- **Disclaimer System**: Appropriate medical disclaimers and limitations
- **Emergency Contacts**: Quick access to local emergency services

### 🛡️ Verified Doctor Network
Trusted healthcare providers with comprehensive verification:
- **Credential Verification**: Multi-step verification of medical licenses and certifications
- **Experience Validation**: Thorough review of professional background and expertise
- **Continuous Monitoring**: Ongoing assessment of doctor performance and patient feedback
- **Specialty Expertise**: Verified specialists across 15+ medical disciplines
- **Quality Assurance**: Regular audits and compliance checks for all healthcare providers
- **Professional Standards**: Adherence to medical ethics and professional conduct requirements

### 📋 Comprehensive Medical Documentation
Complete health record management and documentation:
- **Appointment History**: Detailed records of all consultations and treatments
- **Doctor's Notes**: Secure storage of medical observations and recommendations
- **Treatment Plans**: Comprehensive care plans and follow-up instructions
- **Prescription Management**: Digital prescription tracking and medication history
- **Medical Reports**: Downloadable consultation summaries and health assessments
- **Health Timeline**: Chronological view of patient's medical journey and progress
- **Secure Sharing**: HIPAA-compliant sharing of medical records between providers

### 💡 Personalized Healthcare Recommendations
AI-driven health insights and personalized care suggestions:
- **Health Risk Assessment**: AI analysis of symptoms and medical history patterns
- **Preventive Care Alerts**: Proactive notifications for health screenings and checkups
- **Lifestyle Recommendations**: Personalized wellness and lifestyle improvement suggestions
- **Medication Reminders**: Smart reminders for prescription adherence and refills
- **Follow-up Scheduling**: Automated recommendations for follow-up appointments
- **Health Trends**: Visual insights into health patterns and improvement tracking

### 🔐 Enterprise Security & Privacy
Advanced security measures for healthcare data protection:
- **End-to-End Encryption**: All communications and data encrypted at rest and in transit
- **HIPAA Compliance**: Full compliance with healthcare privacy regulations
- **Multi-Factor Authentication**: Enhanced security with 2FA and biometric options
- **Audit Logging**: Comprehensive tracking of all system access and data modifications
- **Data Sovereignty**: Secure data centers with geographic data residency options
- **Penetration Testing**: Regular security audits and vulnerability assessments
- **Privacy Controls**: Granular user control over data sharing and privacy settings

---

## 🗃️ Database Schema

The application uses PostgreSQL with Prisma ORM and includes the following comprehensive data models:

### Core Models
- **User**: Multi-role user management (PATIENT, DOCTOR, ADMIN) with authentication integration
- **Appointment**: Complete appointment lifecycle with video session management
- **Availability**: Doctor scheduling with flexible time slot management
- **CreditTransaction**: Financial tracking for credit purchases and usage
- **Payout**: Doctor earnings management with secure payout processing

### Key Features
- **Role-based Access**: Comprehensive user roles with appropriate field access
- **Verification System**: Doctor credential verification with status tracking
- **Financial Tracking**: Complete audit trail for credits and payments
- **Video Integration**: Secure session management with Vonage Video API
- **Appointment Management**: Status tracking from booking to completion
- **Transaction Support**: Database-level consistency with Prisma transactions

### Security & Compliance
- **Data Encryption**: Sensitive medical data protection
- **Audit Trails**: Complete transaction and action logging
- **HIPAA Considerations**: Medical data handling best practices
- **Role Isolation**: Strict data access controls by user role

---

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes to database

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

For support, please open an issue in the repository or contact the maintainers.

---

Built with ❤️ using Next.js, Clerk, and Vonage
