import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { SocialLinks } from './components/SocialLinks';
import DiscordPresence from './components/DiscordPresence';
import GradientBackground from './components/GradientBackground';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import MusicToggle from './components/MusicToggle';

function App() {
  return (
    <BrowserRouter>
      {/* Moving gradient background */}
      <GradientBackground />

      {/* Main app content */}
      <div className="relative z-10 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen flex flex-col items-center justify-center p-8">
                <div className="content-overlay w-full max-w-md">
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

        {/* Music toggle fixed in bottom-right */}
        <MusicToggle />
      </div>
    </BrowserRouter>
  );
}

export default App;
