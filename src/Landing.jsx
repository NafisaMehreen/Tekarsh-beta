import React from 'react';
import { Navbar } from './Navbar.jsx';
import { HeroSection } from './components/ui/hero-section.jsx';
import { Particles } from './components/ui/particles.jsx';
import { CategoryList } from './components/category-list.jsx';
import { TekarshFooter } from './components/TekarshFooter.jsx';
import { useNavigate } from 'react-router-dom';
import { Zap, Shield, BarChart, Lightbulb, Settings, Code, Database, CheckCircle, Users, Utensils, GraduationCap, DollarSign } from 'lucide-react';


export const Landing = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="font-sans text-gray-900 scroll-smooth bg-neutral-100 min-h-screen">

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50" role="navigation" aria-label="Main navigation">
        <Navbar onMenuClick={scrollToSection} />
      </nav>

      {/* Main Content */}
      <main role="main">
        {/* Hero Section */}
        <section aria-labelledby="hero-title" className="pt-[85px]">
          <HeroSection
          badge="✨ Software Excellence"
          title="From Vision to Reality"
          subtitle="Transform your ideas into powerful, scalable solutions"
          description="A fully integrated software development company delivering the highest quality custom software, elite QA, and partner-centric client services."
          primaryAction="Let's Talk"
          secondaryAction="See Our Work"
          onPrimaryClick={() => scrollToSection('contact')}
          onSecondaryClick={() => scrollToSection('services')}
          features={[
            {
              icon: <Zap className="w-5 h-5 text-primary" />,
              text: "High Performance"
            },
            {
              icon: <Shield className="w-5 h-5 text-primary" />,
              text: "Secure & Reliable"
            },
            {
              icon: <BarChart className="w-5 h-5 text-primary" />,
              text: "Scalable Solutions"
            }
          ]}
        />
        </section>
      </main>

      <div className='flex justify-center py-6'>
        <div className="md:px-100 text-center bg-neutral-100 border-b-2 border-green-800"></div>
      </div>

      {/* Innovate and Optimize Section */}
      <section className="px-6 md:px-16 py-20 bg-neutral-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Empowering Innovation */}
            <div className="relative">
              <Particles
                className="absolute inset-0"
                quantity={30}
                color="#22c55e"
                vx={0.1}
                vy={-0.1}
              />
              <div className="relative z-10 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="p-3 bg-green-100 rounded-full mr-4">
                    <Lightbulb className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Empowering <span className="text-green-700">Innovation</span>
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We build cutting-edge technology that solves real-world challenges and fuels scalable growth.
                </p>
              </div>
            </div>

            {/* Optimizing Operations */}
            <div className="relative">
              <Particles
                className="absolute inset-0"
                quantity={30}
                color="#3b82f6"
                vx={-0.1}
                vy={0.1}
              />
              <div className="relative z-10 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <Settings className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Optimizing <span className="text-green-600">Operations</span>
                  </h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We provide essential back-office services that streamline processes, enhance efficiency, and free you to focus on your core mission.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col md:flex-row items-center px-6 md:px-15 py-10 space-y-6 md:space-y-0 md:space-x-10 mt-50 bg-neutral-100"
      >
        <div className="flex-1 space-y-4">
          <h3 className="text-3xl font-bold">
            Crafting cool things with{' '}
            <span className="text-green-700">great people</span>
          </h3>
          <p className="text-green-900">
            At Tekarsh we power up with technology. We believe in teamwork,
            innovation, and dedication to craft extraordinary solutions for our
            clients. Our commitment and expertise drive us to exceed
            expectations every time.
          </p>
          <button
            onClick={() => navigate('/about')}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            About us
          </button>

          <div className="grid grid-cols-3 gap-4 mt-4 text-green-900">
            <div>
              <h4 className="text-lg font-bold">100%</h4>
              <p className="text-sm">In-house & Independent</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">90%</h4>
              <p className="text-sm">Employee Retention</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">4.6/5</h4>
              <p className="text-sm">Glassdoor Rating</p>
            </div>
          </div>
        </div>
        <div className="mt-20 flex-1">
          <img
            src="Clients.jpg"
            alt="Team Image"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Our Team Section */}
      <section className="px-6 md:px-16 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Strength: The <span className="text-green-700">Tekarsh Team</span>
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Developers */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="bg-green-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Developers</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Elite Engineers in Dhaka, rigorously screened for excellence.
              </p>
            </div>

            {/* BPO Data Analysts */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="bg-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">BPO Data Analysts</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dedicated professionals ensuring high-quality service.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Relentless QA Engineers, guaranteeing software integrity.
              </p>
            </div>

            {/* Lean Leadership */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
              <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lean Leadership</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Cultivating top talent, fostering seamless global team unity.
              </p>
            </div>
          </div>

          {/* Industry Focus */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Industry Focus</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">

              {/* Restaurant Tech */}
              <div className="flex items-center space-x-3 bg-red-50 px-6 py-4 rounded-full hover:bg-red-100 transition-colors duration-300">
                <div className="p-2 bg-red-500 rounded-full">
                  <Utensils className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-800">Restaurant Tech</span>
              </div>

              {/* EdTech */}
              <div className="flex items-center space-x-3 bg-indigo-50 px-6 py-4 rounded-full hover:bg-indigo-100 transition-colors duration-300">
                <div className="p-2 bg-indigo-500 rounded-full">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-800">EdTech</span>
              </div>

              {/* FinTech */}
              <div className="flex items-center space-x-3 bg-emerald-50 px-6 py-4 rounded-full hover:bg-emerald-100 transition-colors duration-300">
                <div className="p-2 bg-emerald-500 rounded-full">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold text-gray-800">FinTech</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-700">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive suite of software services, spanning from tailored application development to thorough quality assurance testing.
            </p>
          </div>

          <CategoryList
            categories={[
              {
                id: 1,
                title: "Software Development",
                subtitle: "High-performance native Android, React Native, Flutter, React, and AngularJS solutions.",
                icon: <Code className="w-6 h-6" />,
                onClick: () => navigate('/software-development'),
                featured: true
              },
              {
                id: 2,
                title: "Quality Assurance",
                subtitle: "Rigorous testing and security assessments for industry-leading quality.",
                icon: <Shield className="w-6 h-6" />,
                onClick: () => navigate('/quality-assurance')
              },
              {
                id: 3,
                title: "Client Services",
                subtitle: "Partner-centric client services ensuring seamless project delivery.",
                icon: <Users className="w-6 h-6" />,
                onClick: () => navigate('/client-services')
              },
              {
                id: 4,
                title: "Data Processing",
                subtitle: "Advanced data processing and analytics solutions for business intelligence.",
                icon: <Database className="w-6 h-6" />,
                onClick: () => navigate('/data-processing')
              }
            ]}
            className="bg-transparent"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to start your next project?
          </h2>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's discuss your ideas and create something amazing together.
          </p>

          <button className="bg-white text-green-800 font-bold px-10 py-4 rounded-full hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <TekarshFooter />
    </div>
  );
};
