"use client";

import { Badge } from '@/components/ui/badge';

export function UrgencyBadge({ urgency, className = "" }) {
  const getUrgencyColor = (level) => {
    switch (level) {
      case "High (Emergency)":
        return "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200";
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900 dark:text-orange-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-200";
      case "Low":
        return "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getUrgencyIcon = (level) => {
    switch (level) {
      case "High (Emergency)":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case "High":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "Medium":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "Low":
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getUrgencyText = (level) => {
    switch (level) {
      case "High (Emergency)":
        return "Emergency";
      case "High":
        return "Urgent";
      case "Medium":
        return "Medium Priority";
      case "Low":
        return "Low Priority";
      default:
        return "Unknown";
    }
  };

  const getAnimationClass = (level) => {
    switch (level) {
      case "High (Emergency)":
        return "animate-pulse";
      case "High":
        return "animate-pulse";
      default:
        return "";
    }
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border font-semibold text-sm ${getUrgencyColor(urgency)} ${getAnimationClass(urgency)} ${className}`}>
      {getUrgencyIcon(urgency)}
      <span>
        <span className="font-bold">Urgency:</span> {getUrgencyText(urgency)}
      </span>
    </div>
  );
}

export function UrgencyCard({ urgency, recommendations, className = "" }) {
  const getCardColor = (level) => {
    switch (level) {
      case "High (Emergency)":
        return "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800";
      case "High":
        return "bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800";
      case "Medium":
        return "bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800";
      case "Low":
        return "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800";
      default:
        return "bg-gray-50 border-gray-200 dark:bg-gray-950 dark:border-gray-800";
    }
  };

  const getShadowClass = (level) => {
    switch (level) {
      case "High (Emergency)":
        return "shadow-lg shadow-red-200/50 dark:shadow-red-900/50";
      case "High":
        return "shadow-lg shadow-orange-200/50 dark:shadow-orange-900/50";
      case "Medium":
        return "shadow-md shadow-yellow-200/50 dark:shadow-yellow-900/50";
      case "Low":
        return "shadow-md shadow-green-200/50 dark:shadow-green-900/50";
      default:
        return "shadow-md";
    }
  };

  return (
    <div className={`p-4 rounded-lg border-2 ${getCardColor(urgency)} ${getShadowClass(urgency)} transition-all duration-300 ${className}`}>
      <UrgencyBadge urgency={urgency} className="mb-3" />
      {recommendations && (
        <div className="space-y-2">
          <p className="font-semibold text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Recommended next steps:
          </p>
          <p className="text-sm leading-relaxed pl-6">{recommendations}</p>
        </div>
      )}
    </div>
  );
}
