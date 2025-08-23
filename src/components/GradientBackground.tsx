"use client";
import { useEffect, useState } from "react";
import { Gradient } from "@/lib/gradient"; // from vxnetsh repo

const GradientBackground = () => {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (enabled) {
      const gradient = new Gradient();
      gradient.initGradient("#gradient-canvas");
    }
  }, [enabled]);

  return (
    <>
      {/* Background */}
      {enabled ? (
        <canvas
          id="gradient-canvas"
          className="fixed top-0 left-0 w-full h-full -z-10"
          data-transition-in
        />
      ) : (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black" />
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setEnabled(!enabled)}
        className="fixed bottom-6 right-6 px-4 py-2 bg-gray-900 text-white rounded-lg shadow-lg hover:scale-105 transition-transform"
      >
        {enabled ? "Solid" : "Gradient"}
      </button>
    </>
  );
};

export default GradientBackground;
