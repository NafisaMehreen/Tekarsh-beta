import React from 'react';
import { JourneyStep } from './JourneyStep.jsx';
import { 
  Search, 
  PenTool, 
  Code, 
  CheckCircle, 
  TrendingUp 
} from 'lucide-react';

export const ClientJourneySection = () => {
  const journeySteps = [
    {
      number: 1,
      title: "Discovery & Consultation",
      description: "Understand goals, challenges, and vision",
      activities: [
        "Initial workshops",
        "Requirement gathering", 
        "Technical audit"
      ],
      icon: Search
    },
    {
      number: 2,
      title: "Solution Design",
      description: "Craft tailored solutions aligned with your objectives",
      activities: [
        "Architecture planning",
        "Technology selection",
        "Resource allocation"
      ],
      icon: PenTool
    },
    {
      number: 3,
      title: "Agile Development & Execution",
      description: "Build and iterate with continuous feedback",
      activities: [
        "Sprint planning",
        "Development cycles",
        "Regular demos"
      ],
      icon: Code
    },
    {
      number: 4,
      title: "Quality Assurance & Delivery",
      description: "Rigorous testing and seamless deployment",
      activities: [
        "Comprehensive testing",
        "Performance optimization",
        "Production deployment"
      ],
      icon: CheckCircle
    },
    {
      number: 5,
      title: "Ongoing Support & Scaling",
      description: "Continuous partnership for growth and evolution",
      activities: [
        "Monitoring & maintenance",
        "Feature enhancements",
        "Scaling support"
      ],
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="client-journey-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="client-journey-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
            Your Journey with Tekarsh
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            From initial consultation to ongoing partnership, we guide you through every step 
            of your digital transformation journey with transparency and expertise.
          </p>
        </div>

        {/* Journey Steps - Desktop Horizontal Layout */}
        <ol className="hidden lg:flex justify-between items-start space-x-4 xl:space-x-8 mb-12 sm:mb-16" role="list">
          {journeySteps.map((step, index) => (
            <li key={step.number}>
              <JourneyStep
                number={step.number}
                title={step.title}
                description={step.description}
                activities={step.activities}
                icon={step.icon}
                isLast={index === journeySteps.length - 1}
              />
            </li>
          ))}
        </ol>

        {/* Journey Steps - Tablet/Mobile Vertical Layout */}
        <ol className="lg:hidden space-y-8 sm:space-y-12" role="list">
          {journeySteps.map((step, index) => (
            <li key={step.number} className="relative">
              <JourneyStep
                number={step.number}
                title={step.title}
                description={step.description}
                activities={step.activities}
                icon={step.icon}
                isLast={true} // No connecting lines on mobile
              />
              {/* Vertical connecting line for mobile */}
              {index < journeySteps.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-16 sm:top-20 w-0.5 h-8 sm:h-12 bg-green-200" aria-hidden="true"></div>
              )}
            </li>
          ))}
        </ol>

        {/* Partnership Emphasis */}
        <div className="text-center mt-12 sm:mt-16 p-6 sm:p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Partnership, Not Just Service Delivery
          </h3>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe in building long-term relationships with our clients. Our approach emphasizes 
            collaboration, transparency, and shared success throughout every phase of your project.
          </p>
        </div>
      </div>
    </section>
  );
};