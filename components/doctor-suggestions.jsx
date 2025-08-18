"use client";

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function DoctorSuggestions({ suggestions, urgency, className = "" }) {
  if (!suggestions || urgency === "High (Emergency)") {
    return null; // Don't show doctor suggestions for emergencies
  }

  const getSpecialtyIcon = (specialty) => {
    switch (specialty) {
      case "Cardiology":
        return "💓";
      case "Neurology":
        return "🧠";
      case "Pulmonology":
        return "🫁";
      case "Ophthalmology":
        return "👁️";
      case "Dermatology":
        return "🧴";
      case "Gastroenterology":
        return "🫄";
      case "Orthopedics":
        return "🦴";
      case "Endocrinology":
        return "⚗️";
      case "General Medicine":
        return "🩺";
      default:
        return "👨‍⚕️";
    }
  };

  const getUrgencyMessage = (urgencyLevel) => {
    switch (urgencyLevel) {
      case "High":
        return "Book an urgent appointment today";
      case "Medium":
        return "Schedule an appointment within a few days";
      case "Low":
        return "Schedule a routine appointment";
      default:
        return "Schedule an appointment";
    }
  };

  return (
    <div className={`p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg border border-blue-200 dark:border-blue-800 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
        <h4 className="font-semibold text-blue-900 dark:text-blue-100">Find Doctors in CareMeet</h4>
      </div>
      
      <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
        {getUrgencyMessage(urgency)} with our verified doctors:
      </p>

      <div className="space-y-3">
        {/* Primary Specialty */}
        <div className="flex items-center justify-between p-2 bg-white/60 dark:bg-gray-800/60 rounded border">
          <div className="flex items-center gap-2">
            <span className="text-lg">{getSpecialtyIcon(suggestions.primary)}</span>
            <span className="font-medium text-sm">{suggestions.primary}</span>
            <Badge variant="secondary" className="text-xs">Recommended</Badge>
          </div>
          <Link href={suggestions.browseUrl || "/doctors"}>
            <Button size="sm" className="text-xs">
              Browse Doctors
            </Button>
          </Link>
        </div>

        {/* Additional Specialists */}
        {suggestions.appSpecialties && suggestions.appSpecialties.length > 1 && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-blue-700 dark:text-blue-300">
              Additional specialists to consider:
            </p>
            {suggestions.appSpecialties
              .filter(specialty => specialty !== suggestions.primary) // Exclude primary
              .map((specialty, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-white/40 dark:bg-gray-800/40 rounded border border-blue-100 dark:border-blue-800">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{getSpecialtyIcon(specialty)}</span>
                  <span className="text-sm">{specialty}</span>
                </div>
                <Link href={`/doctors?specialty=${encodeURIComponent(specialty)}`}>
                  <Button size="sm" variant="outline" className="text-xs">
                    Browse
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-3 pt-2 border-t border-blue-200 dark:border-blue-800">
        <p className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          All doctors are verified and available for video consultations
        </p>
      </div>
    </div>
  );
}

export function EmergencyAlert({ className = "" }) {
  return (
    <div className={`p-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 rounded-lg border-2 border-red-200 dark:border-red-800 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <svg className="w-5 h-5 text-red-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <h4 className="font-bold text-red-900 dark:text-red-100">Medical Emergency</h4>
      </div>
      <p className="text-sm text-red-800 dark:text-red-200 font-semibold mb-3">
        🚨 Call 911 immediately - Do not use the app for emergency care
      </p>
      <div className="flex flex-col gap-2">
        <a 
          href="tel:911" 
          className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          📞 Call 911 Now
        </a>
        <p className="text-xs text-red-700 dark:text-red-300">
          Emergency services will provide immediate life-saving care
        </p>
      </div>
    </div>
  );
}
