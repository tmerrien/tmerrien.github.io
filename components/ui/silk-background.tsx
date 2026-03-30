'use client';

import React, { useEffect, useRef } from 'react';

export const SilkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const speed = 0.02;
    const scale = 2;
    const noiseIntensity = 0.8;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const noise = (x: number, y: number) => {
      const G = 2.71828;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      return (rx * ry * (1 + x)) % 1;
    };

    const animate = () => {
      const { width, height } = canvas;

      // White/light gradient base
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#f0f4f8');
      gradient.addColorStop(0.5, '#f9f9fb');
      gradient.addColorStop(1, '#f0f4f8');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Silk pattern — render at 2px skip for performance
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let x = 0; x < width; x += 2) {
        for (let y = 0; y < height; y += 2) {
          const u = (x / width) * scale;
          const v = (y / height) * scale;

          const tOffset = speed * time;
          const tex_x = u;
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset);

          const pattern = 0.6 + 0.4 * Math.sin(
            5.0 * (tex_x + tex_y +
              Math.cos(3.0 * tex_x + 5.0 * tex_y) +
              0.02 * tOffset) +
            Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
          );

          const rnd = noise(x, y);
          const intensity = Math.max(0, pattern - rnd / 15.0 * noiseIntensity);

          // White silk: light grays with subtle blue tint
          const base = 230;
          const r = Math.floor(base + 20 * intensity);
          const g = Math.floor(base + 22 * intensity);
          const b = Math.floor(base + 25 * intensity);

          const index = (y * width + x) * 4;
          if (index < data.length) {
            data[index] = Math.min(255, r);
            data[index + 1] = Math.min(255, g);
            data[index + 2] = Math.min(255, b);
            data[index + 3] = 255;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Subtle radial depth overlay
      const overlayGradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 2
      );
      overlayGradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      overlayGradient.addColorStop(1, 'rgba(240, 244, 248, 0.3)');

      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, width, height);

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0"
    />
  );
};
