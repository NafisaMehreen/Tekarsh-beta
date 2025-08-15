import React, { useState, useEffect } from 'react';

export const AnimatedHeroText = () => {
  const words = ['Scalable', 'Flawless', 'Trusted', 'Valuable', 'Seamless'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 300); 
      
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="inline-block">
      <span 
        className={`inline-block text-7xl md:text-7xl font-semibold text-green-800 transition-all duration-600 ease-in-out transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4'
        }`}
        style={{
          minWidth: '280px', 
          textAlign: 'justify',
        }}
      >
        {words[currentIndex]}
      </span>
    </div>
  );
};

export default AnimatedHeroText;