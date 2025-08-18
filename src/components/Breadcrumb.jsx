import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb = ({ items }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200 min-h-[44px] px-2"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </button>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
              {item.href ? (
                <button
                  onClick={() => navigate(item.href)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200 min-h-[44px] px-2"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-gray-900 font-medium px-2">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};