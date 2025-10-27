"use client"

import React, { useRef, useEffect } from 'react';

export function BubbleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let bubbles: any[] = [];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      bubbles = [];
      const bubbleCount = Math.floor(canvas.width / 50);

      for (let i = 0; i < bubbleCount; i++) {
        bubbles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 5 + 1,
          vx: Math.random() * 2 - 1,
          vy: Math.random() * 2 - 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(240, 240, 250, 0.2)';

      bubbles.forEach(bubble => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();

        bubble.x += bubble.vx;
        bubble.y += bubble.vy;

        if (bubble.x < 0 || bubble.x > canvas.width) bubble.vx *= -1;
        if (bubble.y < 0 || bubble.y > canvas.height) bubble.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      setup();
      draw();
    };

    setup();
    draw();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100vw', height: '100vh' }} />;
}
