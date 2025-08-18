"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { features } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Star, Search } from "lucide-react";

export default function HowCareMeetWorks() {
  // Group features by category for better organization
  const coreFeatures = features.filter(f => f.priority <= 6);
  const advancedFeatures = features.filter(f => f.priority > 6);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 medical-pattern opacity-20"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-slide-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <Badge className="medical-gradient text-white border-0 px-4 py-1">
              Complete Healthcare Solution
            </Badge>
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </div>
          
          <h2 className="heading-medical text-foreground mb-4">
            How{' '}
            <span className="gradient-title">CareMeet</span>{' '}
            Works
          </h2>
          
          <p className="subheading-medical max-w-3xl mx-auto">
            Experience healthcare the modern way - fast, secure, and accessible from anywhere
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-primary">16 Core Features</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-accent">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-primary">Enterprise Security</span>
            </div>
          </div>
        </div>

        {/* Core Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="warm-gradient text-white border-0 px-4 py-2 mb-4">
              🚀 Core Features
            </Badge>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Essential Healthcare Tools
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for comprehensive healthcare management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="card-hover border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden group h-full">
                <div className="absolute inset-0 medical-pattern opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 medical-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white scale-150">{feature.icon}</div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{feature.priority}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  
                  {/* Category Badge */}
                  <Badge variant="outline" className="w-fit text-xs capitalize">
                    {feature.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Feature highlights based on category */}
                  <div className="space-y-2">
                    {feature.category === 'ai' && (
                      <>
                        <div className="flex items-center gap-2 text-xs text-green-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>Emergency Detection</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>Specialist Matching</span>
                        </div>
                      </>
                    )}
                    
                    {feature.category === 'video' && (
                      <>
                        <div className="flex items-center gap-2 text-xs text-green-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>HIPAA Compliant</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>HD Quality</span>
                        </div>
                      </>
                    )}
                    
                    {feature.category === 'appointments' && (
                      <>
                        <div className="flex items-center gap-2 text-xs text-green-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>Real-time Updates</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>Conflict Prevention</span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === index ? 'bg-primary w-8' : 'bg-primary/20 w-2'
                        }`}
                      ></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="medical-gradient text-white border-0 px-4 py-2 mb-4">
              ⚡ Advanced Features
            </Badge>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Enterprise-Grade Capabilities
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced features that set CareMeet apart from traditional healthcare platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="card-hover border-accent/20 bg-gradient-to-br from-card to-accent/5 relative overflow-hidden group h-full">
                <div className="absolute inset-0 medical-pattern opacity-15 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                <CardHeader className="pb-3 relative z-10">
                  <div className="relative mb-3">
                    <div className="w-12 h-12 warm-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white scale-125">{feature.icon}</div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{feature.priority}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                    {feature.description}
                  </p>
                  
                  {/* Category Badge */}
                  <Badge variant="outline" className="w-fit text-xs capitalize bg-accent/10 border-accent/30 text-accent">
                    {feature.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-hover border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 medical-pattern opacity-20"></div>
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Badge className="medical-gradient text-white border-0 px-4 py-2">
                    🚀 Ready to Get Started?
                  </Badge>
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-black text-foreground">
                  Transform Your{' '}
                  <span className="gradient-title">Healthcare Experience</span>
                </h3>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join thousands of users who have simplified their healthcare journey with CareMeet's comprehensive platform.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="btn-medical focus-medical group">
                    <Link href="/onboarding" className="flex items-center gap-2">
                      Start Free Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="btn-outline-medical focus-medical">
                    <Link href="/doctors" className="flex items-center gap-2">
                      <Search className="w-5 h-5" />
                      Browse Doctors
                    </Link>
                  </Button>
                </div>
                
                {/* Feature Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-primary/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">16+</div>
                    <div className="text-sm text-muted-foreground">Core Features</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">AI Assistant</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Secure</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Specialties</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
