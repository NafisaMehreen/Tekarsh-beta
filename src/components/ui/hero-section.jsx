import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

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
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg font-semibold group"
            onClick={onPrimaryClick}
          >
            {primaryAction}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-lg font-semibold"
            onClick={onSecondaryClick}
          >
            {secondaryAction}
          </Button>
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
    </div>
  );
};

// CSS for animations (add to your global CSS)
const styles = `
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}
`;

export default HeroSection;