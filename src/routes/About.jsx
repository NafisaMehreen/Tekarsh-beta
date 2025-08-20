import React from 'react';
import { Navbar } from '../Navbar.jsx';
import { TekarshFooter } from '../components/TekarshFooter.jsx';
import { AuroraBackground } from '../components/ui/aurora-background.jsx';
import {
  Users, Code, Database, Shield, Target, Award, 
  TrendingUp, Globe, CheckCircle
} from 'lucide-react';
import { TestimonialsMarquee } from '../components/testimonials-marquee.jsx';

export const About = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "92.7%", label: "Employee Retention" },
    { number: "10+", label: "Years of Excellence" },
    { number: "378", label: "Team Members" },
    { number: "Zero", label: "Critical Bugs in Production" }
  ];

  const whyPartnerReasons = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Deep domain knowledge, delivering complex projects with precision.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Stable, Scalable Team",
      description: "Exceptional 92.7%+ retention over 10 years ensures continuity and efficiency.",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Uncompromising Quality",
      description: "Zero critical bugs in production—our standard, not an aspiration.",
      color: "bg-red-500"
    },
    {
      icon: Target,
      title: "Transparent Agile Delivery",
      description: "Full visibility, continuous collaboration, predictable outcomes.",
      color: "bg-purple-500"
    },
    {
      icon: Globe,
      title: "Strategic Partnership",
      description: "We become an extension of your team, from concept to production.",
      color: "bg-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Value-Driven Engagement",
      description: "Optimized investment, exceptional quality, significant ROI.",
      color: "bg-orange-500"
    },
    {
      icon: CheckCircle,
      title: "Seamless Collaboration",
      description: "Strong communication, real-time engagement, shared success.",
      color: "bg-indigo-500"
    }
  ];

  const coreTeam = [
    {
      icon: Code,
      title: "Elite Developers",
      subtitle: "Engineers in Dhaka",
      description: "Our development team consists of rigorously screened elite engineers based in Dhaka, Bangladesh. Each developer undergoes a comprehensive vetting process that evaluates not only their technical skills but also their problem-solving abilities, communication skills, and cultural fit. We maintain the highest standards in recruitment, ensuring that only the top 5% of candidates join our development team.",
      highlights: [
        "Rigorous 5-stage screening process",
        "Expertise in 15+ programming languages",
        "Average 7+ years of experience",
        "Continuous learning and certification programs",
        "Agile and DevOps methodologies"
      ],
      color: "from-blue-50 to-blue-100",
      iconColor: "bg-blue-500"
    },
    {
      icon: Database,
      title: "BPO Data Analysts",
      subtitle: "Dedicated Professionals",
      description: "Our Business Process Outsourcing team comprises 318 dedicated data analysts who ensure high-quality service delivery across all client engagements. These professionals specialize in data processing, analysis, and management, providing critical back-office support that enables our clients to focus on their core business objectives.",
      highlights: [
        "318 dedicated data analysts",
        "99.9% accuracy in data processing",
        "24/7 operational coverage",
        "Specialized in multiple industries",
        "Advanced data security protocols"
      ],
      color: "from-green-50 to-green-100",
      iconColor: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Quality Assurance Engineers",
      subtitle: "Relentless QA Team",
      description: "Our QA team of 26 engineers is relentless in their pursuit of software integrity. They guarantee that every piece of code meets the highest quality standards before it reaches production. With a track record of zero critical bugs in production, our QA team employs both automated and manual testing methodologies to ensure comprehensive coverage.",
      highlights: [
        "26 dedicated QA engineers",
        "Zero critical bugs in production",
        "Automated and manual testing expertise",
        "Performance and security testing",
        "Continuous integration and deployment"
      ],
      color: "from-red-50 to-red-100",
      iconColor: "bg-red-500"
    },
    {
      icon: Target,
      title: "Lean Leadership",
      subtitle: "Cultivating Excellence",
      description: "Our leadership team focuses on cultivating top talent and fostering seamless global team unity. With a lean management structure, we ensure quick decision-making, clear communication, and efficient project execution. Our leaders are hands-on professionals who understand both technical and business aspects of software development.",
      highlights: [
        "Lean management structure",
        "Quick decision-making process",
        "Global team coordination",
        "Technical and business expertise",
        "Mentorship and growth programs"
      ],
      color: "from-purple-50 to-purple-100",
      iconColor: "bg-purple-500"
    }
  ];

  return (
    <div className="font-sans text-gray-900 scroll-smooth bg-neutral-100 min-h-screen">
      {/* Navigation */}
      <div className="fixed top-0 w-full z-50">
        <Navbar onMenuClick={scrollToSection} />
      </div>

      {/* Hero Section */}
      <section className="pt-[85px]">
        <AuroraBackground className="py-20 sm:py-24 lg:py-32">
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight animate-fade-in-up">
              We are <span className="text-green-600">TEKARSH</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A fully integrated software development company delivering the highest quality custom software, 
              elite QA, and partner-centric client services.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AuroraBackground>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our <span className="text-green-600">Mission</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Our team is your team. We effectively break the barriers of an onshore-offshore team model, 
            every time. We work for you, but most importantly, we'll work with you.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Agile and ultra responsive, our dedicated staff understands the US market need for a healthy 
            feedback loop. Our teams are available till noon (EST). And in a world where tech employee 
            turnover runs rampant, we hire and retain 90% of our top talent.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-green-600">TEKARSH</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through proven expertise, stable teams, and uncompromising quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPartnerReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="text-center p-8 hover:bg-gray-50 rounded-2xl transition-all duration-300 group">
                  <div className="flex justify-center mb-6">
                    <div className={`${reason.color} p-6 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-green-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our strength lies in our people. Each team member is carefully selected, continuously trained, 
              and empowered to deliver excellence in their respective domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {coreTeam.map((team, index) => {
              const IconComponent = team.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`${team.iconColor} p-4 rounded-xl mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{team.title}</h3>
                      <p className="text-green-600 font-medium">{team.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {team.description}
                  </p>
                  <div className="space-y-2">
                    {team.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <TestimonialsMarquee />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        
      </section>

      {/* Footer */}
      <TekarshFooter />
    </div>
  );
};