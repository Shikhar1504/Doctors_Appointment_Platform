import HomePageCarousels from "@/components/home-page-carousels"; // This is the new import
import Pricing from "@/components/pricing";
import AIHealthChat from "@/components/ai-health-chat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { creditBenefits } from "@/lib/data";
import { ArrowRight, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Revolutionary Hero Section - Completely Unique Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Main Content Container */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center space-y-12">
            
            {/* Brand Announcement */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
              <span className="text-sm font-medium text-muted-foreground">🚀 Trusted by 50,000+ patients worldwide - Join the healthcare revolution</span>
            </div>
            
            {/* Revolutionary Headline */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="gradient-title text-5xl md:text-7xl lg:text-8xl">CareMeet</span><br/>
                <span className="text-foreground">Healthcare</span><br/>
                <span className="text-foreground">Reimagined for You</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Connect with certified doctors through video consultations, get AI-powered health insights, 
                and manage your wellness journey—all from the comfort of your home.
              </p>
            </div>
            
            {/* Interactive Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 medical-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Video Consultations</h3>
                <p className="text-sm text-muted-foreground">Connect with board-certified doctors through secure video calls</p>
              </div>
              
              <div className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 warm-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">AI-Powered Insights</h3>
                <p className="text-sm text-muted-foreground">Advanced symptom analysis with personalized health recommendations</p>
              </div>
              
              <div className="group bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 medical-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">HIPAA-compliant platform with end-to-end encryption</p>
              </div>
            </div>
            
            {/* Advanced CTA Section */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="group relative overflow-hidden btn-medical px-8 py-4 text-lg font-semibold">
                  <Link href="/onboarding" className="flex items-center justify-center gap-3 w-full relative z-10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Get Your Free Health Assessment
                  </Link>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                
                <button className="group btn-outline-medical px-8 py-4 text-lg font-semibold">
                  <Link href="/doctors" className="flex items-center justify-center gap-3 w-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Browse Verified Doctors
                  </Link>
                </button>
              </div>
              
              {/* Quality Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-primary">Board-certified specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-white">HIPAA-compliant consultations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-primary">24/7 availability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Health Icons */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center animate-float">
          <Stethoscope className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-40 right-32 w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
          <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-18 h-18 bg-accent/20 rounded-2xl flex items-center justify-center animate-float" style={{animationDelay: '3s'}}>
          <svg className="w-9 h-9 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </section>

      {/* Unique AI-Powered Features Section */}
      <section className="py-20 bg-gradient-to-r from-background via-primary/5 to-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: AI Features */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="medical-gradient text-white border-0 px-4 py-2">
                  🤖 Advanced AI Technology
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight">
                  Intelligent Healthcare
                  <span className="gradient-title block">At Your Fingertips</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experience the future of medicine with our advanced AI that understands your symptoms, 
                  recommends evidence-based treatments, and instantly connects you with specialist doctors.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="group flex items-start gap-4 p-4 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all hover:bg-primary/5">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Smart Symptom Assessment</h3>
                    <p className="text-muted-foreground">Our medical AI evaluates your symptoms using clinical protocols and provides evidence-based preliminary assessments instantly.</p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 p-4 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all hover:bg-accent/5">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Precision Doctor Matching</h3>
                    <p className="text-muted-foreground">Advanced matching algorithm connects you with board-certified specialists who have the exact expertise for your condition.</p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 p-4 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all hover:bg-primary/5">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Personalized Health Intelligence</h3>
                    <p className="text-muted-foreground">Receive tailored health recommendations, track wellness patterns, and get proactive insights to optimize your long-term health.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Working AI Health Chat */}
            <div className="relative">
              <AIHealthChat />
            </div>
          </div>
        </div>
      </section>

      {/* HomePageCarousels component */}
      <HomePageCarousels />

      {/* Pricing Section with enhanced styling */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-background via-accent/5 to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 medical-pattern opacity-15"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-in-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <Badge className="warm-gradient text-white border-0 px-4 py-1">
                💰 Affordable Healthcare
              </Badge>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
            </div>
            <h2 className="heading-medical text-foreground mb-4">
              <span className="gradient-title">CareMeet</span>{' '}
              Consultation Packages
            </h2>
            <p className="subheading-medical max-w-3xl mx-auto">
              Choose the perfect consultation package that fits your healthcare needs and budget
            </p>
          </div>

          <div className="mx-auto">
            {/* Clerk Pricing Table */}
            <div className="mb-12">
              <Pricing />
            </div>

            {/* Enhanced Credit System Description */}
            <Card className="card-hover border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
              <div className="absolute inset-0 medical-pattern opacity-20"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 medical-gradient rounded-2xl flex items-center justify-center">
                    <Stethoscope className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      How Our Credit System Works
                    </CardTitle>
                    <p className="text-muted-foreground">Simple, transparent, and flexible</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Benefits List */}
                  <div className="space-y-4">
                    {creditBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                        <div className="w-8 h-8 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="h-4 w-4 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <p
                          className="text-foreground leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: benefit }}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Feature Highlights */}
                  <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
                    <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">✨</span>
                      </div>
                      Why Choose CareMeet Credits?
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>No hidden fees or surprise charges</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Credits never expire</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Instant refunds available</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Volume discounts for bulk purchases</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 medical-pattern opacity-10"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Card className="card-hover border-primary/20 bg-gradient-to-br from-card to-card/50 relative overflow-hidden">
            <div className="absolute inset-0 medical-pattern opacity-20"></div>
            
            <CardContent className="p-8 md:p-12 lg:p-16 relative z-10">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Content */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <Badge className="medical-gradient text-white border-0 px-3 py-1 text-sm">
                      🚀 Get Started Today
                    </Badge>
                  </div>
                  
                  <h2 className="heading-medical text-foreground mb-4">
                    Ready to transform your{' '}
                    <span className="gradient-title">healthcare experience</span>?
                  </h2>
                  
                  <p className="subheading-medical mb-6">
                    Join thousands of users who have simplified their healthcare journey with CareMeet. 
                    Get started today and experience healthcare the way it should be.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="btn-medical focus-medical">
                      <Link href="/sign-up" className="flex items-center justify-center gap-2 w-full">
                        Start Free Trial
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </button>
                    
                    <button className="btn-outline-medical focus-medical">
                      <Link href="#pricing" className="flex items-center justify-center gap-2 w-full">
                        <Stethoscope className="w-5 h-5" />
                        View Pricing
                      </Link>
                    </button>
                  </div>
                  
                  {/* Trust Badges */}
                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-primary/20">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>HIPAA Compliant</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>SSL Secured</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                      </div>
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
                
                {/* Stats/Visual */}
                <div className="lg:col-span-4">
                  <div className="relative">
                    <div className="bg-primary/10 rounded-3xl p-8 border border-primary/20">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 medical-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Stethoscope className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Active Users</span>
                            <span className="font-bold text-primary">50,000+</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Consultations</span>
                            <span className="font-bold text-accent">100,000+</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Satisfaction</span>
                            <span className="font-bold text-green-600">98.5%</span>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-primary/20">
                          <div className="flex items-center justify-center gap-1 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Average user rating</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
