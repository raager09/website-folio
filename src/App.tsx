// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { SocialLinks } from './components/SocialLinks';
import DiscordPresence from './components/DiscordPresence';

// Import your page components
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      {/* Moving gradient background */}
      <div className="moving-gradient-bg"></div>
      
      {/* Main app content */}
      <div className="content-overlay min-h-screen">
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen flex flex-col items-center justify-center p-8">
              <div className="content-overlay w-full max-w-md">
                <div className="mb-8">
                  <DiscordPresence />
                </div>
                <SocialLinks />
              </div>
            </div>
          } />
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