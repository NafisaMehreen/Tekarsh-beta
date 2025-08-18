import React from 'react';
import { Users, Target, Layers, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card.jsx';

const ModelCard = ({ model }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-gray-200 h-full flex flex-col">
      <CardHeader className="pb-3 sm:pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="p-2 sm:p-3 rounded-lg bg-green-100 text-green-600 group-hover:bg-green-200 transition-colors duration-300 w-fit" aria-hidden="true">
            {model.icon}
          </div>
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
            {model.title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {model.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3 sm:space-y-4 flex-grow">
        {/* Key Features */}
        <div>
          <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Key Features</h4>
          <ul className="space-y-1 sm:space-y-1.5" role="list">
            {model.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal For */}
        <div className="pt-2 border-t border-gray-100">
          <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Ideal For</h4>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {model.idealFor}
          </p>
        </div>

        {/* Examples if provided */}
        {model.examples && model.examples.length > 0 && (
          <div className="pt-2">
            <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Examples</h4>
            <ul className="space-y-1" role="list">
              {model.examples.map((example, index) => (
                <li key={index} className="text-xs sm:text-sm text-gray-600 leading-tight">
                  • {example}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export const EngagementModelsSection = ({ onConsultationClick }) => {
  const engagementModels = [
    {
      id: 'dedicated-teams',
      title: 'Dedicated Teams',
      description: 'Long-term, embedded extension of your team with full commitment to your project goals and company culture.',
      features: [
        'Flexible team sizes (2-20+ members)',
        'Direct communication channels',
        'Ongoing needs support and scaling',
        'Deep integration with your processes',
        'Consistent team members over time'
      ],
      idealFor: 'Companies scaling rapidly, long-term projects requiring consistent expertise, and businesses needing ongoing development support.',
      examples: [
        'Product development teams',
        'Platform maintenance and enhancement',
        'Multi-year digital transformation projects'
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'project-based',
      title: 'Project-Based Delivery',
      description: 'Fixed scope, milestone-driven approach with clear deliverables, timelines, and defined outcomes.',
      features: [
        'Fixed scope and timeline',
        'Milestone-based delivery',
        'Predictable costs and outcomes',
        'Comprehensive project management',
        'Quality assurance at each phase'
      ],
      idealFor: 'Well-defined projects with clear requirements, specific business objectives, and established timelines.',
      examples: [
        'Website redesigns and launches',
        'Mobile app development',
        'System integrations and migrations'
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 'hybrid-model',
      title: 'Hybrid Model',
      description: 'Strategic combination of engineering excellence and BPO services, providing comprehensive business support.',
      features: [
        'Engineering + BPO services combined',
        'Holistic business process support',
        'Cost-effective resource allocation',
        'Streamlined communication',
        'End-to-end solution delivery'
      ],
      idealFor: 'Businesses needing both technical development and operational support, startups requiring comprehensive services, and companies optimizing costs.',
      examples: [
        'Startup full-stack support',
        'Digital transformation with operations',
        'Product development with customer support'
      ],
      icon: <Layers className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 bg-gray-50" aria-labelledby="engagement-models-title">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 id="engagement-models-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-4 sm:px-0">
            Engagement Models
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Choose the engagement model that best fits your project needs, timeline, and business objectives.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" role="list">
          {engagementModels.map((model) => (
            <div key={model.id} role="listitem">
              <ModelCard model={model} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4 sm:px-0">
            Not sure which model is right for you? Let's discuss your specific needs.
          </p>
          <button 
            onClick={onConsultationClick}
            className="bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-green-700 focus:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg focus:shadow-lg min-h-[44px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Schedule a consultation to discuss engagement models"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};