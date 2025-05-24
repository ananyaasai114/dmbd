import React, { useEffect, useRef } from 'react';

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 4; // Cover all sections
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create stars
    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    const createStars = () => {
      stars.length = 0; // Clear existing stars
      const density = Math.floor((canvas.width * canvas.height) / 8000);
      
      for (let i = 0; i < density; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          opacity: Math.random(),
          speed: 0.05 + Math.random() * 0.1
        });
      }
    };

    createStars();
    window.addEventListener('resize', createStars);

    // Animate stars
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';

      stars.forEach(star => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Twinkle effect
        star.opacity += Math.random() * 0.01 - 0.005;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarBackground;