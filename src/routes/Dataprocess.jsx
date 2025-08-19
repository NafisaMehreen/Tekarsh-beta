import React from 'react';
import { Navbar } from '../Navbar.jsx';
import { TekarshFooter } from '../components/TekarshFooter.jsx';
import { HeroSection } from '../components/ui/hero-section.jsx';
import {
  FileText, Users, ChefHat, TrendingUp, HeadphonesIcon, Calculator,
  Database, CheckCircle, Clock, Target, Shield, Zap,
  ArrowRight, Mail, Phone, MapPin
} from 'lucide-react';

export const Dataprocess = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "10K+", label: "Invoices Processed" },
    { number: "500+", label: "Menus Built" },
    { number: "1M+", label: "Data Entries" },
    { number: "99.9%", label: "Accuracy Rate" }
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
          badge="📊 Data Processing"
          title="Operate with precision"
          subtitle="Reliable back‑office at scale"
          description="Streamlined invoice processing, lead generation, menu building, onboarding support, and accurate QuickBooks entries."
          primaryAction="Get started"
          secondaryAction="View services"
          onPrimaryClick={() => scrollToSection('services')}
          onSecondaryClick={() => scrollToSection('services')}
          features={[
            { icon: <Database className="w-5 h-5 text-primary" />, text: 'Accurate & Fast' },
            { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: '99.9% Accuracy' },
            { icon: <Zap className="w-5 h-5 text-primary" />, text: '24/7 Coverage' },
          ]}
        />
      </section>

      {/* Data Processing Services Section */}
      <section id="services" className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Data Processing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive back-office solutions to streamline your operations and enhance efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Invoice Processing */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Invoice Processing</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We streamline invoice processing for our clients, ensuring accuracy and timely payments 
                through efficient back-office solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">Automated Processing</span>
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">Accuracy Guaranteed</span>
              </div>
            </div>

            {/* Menu Building */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <ChefHat className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Menu Building</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                For clients in the food service space, we assist in creating and managing effective menus, 
                optimizing for user appeal and operational efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">Food Service</span>
                <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">User Optimized</span>
              </div>
            </div>

            {/* Recipes & Onboarding */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Recipes & Onboarding</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We support culinary-focused platforms with organized recipe management and facilitate 
                seamless user onboarding.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm">Recipe Management</span>
                <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm">User Onboarding</span>
              </div>
            </div>

            {/* Lead Generation */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-purple-500 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Lead Generation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We help drive growth for our technology service clients by providing effective lead 
                generation strategies and back-office support.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">Growth Strategies</span>
                <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">Back-office Support</span>
              </div>
            </div>

            {/* Back Office Customer Support */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-teal-500 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <HeadphonesIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Back Office Customer Support</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We deliver reliable back-office customer support on behalf of our clients, ensuring 
                efficient handling of inquiries and enhancing user satisfaction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-200 text-teal-800 rounded-full text-sm">24/7 Support</span>
                <span className="px-3 py-1 bg-teal-200 text-teal-800 rounded-full text-sm">User Satisfaction</span>
              </div>
            </div>

            {/* QuickBooks Entries */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-500 p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">QuickBooks Entries</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide accurate and timely QuickBooks entries for our clients, maintaining 
                organized financial records.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm">Financial Records</span>
                <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm">Accurate Entries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Data Processing Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose TEKARSH Data Processing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise in data processing ensures accuracy, efficiency, and reliability for your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition duration-300">
                <CheckCircle className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">99.9% Accuracy</h3>
              <p className="text-gray-600">
                Our rigorous quality control processes ensure exceptional accuracy in all data processing tasks.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition duration-300">
                <Clock className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand the importance of deadlines and consistently deliver projects on time.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition duration-300">
                <Target className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Specialized knowledge in food service, technology, and financial sectors for targeted solutions.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition duration-300">
                <Shield className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Security</h3>
              <p className="text-gray-600">
                Robust security measures to protect your sensitive business data and maintain confidentiality.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition duration-300">
                <Database className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                Our processes scale with your business needs, from small projects to enterprise-level operations.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition duration-300">
                <Zap className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Efficient Processing</h3>
              <p className="text-gray-600">
                Streamlined workflows and automation tools ensure maximum efficiency in all data processing tasks.
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