import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar.jsx';
import { TekarshFooter } from '../components/TekarshFooter.jsx';
import { HeroSection } from '../components/ui/hero-section.jsx';
import { ServiceCategoriesOverview } from '../components/ServiceCategoriesOverview.jsx';
import { StrategicServicesDetailed } from '../components/StrategicServicesDetailed.jsx';
import { EngagementModelsSection } from '../components/EngagementModelsSection.jsx';
import { ClientJourneySection } from '../components/ClientJourneySection.jsx';
import { FloatingNavigation } from '../components/FloatingNavigation.jsx';
import { Breadcrumb } from '../components/Breadcrumb.jsx';
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
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50" role="navigation" aria-label="Main navigation">
        <Navbar onMenuClick={scrollToSection} />
      </nav>

      {/* Breadcrumb */}
      <div className="pt-[85px]">
        <Breadcrumb items={[{ label: 'Client Services' }]} />
      </div>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section aria-labelledby="hero-title" className="mt-4 sm:mt-6">
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
        <ServiceCategoriesOverview 
          onStrategicClick={() => scrollToSection('strategic-services')}
        />

        {/* Strategic Partnership Services Detailed Section */}
        <StrategicServicesDetailed 
          onConsultationClick={handleScheduleConsultation}
          onCaseStudiesClick={() => navigate('/case-studies')}
        />

        {/* Engagement Models Section */}
        <section id="engagement-models" aria-labelledby="engagement-models-title">
          <EngagementModelsSection onConsultationClick={handleScheduleConsultation} />
        </section>

        {/* Client Journey Section */}
        <section id="client-journey" aria-labelledby="client-journey-title">
          <ClientJourneySection />
        </section>
      </main>



      {/* Footer */}
      <TekarshFooter />

      {/* Floating Navigation */}
      <FloatingNavigation onSectionClick={scrollToSection} />
    </div>
  );
};