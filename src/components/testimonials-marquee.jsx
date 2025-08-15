import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, author, position, company, color = "green" }) => {
  const colorClasses = {
    green: "border-green-100 bg-green-50/50",
    blue: "border-blue-100 bg-blue-50/50",
    purple: "border-purple-100 bg-purple-50/50",
    orange: "border-orange-100 bg-orange-50/50",
    teal: "border-teal-100 bg-teal-50/50"
  };

  const iconColors = {
    green: "text-green-600",
    blue: "text-blue-600", 
    purple: "text-purple-600",
    orange: "text-orange-600",
    teal: "text-teal-600"
  };

  return (
    <div className={`${colorClasses[color]} rounded-2xl p-8 border shadow-lg hover:shadow-xl transition-all duration-300 min-w-[400px] max-w-[400px] mx-4`}>
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-white rounded-full shadow-sm">
          <Quote className={`w-5 h-5 ${iconColors[color]}`} />
        </div>
        <div className="flex-1">
          <p className="text-gray-700 italic leading-relaxed mb-4 text-sm">
            "{testimonial}"
          </p>
          <div className="border-t border-gray-200 pt-3">
            <p className="font-bold text-gray-900 text-sm">{author}</p>
            <p className={`${iconColors[color]} font-medium text-xs`}>
              {position}, {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MarqueeRow = ({ testimonials, direction = "left", speed = "slow" }) => {
  const animationClass = direction === "left" 
    ? `animate-marquee-${speed}` 
    : `animate-marquee-reverse-${speed}`;

  return (
    <div className="flex overflow-hidden">
      <div className={`flex ${animationClass}`}>
        {/* Create multiple copies for seamless infinite loop */}
        {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export const TestimonialsMarquee = () => {
  const testimonials1 = [
    {
      testimonial: "The Tekarsh team has been instrumental in our scaling and success! Always eager, always available, always exceeding expectations.",
      author: "Ashley Frausto",
      position: "Director of Operations",
      company: "Gofab",
      color: "green"
    },
    {
      testimonial: "Tekarsh is a vital extension of our team, reflecting our mission and culture. Their dedication and quality are unmatched.",
      author: "Bo Davis", 
      position: "CEO & Co-Founder",
      company: "MarginEdge",
      color: "blue"
    },
    {
      testimonial: "Tekarsh operates like an extension of our own team. Responsive, reliable, and taking ownership, they've enabled our effective scaling.",
      author: "Brian Mills",
      position: "Co-Founder and CTO", 
      company: "MarginEdge",
      color: "purple"
    }
  ];



  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-green-100 rounded-full mr-4">
              <Quote className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Client Success: <span className="text-green-700">Hear From Our Partners</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients say about working with Tekarsh.
          </p>
        </div>

        {/* Marquee Testimonials */}
        <div className="space-y-8">
          <MarqueeRow testimonials={testimonials1} direction="left" speed="slow" />
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
            <h4 className="text-3xl font-bold text-green-600 mb-2">98%</h4>
            <p className="text-gray-700 font-medium">Client Satisfaction</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <h4 className="text-3xl font-bold text-blue-600 mb-2">50+</h4>
            <p className="text-gray-700 font-medium">Successful Projects</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
            <h4 className="text-3xl font-bold text-purple-600 mb-2">5+ Years</h4>
            <p className="text-gray-700 font-medium">Average Partnership</p>
          </div>
        </div>
      </div>
    </div>
  );
};