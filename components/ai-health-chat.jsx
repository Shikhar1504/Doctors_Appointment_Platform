"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UrgencyBadge, UrgencyCard } from '@/components/urgency-badge';
import { DoctorSuggestions, EmergencyAlert } from '@/components/doctor-suggestions';

export default function AIHealthChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m CareMeet AI, your health assistant. I can help analyze your symptoms and provide general health guidance. How are you feeling today?',
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-health', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();

      if (response.ok) {
        const aiMessage = {
          id: Date.now() + 1,
          type: 'ai',
          content: data.message,
          timestamp: data.timestamp,
          urgency: data.urgency,
          suggestions: data.suggestions,
          disclaimer: data.disclaimer
        };

        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error(data.error || 'Failed to get AI response');
      }
    } catch (error) {
      // Error handled gracefully in UI
      const errorMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: 'I apologize, but I\'m having trouble responding right now. Please try again or consult with a healthcare professional for immediate concerns.',
        timestamp: new Date().toISOString(),
        error: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "I have a headache and feel tired",
    "I'm experiencing chest discomfort",
    "I have a persistent cough",
    "I'm feeling nauseous"
  ];

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-card to-card/50 rounded-3xl p-6 border border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-10"></div>
        
        <div className="relative z-10 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-foreground">CareMeet AI Health Assistant</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                {isLoading ? 'Thinking...' : 'Online'}
              </span>
            </div>
          </div>
          
          {/* Messages Container */}
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {messages.map((message) => (
              <div key={message.id} className={`space-y-3`}>
                <div className={`${
                  message.type === 'user' 
                    ? 'bg-primary/10 rounded-2xl p-4 ml-8 border border-primary/20' 
                    : 'bg-accent/10 rounded-2xl p-4 mr-8 border border-accent/20'
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    {message.type === 'user' ? (
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    )}
                    <p className={`text-sm font-semibold ${
                      message.type === 'user' ? 'text-primary' : 'text-accent'
                    }`}>
                      {message.type === 'user' ? 'You' : 'CareMeet AI'}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {isClient ? new Date(message.timestamp).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      }) : ''}
                    </span>
                  </div>
                  <div className="text-foreground whitespace-pre-wrap leading-relaxed text-sm">
                    {message.content}
                  </div>
                  
                  {/* Urgency Card for AI messages */}
                  {message.type === 'ai' && message.urgency && (
                    <div className="mt-4 space-y-3">
                      <UrgencyCard 
                        urgency={message.urgency.level}
                        recommendations={message.urgency.recommendations}
                        className=""
                      />
                      
                      {/* Emergency Alert or Doctor Suggestions */}
                      {message.urgency.level === "High (Emergency)" ? (
                        <EmergencyAlert />
                      ) : (
                        <DoctorSuggestions 
                          suggestions={message.suggestions?.specialties}
                          urgency={message.urgency.level}
                        />
                      )}
                    </div>
                  )}
                  
                  {/* Disclaimer for AI messages */}
                  {message.type === 'ai' && message.disclaimer && (
                    <div className="mt-3 p-2 bg-muted/50 rounded-lg border-l-4 border-muted-foreground/30">
                      <p className="text-xs text-muted-foreground">
                        {message.disclaimer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="space-y-3">
                <div className="bg-accent/10 rounded-2xl p-4 mr-8 border border-accent/20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <p className="text-sm font-semibold text-accent">CareMeet AI</p>
                    <span className="text-xs text-muted-foreground">Analyzing...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-muted-foreground text-sm">Analyzing your symptoms and determining urgency level...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Quick examples:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input Area */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your symptoms or health concerns..."
                className="flex-1 p-3 border border-primary/20 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={2}
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="btn-medical px-4 py-2 self-end"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center">
              This AI provides general health information only. For medical emergencies, call emergency services immediately.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center animate-bounce">
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
    </div>
  );
}
