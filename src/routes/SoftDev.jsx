import React from 'react';
import { Navbar } from '../Navbar.jsx';
import { TekarshFooter } from '../components/TekarshFooter.jsx';
import { HeroSection } from '../components/ui/hero-section.jsx';
import {
  Globe, Cloud,
  Zap, Shield, BarChart, Cpu, Settings, CheckCircle,
  Mail, Phone, MapPin
} from 'lucide-react';

export const SoftDev = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const services = [
    {
      icon: Globe,
      title: "Web & Mobile App Development",
      description: "High-performance native Android, React Native, Flutter, React, and AngularJS solutions.",
      features: ["Native Android", "React Native", "Flutter", "React", "AngularJS"],
      color: "bg-blue-500"
    },
    {
      icon: Cloud,
      title: "Cloud-Based Architecture",
      description: "Robust backend services and scalable cloud solutions on AWS.",
      features: ["AWS Solutions", "Backend Services", "Scalable Architecture", "Microservices"],
      color: "bg-green-500"
    },
    {
      icon: Settings,
      title: "API & System Integrations",
      description: "Seamless integration with POS systems (Toast, Square, Shopify) and accounting platforms (QuickBooks, NetSuite).",
      features: ["POS Integration", "Accounting Platforms", "Third-party APIs", "Custom Integrations"],
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "QA & Automated Testing",
      description: "Rigorous testing and security assessments for industry-leading quality.",
      features: ["Automated Testing", "Security Assessment", "Performance Testing", "Quality Assurance"],
      color: "bg-red-500"
    },
    {
      icon: Cpu,
      title: "Machine Learning & AI",
      description: "Real-time object detection, barcode/QR-code recognition, and AI-powered document data extraction.",
      features: ["Object Detection", "Barcode Recognition", "Document Processing", "AI Integration"],
      color: "bg-orange-500"
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Real-time reporting and predictive analytics for data-driven insights.",
      features: ["Real-time Reporting", "Predictive Analytics", "Data Visualization", "Custom Dashboards"],
      color: "bg-teal-500"
    },
    {
      icon: Zap,
      title: "System Reliability",
      description: "Scalable, high-performance systems with proactive monitoring.",
      features: ["High Performance", "Scalable Systems", "Proactive Monitoring", "24/7 Support"],
      color: "bg-yellow-500"
    }
  ];


  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "25+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
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
          badge="✨ Software Development"
          title="Build with confidence"
          subtitle="High‑performance software, delivered"
          description="Transform your ideas into powerful, scalable software solutions that drive business growth and user satisfaction."
          primaryAction="Start your project"
          secondaryAction="View our work"
          onPrimaryClick={() => scrollToSection('services')}
          onSecondaryClick={() => scrollToSection('services')}
          features={[
            { icon: <Zap className="w-5 h-5 text-primary" />, text: 'High Performance' },
            { icon: <Shield className="w-5 h-5 text-primary" />, text: 'Secure & Reliable' },
            { icon: <BarChart className="w-5 h-5 text-primary" />, text: 'Scalable Architecture' },
          ]}
        />
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end software development tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-fr">
            {/* Web & Mobile - Large card */}
            <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Web & Mobile Development</h3>
              </div>
              <p className="text-gray-600 mb-4">Native Android, React Native, Flutter, React, and AngularJS solutions.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">Flutter</span>
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">Android</span>
              </div>
            </div>

            {/* Cloud Architecture - Medium card */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Cloud Architecture</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Scalable AWS solutions and microservices.</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs">AWS</span>
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs">Microservices</span>
              </div>
            </div>

            {/* API Integration - Small card */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-4">
                <div className="bg-purple-500 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 w-fit">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">API Integration</h3>
              </div>
              <p className="text-gray-600 text-sm">POS, accounting, and third-party integrations.</p>
            </div>

            {/* QA Testing - Small card */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-4">
                <div className="bg-red-500 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 w-fit">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">QA & Testing</h3>
              </div>
              <p className="text-gray-600 text-sm">Automated testing and security assessments.</p>
            </div>

            {/* AI/ML - Medium card */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">AI & Machine Learning</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Object detection, barcode recognition, and document processing.</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded-full text-xs">Computer Vision</span>
                <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded-full text-xs">OCR</span>
              </div>
            </div>

            {/* Business Intelligence - Medium card */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-teal-500 p-3 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  <BarChart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Business Intelligence</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Real-time reporting and predictive analytics.</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-teal-200 text-teal-800 rounded-full text-xs">Analytics</span>
                <span className="px-2 py-1 bg-teal-200 text-teal-800 rounded-full text-xs">Dashboards</span>
              </div>
            </div>

            {/* System Reliability - Small card */}
            <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-4">
                <div className="bg-yellow-500 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 w-fit">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">System Reliability</h3>
              </div>
              <p className="text-gray-600 text-sm">High-performance systems with 24/7 monitoring.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <TekarshFooter />
    </div>
  );
};