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

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden" aria-labelledby="contact-title">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 id="contact-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to partner with us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Let's discuss how our comprehensive services can drive your business success.
            </p>
          </div>

          {/* Contact Actions */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <button 
              onClick={handleContactClick}
              className="bg-white text-green-800 font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-green-50 focus:bg-green-50 transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-lg min-h-[44px] min-w-[120px] text-sm sm:text-base flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
              aria-label="Contact us via email or contact form"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Contact Us
            </button>
            <button 
              onClick={handleScheduleConsultation}
              className="border-2 border-white text-white font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white hover:text-green-800 focus:bg-white focus:text-green-800 transition-all duration-300 transform hover:scale-105 focus:scale-105 min-h-[44px] min-w-[120px] text-sm sm:text-base flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
              aria-label="Schedule a consultation call with our team"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Schedule Call
            </button>
          </div>

          {/* Navigation to Related Pages */}
          <div className="border-t border-green-600 pt-8 sm:pt-12">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 text-center">
              Explore Our Other Services
            </h3>
            <nav aria-label="Related services navigation">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                <button
                  onClick={() => navigate('/software-development')}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-4 sm:p-6 rounded-xl hover:bg-white/20 focus:bg-white/20 transition-all duration-300 text-left group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
                  aria-label="Navigate to Software Development services page"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Code className="w-5 h-5 text-green-300" aria-hidden="true" />
                    <span className="font-semibold text-sm sm:text-base">Software Development</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                  <p className="text-xs sm:text-sm text-green-100">Custom web & mobile solutions</p>
                </button>

                <button
                  onClick={() => navigate('/data-processing')}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-4 sm:p-6 rounded-xl hover:bg-white/20 focus:bg-white/20 transition-all duration-300 text-left group min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
                  aria-label="Navigate to Data Processing services page"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Database className="w-5 h-5 text-blue-300" aria-hidden="true" />
                    <span className="font-semibold text-sm sm:text-base">Data Processing</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                  <p className="text-xs sm:text-sm text-green-100">BPO & back-office services</p>
                </button>

                <button
                  onClick={() => navigate('/quality-assurance')}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-4 sm:p-6 rounded-xl hover:bg-white/20 focus:bg-white/20 transition-all duration-300 text-left group min-h-[44px] sm:col-span-2 lg:col-span-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800"
                  aria-label="Navigate to Quality Assurance services page"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-pink-300" aria-hidden="true" />
                    <span className="font-semibold text-sm sm:text-base">Quality Assurance</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                  <p className="text-xs sm:text-sm text-green-100">Testing & security services</p>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/* Footer */}
      <TekarshFooter />

      {/* Floating Navigation */}
      <FloatingNavigation onSectionClick={scrollToSection} />
    </div>
  );
};