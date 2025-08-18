import { User, Calendar, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DoctorCard({ doctor }) {
  return (
    <Card className="card-hover border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden group">
      {/* Background Pattern */}
      <div className="absolute inset-0 medical-pattern opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
      
      <CardContent className="relative z-10 p-6">
        <div className="space-y-4">
          {/* Header Section */}
          <div className="flex items-start gap-4">
            {/* Doctor Avatar */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                {doctor.imageUrl ? (
                  <img
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                ) : (
                  <User className="h-8 w-8 text-primary" />
                )}
              </div>
              {/* Online Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Doctor Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-semibold text-foreground text-lg truncate">
                    Dr. {doctor.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {doctor.specialty}
                  </p>
                </div>
                
                <Badge className="medical-gradient text-white border-0 flex items-center gap-1 whitespace-nowrap">
                  <Award className="h-3 w-3" />
                  Verified
                </Badge>
              </div>
              
              {/* Experience & Consultation Type */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{doctor.experience} years</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Video Consultation</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="bg-muted/30 rounded-xl p-3 border border-primary/10">
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {doctor.description}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="btn-medical flex-1 text-sm py-2">
              <Link href={`/doctors/${doctor.specialty}/${doctor.id}`} className="flex items-center justify-center gap-2 w-full">
                <Calendar className="h-4 w-4" />
                Book Now
              </Link>
            </button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="px-4 border-primary/20 hover:bg-primary/5 focus-medical"
              asChild
            >
              <Link href={`/doctors/${doctor.specialty}/${doctor.id}`}>
                View Profile
              </Link>
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="flex items-center justify-between pt-2 border-t border-primary/10">
            <div className="text-xs text-muted-foreground">
              <span className="font-medium text-primary">Status:</span> Available for booking
            </div>
            <div className="text-xs text-muted-foreground">
              <span className="font-medium text-accent">2 Credits</span> /consultation
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
