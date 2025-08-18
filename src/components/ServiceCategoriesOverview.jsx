import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Database, Users } from 'lucide-react';
import { ServiceCard } from './ServiceCard.jsx';

export const ServiceCategoriesOverview = ({ onStrategicClick }) => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      title: "Engineering Services",
      description: "High-performance, scalable systems tailored to your growth",
      services: [
        "Custom Web & Mobile Development",
        "Cloud & Integrations", 
        "Quality Assurance & Security",
        "AI/ML Solutions"
      ],
      icon: Code,
      color: "green",
      onClick: () => navigate('/software-development')
    },
    {
      title: "Back-Office & BPO Services", 
      description: "Operational efficiency, reduced overhead, and accuracy at scale",
      services: [
        "Data Management",
        "Financial Support",
        "Customer Support", 
        "Scalable Workforce"
      ],
      icon: Database,
      color: "blue",
      onClick: () => navigate('/data-processing')
    },
    {
      title: "Strategic Partnership Services",
      description: "You gain not just a vendor, but a partner aligned with your vision",
      services: [
        "Process Optimization",
        "Consulting & Advisory",
        "Continuous Support"
      ],
      icon: Users,
      color: "purple",
      onClick: onStrategicClick
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 bg-white" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="services-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight leading-tight">
            Our Service Categories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Comprehensive solutions designed to accelerate your business growth through technology and operational excellence.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" role="list">
          {serviceCategories.map((category, index) => (
            <div key={index} role="listitem">
              <ServiceCard
                title={category.title}
                description={category.description}
                services={category.services}
                icon={category.icon}
                color={category.color}
                onClick={category.onClick}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};