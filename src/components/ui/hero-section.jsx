import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

export const HeroSection = ({ 
  badge = "New Feature",
  title = "Build something amazing",
  subtitle = "Create powerful applications with modern tools",
  description = "Transform your ideas into reality with our comprehensive development platform.",
  primaryAction = "Get Started",
  secondaryAction = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  features = []
}) => {
  return (
    <AuroraBackground className="py-20 sm:py-24 lg:py-32">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="mb-8 animate-fade-in">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            {badge}
          </Badge>
        </div>

        {/* Main Title */}
        <TextShimmer
          as="h1"
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
          duration={3}
          spread={3}
        >
          {title}
        </TextShimmer>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={onPrimaryClick}
            className="bg-green-700 hover:bg-green-800 text-white font-semibold group flex items-center justify-center text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            aria-label={`${primaryAction} button`}
          >
            {primaryAction}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onSecondaryClick}
            className="bg-transparent border border-green-700 text-green-700 hover:bg-green-50 font-semibold flex items-center justify-center text-lg px-8 py-4 rounded-xl transition-colors duration-200"
            aria-label={`${secondaryAction} button`}
          >
            {secondaryAction}
          </button>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 text-muted-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {feature.icon}
                </div>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 w-3 h-3 bg-blue-500/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-32 w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-500/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
    </AuroraBackground>
  );
};

export default HeroSection;