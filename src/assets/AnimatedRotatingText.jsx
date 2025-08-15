import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

const words = ['Restaurant Tech', 'EdTech', 'FinTech'];

export const AnimatedRotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(words[index], {
    key: index,
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-20px)' },
    config: { tension: 220, friction: 20 },
  });

  return (
    <div style={{ height: '3rem', position: 'relative', display: 'inline-block', transform: 'translateX(-100px)' }}>
      {transitions((style, item) => (
        <animated.span
          style={{
            ...style,
            position: 'absolute',
            willChange: 'transform, opacity',
            color: '#00A86B',
            fontWeight: '500',
            fontSize: '3rem',
          }}
        >
          {item}
        </animated.span>
      ))}
    </div>
  );
};

