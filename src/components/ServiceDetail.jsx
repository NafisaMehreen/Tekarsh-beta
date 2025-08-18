import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils.js';

export const ServiceDetail = ({ 
  title, 
  description, 
  benefits, 
  deliverables,
  outcomes,
  icon: Icon, 
  reverse = false,
  className 
}) => {
  return (
    <div className={cn(
      "flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16",
      reverse && "lg:flex-row-reverse",
      className
    )}>
      {/* Content Side */}
      <div className="flex-1 space-y-4 sm:space-y-6">
        {/* Icon and Title */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Benefits */}
        {benefits && benefits.length > 0 && (
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Key Benefits</h4>
            <ul className="space-y-2" role="list">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Deliverables */}
        {deliverables && deliverables.length > 0 && (
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Deliverables</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2" role="list">
              {deliverables.map((deliverable, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm text-gray-600 leading-tight">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Outcomes */}
        {outcomes && outcomes.length > 0 && (
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Expected Outcomes</h4>
            <ul className="space-y-2" role="list">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Visual Side */}
      <div className="flex-1 flex items-center justify-center order-first lg:order-none" aria-hidden="true">
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center">
          <Icon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-green-600 opacity-20" />
        </div>
      </div>
    </div>
  );
};