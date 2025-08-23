import React, { useEffect, useRef } from "react";

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fullscreen resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Metaball blobs
    const blobs = Array.from({ length: 10 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 100 + Math.random() * 120,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
    }));

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const image = ctx.createImageData(canvas.width, canvas.height);
      const pixels = image.data;

      // Loop through pixels
      for (let y = 0; y < canvas.height; y += 2) {
        for (let x = 0; x < canvas.width; x += 2) {
          let sum = 0;
          blobs.forEach((b) => {
            const dx = x - b.x;
            const dy = y - b.y;
            sum += (b.radius * b.radius) / (dx * dx + dy * dy + 0.0001);
          });

          // Apply a smooth sigmoid fade to make blobs liquid-like
          const raw = sum * 40;
          const intensity = 255 * (1 / (1 + Math.exp(-0.05 * (raw - 100))));

          const idx = (y * canvas.width + x) * 4;
          pixels[idx] = intensity;     // R
          pixels[idx + 1] = intensity; // G
          pixels[idx + 2] = intensity; // B
          pixels[idx + 3] = 255;       // A
        }
      }

      ctx.putImageData(image, 0, 0);

      // Move blobs
      blobs.forEach((b) => {
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < 0 || b.x > canvas.width) b.dx *= -1;
        if (b.y < 0 || b.y > canvas.height) b.dy *= -1;
      });

      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
