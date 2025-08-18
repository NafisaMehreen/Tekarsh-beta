import React from 'react';
import { ServiceDetail } from './ServiceDetail.jsx';
import { 
  Settings, 
  Lightbulb, 
  HeadphonesIcon,
  Target,
  TrendingUp,
  Shield
} from 'lucide-react';

export const StrategicServicesDetailed = ({ onConsultationClick, onCaseStudiesClick }) => {
  const strategicServices = [
    {
      title: "Process Optimization",
      description: "We analyze your current workflows and implement strategic improvements that reduce costs, eliminate bottlenecks, and enhance operational efficiency. Our data-driven approach ensures measurable results and sustainable growth.",
      icon: Settings,
      benefits: [
        "Streamlined workflows and reduced operational costs",
        "Elimination of process bottlenecks and inefficiencies",
        "Data-driven insights for continuous improvement",
        "Scalable processes that grow with your business"
      ],
      deliverables: [
        "Current state process analysis",
        "Process optimization roadmap",
        "Implementation guidelines",
        "Performance metrics dashboard",
        "Training materials",
        "Ongoing monitoring framework"
      ],
      outcomes: [
        "20-40% reduction in operational costs",
        "Improved process efficiency and speed",
        "Enhanced team productivity and satisfaction",
        "Better resource allocation and utilization"
      ]
    },
    {
      title: "Consulting & Advisory",
      description: "Our experienced consultants provide strategic guidance to help you navigate complex business challenges, make informed technology decisions, and develop long-term growth strategies that align with your vision.",
      icon: Lightbulb,
      benefits: [
        "Expert guidance on strategic business decisions",
        "Technology roadmap and architecture planning",
        "Risk assessment and mitigation strategies",
        "Market analysis and competitive positioning"
      ],
      deliverables: [
        "Strategic assessment report",
        "Technology roadmap",
        "Risk mitigation plan",
        "Implementation timeline",
        "ROI projections",
        "Executive presentations"
      ],
      outcomes: [
        "Clear strategic direction and actionable plans",
        "Reduced technology and business risks",
        "Improved decision-making capabilities",
        "Accelerated time-to-market for initiatives"
      ]
    },
    {
      title: "Continuous Support",
      description: "Beyond project delivery, we provide ongoing support to ensure your systems remain optimized, secure, and aligned with your evolving business needs. Our proactive approach prevents issues before they impact your operations.",
      icon: HeadphonesIcon,
      benefits: [
        "24/7 monitoring and proactive issue resolution",
        "Regular system updates and security patches",
        "Performance optimization and scaling support",
        "Dedicated support team with deep system knowledge"
      ],
      deliverables: [
        "Support service level agreements",
        "Monitoring and alerting setup",
        "Regular maintenance schedules",
        "Performance reports",
        "Security updates",
        "Escalation procedures"
      ],
      outcomes: [
        "99.9% system uptime and reliability",
        "Proactive issue prevention and resolution",
        "Continuous performance improvements",
        "Peace of mind with expert support coverage"
      ]
    }
  ];

  return (
    <section id="strategic-services" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 bg-gray-50" aria-labelledby="strategic-services-title">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Target className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
            Strategic Partnership Services
          </div>
          <h2 id="strategic-services-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight leading-tight px-4 sm:px-0">
            Your Strategic Technology Partner
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            We go beyond traditional service delivery to become your trusted strategic partner, 
            providing ongoing guidance, optimization, and support that evolves with your business needs.
          </p>
        </div>

        {/* Service Details */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24" role="list">
          {strategicServices.map((service, index) => (
            <div key={index} role="listitem">
              <ServiceDetail
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                deliverables={service.deliverables}
                outcomes={service.outcomes}
                icon={service.icon}
                reverse={index % 2 === 1}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm border border-gray-200">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Ready to Build a Strategic Partnership?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our strategic services can accelerate your business growth 
              and provide the competitive advantage you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={onConsultationClick}
                className="bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-green-700 focus:bg-green-700 transition-colors duration-300 min-h-[44px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Schedule a consultation to discuss strategic partnership services"
              >
                Schedule Consultation
              </button>
              <button 
                onClick={onCaseStudiesClick}
                className="border border-gray-300 text-gray-700 font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-50 focus:bg-gray-50 transition-colors duration-300 min-h-[44px] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="View case studies of our strategic partnership work"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};