# CareMeet - AI-Powered Telemedicine Platform

## Project Title and Short Description

**CareMeet** is a comprehensive AI-powered telemedicine platform that connects patients with verified doctors through secure video consultations. Built with modern web technologies, CareMeet features intelligent symptom analysis, automated doctor matching, and a flexible credit-based payment system. The platform supports multiple user roles (patients, doctors, and administrators) and provides a seamless healthcare experience from initial consultation to follow-up care.

## Features

CareMeet offers a complete telemedicine solution with the following key functionalities:

- **🤖 AI Health Assistant**: Advanced symptom analysis powered by Google Gemini AI with automatic urgency classification and specialist recommendations
- **🎥 Secure Video Consultations**: HIPAA-compliant video calls using Vonage Video API with end-to-end encryption
- **👨‍⚕️ Doctor Verification System**: Multi-step credential verification for healthcare providers across 15+ medical specialties
- **📅 Smart Appointment Booking**: Real-time availability checking with conflict prevention and instant confirmation
- **💳 Flexible Credit System**: Subscription-based credit packages with automatic monthly allocation (2 credits per consultation)
- **💰 Doctor Earnings & Payouts**: Real-time earnings tracking with secure PayPal payouts for healthcare providers
- **📊 Admin Dashboard**: Comprehensive platform management including user oversight, doctor verification, and payout processing
- **🚨 Emergency Detection**: AI-powered identification of critical symptoms with immediate emergency routing
- **🔍 Intelligent Matching**: Symptom-based doctor-patient matching with specialty filtering
- **📱 Responsive Design**: Mobile-first interface with dark/light theme support and accessibility compliance
- **🔐 Enterprise Security**: Multi-factor authentication, audit logging, and HIPAA-compliant data handling

## Technologies Used

### Frontend & UI

- **Next.js 15.3.2** - React framework with App Router for server-side rendering and routing
- **React 19** - Modern React with hooks and concurrent features
- **Tailwind CSS 4.1.7** - Utility-first CSS framework with custom medical themes
- **Radix UI** - Accessible, unstyled UI components for consistent design
- **Lucide React** - Beautiful, consistent icon library

### Backend & Database

- **Node.js 18+** - JavaScript runtime for server-side operations
- **PostgreSQL** - Robust relational database for data persistence
- **Prisma** - Type-safe ORM with database schema management and migrations

### Authentication & Security

- **Clerk** - Complete authentication and user management solution
- **Middleware** - Route protection and role-based access control

### AI & APIs

- **Google Gemini AI** - Advanced AI models for symptom analysis and medical recommendations
- **Vonage Video API** - Enterprise-grade video communication platform
- **React Hook Form + Zod** - Form handling with runtime type validation

### Development Tools

- **ESLint** - Code linting and quality assurance
- **Turbopack** - Fast development builds and hot reloading
- **Sonner** - Toast notifications for user feedback

## Screenshots or Demo

### Landing Page

_Hero section showcasing AI health assistant and key features_

### AI Health Chat Interface

_Interactive chat with symptom analysis and specialist recommendations_

### Video Consultation

_Secure video call interface with controls and participant views_

### Doctor Dashboard

_Earnings tracking, appointment management, and availability settings_

### Admin Panel

_User management, doctor verification, and payout processing_

_Note: Screenshots and live demo will be added once the application is deployed. For now, you can run the development server locally to explore all features._

## Installation & Setup Instructions

### Prerequisites

- Node.js 18 or higher
- PostgreSQL database
- npm or yarn package manager

### Local Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Shikhar1504/Doctors_Appointment_Platform.git
   cd Doctor
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory with the following variables:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/doctor_appointment"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

   # Google Gemini AI
   GEMINI_API_KEY=your_gemini_api_key

   # Vonage Video API
   NEXT_PUBLIC_VONAGE_APPLICATION_ID=your_vonage_app_id
   VONAGE_PRIVATE_KEY=your_vonage_private_key
   ```

4. **Database Setup**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Push schema to database
   npx prisma db push
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
npm run start
```

## API Endpoints

### AI Health Assistant

- **POST** `/api/ai-health`
  - Analyzes user symptoms using Google Gemini AI
  - Returns urgency classification, specialist recommendations, and care guidance
  - Request body: `{ "message": "user symptom description" }`
  - Response includes urgency level, suggested specialties, and next steps

### Authentication Endpoints (via Clerk)

- `/sign-in` - User authentication
- `/sign-up` - User registration
- `/onboarding` - Role selection and profile setup

### Protected Routes

