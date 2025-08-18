import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const JourneyStep = ({ 
  number, 
  title, 
  description, 
  activities, 
  isLast = false,
  icon: Icon 
}) => {
  return (
    <div className="flex flex-col items-center relative">
      {/* Step Number and Icon */}
      <div className="relative mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg lg:text-xl shadow-lg" aria-label={`Step ${number}`}>
          {Icon ? <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" aria-hidden="true" /> : number}
        </div>
        {/* Connecting Line - Desktop only */}
        {!isLast && (
          <div className="hidden lg:block absolute top-6 sm:top-7 lg:top-8 left-12 sm:left-14 lg:left-16 w-16 xl:w-24 2xl:w-32 h-0.5 bg-green-200" aria-hidden="true">
            <ArrowRight className="absolute -right-1.5 sm:-right-2 -top-1.5 sm:-top-2 w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
          </div>
        )}
      </div>

      {/* Step Content */}
      <div className="text-center max-w-xs sm:max-w-sm lg:max-w-xs">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-tight px-2 sm:px-0">
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed px-2 sm:px-0">
          {description}
        </p>
        
        {/* Activities List */}
        {activities && activities.length > 0 && (
          <ul className="space-y-1 sm:space-y-2" role="list">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-center justify-center text-xs text-gray-500 px-2 sm:px-0">
                <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="leading-tight">{activity}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};