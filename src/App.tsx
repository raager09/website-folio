import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation'; // Adjust path as needed

// Import your page components
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      {/* Moving gradient background - try different classes: */}
      {/* moving-gradient-bg | moving-gradient-bg-smooth | moving-gradient-bg-radial */}
      <div className="moving-gradient-bg-smooth"></div>
      
      {/* Main app content */}
      <div className="content-overlay min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
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