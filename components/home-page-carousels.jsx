"use client";

import { Carousel } from "@/components/testimonials-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { features, testimonials } from "@/lib/data";

export default function HomePageCarousels() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 medical-pattern opacity-20"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <Badge className="medical-gradient text-white border-0 px-4 py-1">
                Simple Process
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
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-primary">16 Core Features</span>
              </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-white bg-blue-600 px-2 py-1 rounded">AI-Powered</span>
            </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-primary">Enterprise Security</span>
              </div>
            </div>
          </div>

          <Carousel
            items={features}
            renderItem={(feature, index) => (
              <Card className="card-hover border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden group h-full">
                <div className="absolute inset-0 medical-pattern opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 medical-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white scale-125">{feature.icon}</div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{feature.priority}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  
                  {/* Category Badge */}
                  <Badge variant="outline" className="w-fit text-xs capitalize mt-2">
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
                    
                    {feature.category === 'credits' && (
                      <>
                        <div className="flex items-center gap-2 text-xs text-green-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>Never Expire</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>Auto-Allocation</span>
                        </div>
                      </>
                    )}
                    
                    {feature.category === 'security' && (
                      <>
                        <div className="flex items-center gap-2 text-xs text-green-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>End-to-End Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>HIPAA Compliant</span>
                        </div>
                      </>
                    )}
                    
                    {feature.category === 'emergency' && (
                      <>
                        <div className="flex items-center gap-2 text-xs text-red-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                          <span>911 Integration</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-orange-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span>Urgent Care Routing</span>
                        </div>
                      </>
                    )}
                    
                    {feature.category === 'doctors' && (
                      <>
                        <div className="flex items-center gap-2 text-xs text-green-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>Credential Verified</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>15+ Specialties</span>
                        </div>
                      </>
                    )}
                    
                    {feature.category === 'documentation' && (
                      <>
                        <div className="flex items-center gap-2 text-xs text-green-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>Secure Storage</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>Downloadable</span>
                        </div>
                      </>
                    )}
                    
                    {feature.category === 'earnings' && (
                      <>
                        <div className="flex items-center gap-2 text-xs text-green-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>Real-time Tracking</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>PayPal Payouts</span>
                        </div>
                      </>
                    )}
                    
                    {feature.category === 'admin' && (
                      <>
                        <div className="flex items-center gap-2 text-xs text-green-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>User Management</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-blue-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>Platform Analytics</span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === (index % 5) ? 'bg-primary w-8' : 'bg-primary/20 w-2'
                        }`}
                      ></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 medical-pattern opacity-10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <Badge className="warm-gradient text-white border-0 px-4 py-1">
                ⭐ Success Stories
              </Badge>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <h2 className="heading-medical text-foreground mb-4">
              What Our{' '}
              <span className="gradient-title">Users Say</span>
            </h2>
            <p className="subheading-medical max-w-3xl mx-auto">
              Real experiences from patients and doctors who trust CareMeet for their healthcare needs
            </p>
          </div>

          <Carousel
            items={testimonials}
            renderItem={(testimonial, index) => (
              <Card className="card-hover border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden group h-full">
                <div className="absolute inset-0 medical-pattern opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                <CardContent className="pt-8 pb-6 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="relative mb-6">
                    <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">&ldquo;</div>
                    <p className="text-muted-foreground leading-relaxed italic px-4">
                      {testimonial.quote}
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-primary/20 font-serif transform rotate-180">&ldquo;</div>
                  </div>
                  
                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl medical-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <span className="text-white font-bold text-lg">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {testimonial.role}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-muted-foreground">Verified User</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          />
        </div>
      </section>
    </>
  );
}