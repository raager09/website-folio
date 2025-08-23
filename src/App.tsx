// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { SocialLinks } from "./components/SocialLinks";
import DiscordPresence from "./components/DiscordPresence";

// Import your page components
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Import gradient background
import GradientBackground from "./components/GradientBackground.tsx";


function App() {
  return (
    <BrowserRouter>
      {/* Gradient background (always rendered behind content) */}
      <GradientBackground />

      {/* Main app content */}
      <div className="relative z-10 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen flex flex-col items-center justify-center p-8">
                <div className="w-full max-w-md">
                  <div className="mb-8">
                    <DiscordPresence />
                  </div>
                  <SocialLinks />
                </div>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Navigation stays fixed */}
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
