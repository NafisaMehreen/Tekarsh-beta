import React from 'react';
import { Navbar } from '../Navbar.jsx';
import { TekarshFooter } from '../components/TekarshFooter.jsx';
import { HeroSection } from '../components/ui/hero-section.jsx';
import {
  Shield, Bug, CheckCircle, Target, Zap, Users, 
  Monitor, 
  ArrowRight
} from 'lucide-react';

export const Qa = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "99.9%", label: "Bug Detection Rate" },
    { number: "24/7", label: "Testing Support" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="font-sans text-gray-900 scroll-smooth bg-neutral-100 min-h-screen">
      {/* Navigation */}
      <div className="fixed top-0 w-full z-50">
        <Navbar onMenuClick={scrollToSection} />
      </div>

      {/* Hero Section */}
      <section className="pt-[85px]">
        <HeroSection
          badge="🔍 Quality Assurance"
          title="Ship with confidence"
          subtitle="QA that safeguards every release"
          description="Ensure your software meets the highest standards with our comprehensive QA testing services and quality assurance solutions."
          primaryAction="Start testing"
          secondaryAction="See process"
          onPrimaryClick={() => scrollToSection('services')}
          onSecondaryClick={() => scrollToSection('services')}
          features={[
            { icon: <Shield className="w-5 h-5 text-primary" />, text: 'Security First' },
            { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: 'Zero Critical Bugs' },
            { icon: <Zap className="w-5 h-5 text-primary" />, text: 'Automated + Manual' },
          ]}
        />
      </section>

      {/* QA Services Section */}
      <section id="services" className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Quality Assurance Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to ensure your software meets the highest standards of quality and security.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirement Gathering */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Requirement Gathering</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our QA-engineer will determine your project goals and develop an attack plan. By working with you from day one, 
                they'll acutely understand the rationale behind your design. Bringing in our QA-engineer day one allows us to 
                start writing test plans and test cases immediately, which allots time on the backend of the project for 
                unforeseeable changes.
              </p>
            </div>

            {/* Strategy Development */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Strategy Development and Planning</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Delivery of a cost-effective solution is crucial for any project. After our dedicated QA-engineer determines 
                your project's detailed requirements, goals are set, and a test plan is created along with mitigating risk factors. 
                Our predilection for planning and prep allows us to gain trust among stakeholders and clients. We'll earn your trust.
              </p>
            </div>

            {/* Automated and Manual Testing */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Automated and Manual Functional Testing</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We're hands-on too! Once code development has commenced, our QA-engineer will test component by component. 
                Throughout every deployment of the build an automated portion of the regression gets run continuously to achieve 
                optimal ROI. We then double-down and run the remaining regression manually to ensure continuity from release to release.
              </p>
            </div>

            {/* Security Testing */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-red-500 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Security Testing</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Security is of the highest order here at TEKARSH. From day one, security is a vital part of our process. 
                From design to development to testing to the deployment of products, your security is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our QA Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose TEKARSH QA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and security sets us apart in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition duration-300">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Day One Integration</h3>
              <p className="text-gray-600">
                Our QA engineers work with you from the very beginning, understanding your project's rationale and goals.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition duration-300">
                <Target className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost-Effective Solutions</h3>
              <p className="text-gray-600">
                Strategic planning and risk mitigation ensure delivery of cost-effective, high-quality solutions.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition duration-300">
                <Zap className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimal ROI</h3>
              <p className="text-gray-600">
                Continuous automated regression testing combined with thorough manual testing for maximum return on investment.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition duration-300">
                <Shield className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security First</h3>
              <p className="text-gray-600">
                Security is integrated into every phase of our process, from design to deployment.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition duration-300">
                <CheckCircle className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Partnership</h3>
              <p className="text-gray-600">
                Our planning and preparation approach builds trust with stakeholders and clients from day one.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 transition duration-300">
                <Monitor className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Component-Level Testing</h3>
              <p className="text-gray-600">
                Thorough testing of each component ensures continuity and quality from release to release.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <TekarshFooter />
    </div>
  );
};