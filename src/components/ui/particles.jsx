import React, { useEffect, useRef } from 'react';

export const Particles = ({ 
  className = "",
  quantity = 50,
  staticity = 50,
  ease = 50,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0
}) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const circles = useRef([]);
  const animationId = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    contextRef.current = context;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const initializeCircles = () => {
      circles.current = [];
      for (let i = 0; i < quantity; i++) {
        circles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          translateX: 0,
          translateY: 0,
          size: Math.random() * 2 + 0.1,
          alpha: Math.random() * 0.5 + 0.1,
          targetAlpha: Math.random() * 0.5 + 0.1,
          dx: (Math.random() - 0.5) * 0.2,
          dy: (Math.random() - 0.5) * 0.2,
          magnetism: 0.1 + Math.random() * 4
        });
      }
    };

    const drawCircle = (circle, update = false) => {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.translate(translateX, translateY);
      context.beginPath();
      context.arc(x, y, size, 0, 2 * Math.PI);
      context.fillStyle = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${alpha})`;
      context.fill();
      context.setTransform(1, 0, 0, 1, 0, 0);

      if (!update) return;

      // Update position
      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;

      // Boundary check
      if (circle.x < 0 || circle.x > canvas.width) circle.dx *= -1;
      if (circle.y < 0 || circle.y > canvas.height) circle.dy *= -1;

      // Mouse interaction
      const mouseDistance = Math.sqrt(
        (mouse.current.x - circle.x) ** 2 + (mouse.current.y - circle.y) ** 2
      );

      if (mouseDistance < 100) {
        const force = (100 - mouseDistance) / 100;
        const angle = Math.atan2(circle.y - mouse.current.y, circle.x - mouse.current.x);
        circle.translateX = Math.cos(angle) * force * circle.magnetism;
        circle.translateY = Math.sin(angle) * force * circle.magnetism;
        circle.targetAlpha = 0.8;
      } else {
        circle.translateX *= 0.95;
        circle.translateY *= 0.95;
        circle.targetAlpha = circle.alpha;
      }

      // Smooth alpha transition
      circle.alpha += (circle.targetAlpha - circle.alpha) * 0.1;
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      circles.current.forEach(circle => drawCircle(circle, true));
      animationId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      resizeCanvas();
      initializeCircles();
    };

    // Initialize
    resizeCanvas();
    initializeCircles();
    animate();

    // Event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [quantity, staticity, ease, refresh, color, vx, vy]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default Particles;