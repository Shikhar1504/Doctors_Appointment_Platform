# Doctor Appointment Management System

A modern telemedicine platform built with Next.js that connects patients with doctors through secure video consultations. The platform features a credit-based system for appointments, doctor verification, and comprehensive appointment management.

## Features

- 🏥 **Doctor Management**: Profile creation, verification system, and availability scheduling
- 📅 **Appointment System**: Book, manage, and track appointments with real-time status updates
- 🎥 **Video Consultations**: Integrated Vonage Video API for secure telemedicine sessions
- 💳 **Credit System**: Purchase consultation credits and manage transactions
- 👥 **User Roles**: Patient, Doctor, and Admin roles with appropriate permissions
- 🔒 **Authentication**: Secure authentication using Clerk
- 📊 **Admin Dashboard**: Manage users, appointments, and payouts
- 💰 **Payout System**: Automated payout processing for doctors
- 📱 **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI

## Tech Stack

- **Frontend Framework:** Next.js 15.3.2 with App Router
- **Authentication:** Clerk
- **Database:** PostgreSQL with Prisma ORM
- **Styling:** Tailwind CSS 4.1.7
- **UI Components:** Radix UI + Custom components
- **Video Calls:** Vonage Video API (OpenTok)
- **Forms:** React Hook Form with Zod validation
- **State Management:** React hooks
- **Deployment:** Vercel (recommended)

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (v18 or higher)
- npm or yarn package manager
- PostgreSQL database

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Shikhar1504/Doctors_Appointment_Platform.git
cd Doctor
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:

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

# Vonage Video API (for video calls)
NEXT_PUBLIC_VONAGE_APPLICATION_ID=your_vonage_app_id
VONAGE_PRIVATE_KEY=your_vonage_api_key
```

4. Set up the database:

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
Doctor/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Main application pages
│   │   ├── admin/         # Admin dashboard
│   │   ├── appointments/  # Appointment management
│   │   ├── doctor/        # Doctor-specific pages
│   │   ├── doctors/       # Doctor listing
│   │   ├── onboarding/    # User onboarding
│   │   ├── pricing/       # Pricing page
│   │   └── video-call/    # Video consultation
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Landing page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (Radix UI)
│   ├── appointment-card.jsx
│   ├── header.jsx
│   ├── page-header.jsx
│   ├── pricing.jsx
│   └── theme-provider.jsx
├── lib/                  # Utility functions and data
├── hooks/                # Custom React hooks
├── actions/              # Server actions
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Database schema
├── public/               # Static assets
└── middleware.js         # Authentication middleware
```

## Key Features Explained

### User Roles

- **Patient**: Can book appointments, manage credits, and join video calls
- **Doctor**: Can set availability, manage appointments, and receive payouts
- **Admin**: Can manage users, process payouts, and oversee the platform

### Credit System

- Patients purchase consultation credits
- Each appointment costs 1 credit
- Credits are deducted when appointments are completed
- Doctors earn credits that can be converted to payouts

### Video Consultations

- Secure video calls powered by Vonage Video API
- Real-time communication between patients and doctors
- Session management and recording capabilities

### Appointment Management

- Real-time availability checking
- Appointment scheduling with conflict prevention
- Status tracking (Scheduled, Completed, Cancelled)
- Notes and patient descriptions

## Database Schema

The application uses PostgreSQL with the following main models:

- **User**: Patients, doctors, and admins with role-based fields
- **Appointment**: Booking details with video session information
- **Availability**: Doctor's available time slots
- **CreditTransaction**: Credit purchase and usage tracking
- **Payout**: Doctor earnings and payout processing

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes to database

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the repository or contact the maintainers.

---

Built with ❤️ using Next.js, Clerk, and Vonage