- `/doctors` - Browse and filter doctors by specialty
- `/appointments` - Manage patient appointments
- `/doctor` - Doctor dashboard and earnings
- `/admin` - Administrative functions
- `/video-call` - Secure video consultations

## Usage Instructions

### For Patients

1. **Sign Up & Onboarding**

   - Create account and select "Patient" role
   - Complete profile setup

2. **AI Health Consultation**

   - Use the AI chat assistant on the homepage
   - Describe symptoms for instant analysis
   - Receive urgency classification and specialist recommendations

3. **Book Appointments**

   - Browse doctors by specialty or use AI recommendations
   - Check real-time availability (up to 4 days ahead)
   - Book 30-minute consultations (costs 2 credits)

4. **Video Consultations**

   - Join calls 30 minutes before scheduled time
   - Use in-call controls for video/audio management
   - Consultations are recorded for medical documentation

5. **Credit Management**
   - Purchase subscription packages for automatic credit allocation
   - Monitor credit balance in header
   - Credits never expire and can be used anytime

### For Doctors

1. **Profile Setup**

   - Complete doctor registration with specialty and experience
   - Upload credential documents for verification
   - Set availability schedule

2. **Dashboard Management**

   - View upcoming appointments and patient details
   - Add consultation notes after appointments
   - Track earnings and request payouts

3. **Video Consultations**
   - Join patient calls at scheduled times
   - Access patient descriptions and medical history
   - Provide professional medical advice

### For Administrators

1. **Doctor Verification**

   - Review pending doctor applications
   - Verify credentials and approve/reject applications
   - Manage doctor status (active/suspended)

2. **Payout Processing**

   - Review doctor payout requests
   - Process payments via PayPal integration
   - Monitor platform financials

3. **User Management**
   - Oversee all platform users
   - Handle support requests and issues
   - Monitor system health and analytics

## Contribution Guidelines

We welcome contributions to CareMeet! Here's how you can help:

### Development Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following our coding standards
4. Test thoroughly and ensure all tests pass
5. Submit a pull request with detailed description

### Code Standards

- Follow ESLint configuration for code quality
- Use TypeScript for type safety where applicable
- Maintain comprehensive documentation
- Ensure responsive design and accessibility
- Test across multiple browsers and devices

### Areas for Contribution

- UI/UX improvements and accessibility enhancements
- Additional AI health analysis features
- New medical specialties and doctor matching algorithms
- Enhanced security and privacy features
- Mobile app development
- Integration with additional healthcare APIs

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Key Learning & Skills Demonstrated

This full-stack telemedicine platform showcases expertise in modern web development and healthcare technology integration:

### Frontend Development

- **Next.js 15** with App Router and Server Components
- **React 19** with advanced hooks and state management
- **Responsive Design** with Tailwind CSS and mobile-first approach
- **Component Architecture** using Radix UI primitives
- **Form Handling** with React Hook Form and Zod validation

### Backend & Database

- **Server Actions** for secure data operations
- **Prisma ORM** with PostgreSQL for type-safe database operations
- **API Development** with RESTful endpoints and error handling
- **Authentication** with Clerk and middleware protection
- **Database Design** with complex relationships and transactions

### AI & Machine Learning Integration

- **Google Gemini AI** integration for natural language processing
- **Medical AI** for symptom analysis and specialist recommendations
- **Prompt Engineering** for healthcare-specific AI responses
- **Fallback Systems** for reliable AI service delivery

### Real-time Communication

- **Vonage Video API** for enterprise video communications
- **WebRTC** implementation for peer-to-peer video calls
- **Session Management** with token-based authentication
- **Real-time Controls** for video/audio management

### Security & Compliance

- **HIPAA Compliance** considerations for healthcare data
- **End-to-end Encryption** for sensitive communications
- **Role-based Access Control** with granular permissions
- **Audit Logging** and security best practices

### DevOps & Deployment

- **Environment Configuration** for multiple deployment environments
- **Database Migrations** with Prisma schema management
- **Performance Optimization** with Turbopack and code splitting
- **Error Handling** and monitoring systems

### Healthcare Domain Knowledge

- **Medical Workflow** understanding and implementation
- **Healthcare Regulations** awareness and compliance
- **Patient-Doctor Communication** optimization
- **Emergency Response** protocols and routing

This project demonstrates the ability to build production-ready, scalable applications that solve real-world problems in the healthcare industry, combining technical expertise with domain-specific knowledge.

---

Built with ❤️ by Shikhar using Next.js, Clerk, Google Gemini AI, and Vonage Video API
