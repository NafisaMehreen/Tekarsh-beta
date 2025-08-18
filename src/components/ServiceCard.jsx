import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils.js';

export const ServiceCard = ({ 
  title, 
  description, 
  services, 
  icon: Icon, 
  color = "green",
  onClick,
  className 
}) => {
  const colorClasses = {
    green: {
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      hoverBorder: "hover:border-green-200"
    },
    blue: {
      iconBg: "bg-blue-100", 
      iconColor: "text-blue-600",
      hoverBorder: "hover:border-blue-200"
    },
    purple: {
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600", 
      hoverBorder: "hover:border-purple-200"
    }
  };

  const colors = colorClasses[color] || colorClasses.green;

  return (
    <button 
      className={cn(
        "group bg-white rounded-xl border border-gray-200 p-4 sm:p-6 lg:p-8 cursor-pointer transition-all duration-300 text-left w-full",
        "hover:shadow-lg hover:shadow-gray-100/50 hover:-translate-y-1 focus:shadow-lg focus:shadow-gray-100/50 focus:-translate-y-1 min-h-[280px] sm:min-h-[320px]",
        "touch-manipulation focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2", // Improves touch responsiveness and focus
        colors.hoverBorder,
        className
      )}
      onClick={onClick}
      aria-label={`Learn more about ${title} - ${description}`}
    >
      {/* Icon */}
      <div className={cn(
        "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6",
        colors.iconBg
      )} aria-hidden="true">
        <Icon className={cn("w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8", colors.iconColor)} />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-800 group-focus:text-gray-800 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
        {description}
      </p>

      {/* Services List */}
      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-grow" role="list">
        {services.map((service, index) => (
          <li key={index} className="flex items-center text-xs sm:text-sm text-gray-500">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 sm:mr-3 flex-shrink-0" aria-hidden="true" />
            <span className="leading-tight">{service}</span>
          </li>
        ))}
      </ul>

      {/* Arrow */}
      <div className="flex items-center justify-end mt-auto" aria-hidden="true">
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 group-focus:text-gray-600 group-hover:translate-x-1 group-focus:translate-x-1 transition-all duration-300" />
      </div>
    </button>
  );
};