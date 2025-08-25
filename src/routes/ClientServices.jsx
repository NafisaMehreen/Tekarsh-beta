import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar.jsx';
import { TekarshFooter } from '../components/TekarshFooter.jsx';
import { HeroSection } from '../components/ui/hero-section.jsx';
import { ServiceCategoriesOverview } from '../components/ServiceCategoriesOverview.jsx';
import { StrategicServicesDetailed } from '../components/StrategicServicesDetailed.jsx';
import { EngagementModelsSection } from '../components/EngagementModelsSection.jsx';
import { ClientJourneySection } from '../components/ClientJourneySection.jsx';
import {
  Code, Database, Users, ArrowRight, CheckCircle,
  Target, Lightbulb, HeadphonesIcon, Settings,
  Mail, Phone, MapPin, ExternalLink
} from 'lucide-react';

export const ClientServices = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    // You can customize this to navigate to a contact page or open a contact modal
    scrollToSection('contact');
  };

  const handleScheduleConsultation = () => {
    // This could navigate to a booking page or open a contact form
    // For now, scroll to contact section
    scrollToSection('contact');
  };

  return (
    <div className="font-sans text-gray-900 scroll-smooth bg-neutral-100 min-h-screen">
      {/* Navigation */}
      <div className="fixed top-0 w-full z-50">
        <Navbar onMenuClick={scrollToSection} />
      </div>

      {/* Hero Section */}
      <section className="pt-[85px]">
        <HeroSection
          badge="✨ Client Services"
          title="Comprehensive Services for Your Success"
          subtitle="From engineering excellence to strategic partnerships"
          description="We deliver end-to-end solutions that drive business growth through technology innovation and operational excellence."
          primaryAction="Explore Our Services"
          secondaryAction="Contact Us"
          onPrimaryClick={() => scrollToSection('services')}
          onSecondaryClick={() => scrollToSection('contact')}
        />
      </section>

      {/* Service Categories Overview Section */}
      <section id="services" className="py-20 px-6 md:px-16 bg-white">
        <ServiceCategoriesOverview 
          onStrategicClick={() => scrollToSection('strategic-services')}
        />
      </section>

      {/* Strategic Partnership Services Detailed Section */}
      {/* <section id="strategic-services" className="py-20 px-6 md:px-16 bg-neutral-100">
        <StrategicServicesDetailed 
          onConsultationClick={handleScheduleConsultation}
          onCaseStudiesClick={() => navigate('/case-studies')}
        />
      </section> */}

      {/* Engagement Models Section */}
      {/* <section id="engagement-models" className="py-20 px-6 md:px-16 bg-white">
        <EngagementModelsSection onConsultationClick={handleScheduleConsultation} />
      </section> */}

      {/* Client Journey Section */}
      <section id="client-journey" className="py-20 px-6 md:px-16 bg-neutral-100">
        <ClientJourneySection />
      </section>

      {/* Footer */}
      <TekarshFooter />
    </div>
  );
};