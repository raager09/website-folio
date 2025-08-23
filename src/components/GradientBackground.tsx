// components/GradientBackground.tsx
import { useEffect, useRef } from 'react';

// Define a type for our WebGL resources
interface WebGLResources {
  program: WebGLProgram | null;
  animationFrameId: number | null;
}

const GradientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const webglRef = useRef<WebGLResources>({ 
    program: null, 
    animationFrameId: null 
  });

  useEffect(() => {
    if (canvasRef.current) {
      // Initialize the gradient background
      const initGradient = () => {
        // Get WebGL context
        const gl = canvasRef.current?.getContext('webgl');
        
        if (!gl) {
          console.error('WebGL not supported');
          return;
        }

        // Rest of your WebGL code...
        // [Your existing WebGL implementation]

        // Animation loop
        const animate = (currentTime: number) => {
          // Your animation code...
          webglRef.current.animationFrameId = requestAnimationFrame(animate);
        };

        // Start animation
        webglRef.current.animationFrameId = requestAnimationFrame(animate);
      };

      initGradient();
    }

    // Cleanup function
    return () => {
      // Cancel animation frame
      if (webglRef.current.animationFrameId) {
        cancelAnimationFrame(webglRef.current.animationFrameId);
      }
      
      // Clean up WebGL resources
      // Add your cleanup code here
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        background: 'linear-gradient(45deg, #000000, #1a1a1a, #333333)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 20s ease infinite'
      }}
    />
  );
};

export default GradientBackground;