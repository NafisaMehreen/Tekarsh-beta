import React, { useState, useEffect } from 'react';
import { ChevronUp, Menu, X } from 'lucide-react';

export const FloatingNavigation = ({ onSectionClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'services', label: 'Services' },
    { id: 'strategic-services', label: 'Strategic Services' },
    { id: 'engagement-models', label: 'Engagement Models' },
    { id: 'client-journey', label: 'Client Journey' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSectionClick = (sectionId) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Quick Navigation Menu */}
      {isMenuOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="py-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 min-h-[44px] flex items-center"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex flex-col gap-2">
        {/* Quick Navigation Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Quick navigation menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="bg-gray-600 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};