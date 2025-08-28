import { BackgroundManager } from '@/components/BackgroundManager';
import { Navigation } from '@/components/Navigation';
import { Mail, MessageCircle, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    // For example: send to an API, display success message, reset form, etc.
    
    // Reset form after submission (optional)
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleContactClick = (type, value) => {
    switch(type) {
      case 'email':
        window.open(`mailto:${value}`, '_blank');
        break;
      case 'discord':
        // Discord doesn't have direct URLs, but you can copy username to clipboard
        navigator.clipboard.writeText(value);
        alert('Discord username copied to clipboard!');
        break;
      case 'github':
        window.open(`https://github.com/${value.replace('@', '')}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/${value.replace('@', '')}`, '_blank');
        break;
    }
  };

  return (
    <div className="min-h-screen p-8 text-white">
      <div className="max-w-2xl mx-auto">
        {/* Content section with white text override */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 m-4 shadow-lg">
          <h1 className="animate-fade-up text-4xl font-bold text-center mb-4 !text-white" style={{color: 'white !important'}}>
            Get in Touch
          </h1>
         
          <p className="animate-fade-up-delay-1 text-center mb-12 text-lg !text-white" style={{color: 'white !important'}}>
            Feel free to reach out through any of these channels.<br />
            I'd love to hear from you!
          </p>
         
          <div className="space-y-4">
            {/* Email - Clickable */}
            <div 
              className="animate-slide-in-left bg-white/12 backdrop-blur-md border border-white/15 rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer transform-gpu group"
              style={{animationDelay: '0.1s'}}
              onClick={() => handleContactClick('email', 'raager@fatal.rest')}
            >
              <div className="text-blue-400 text-2xl group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300"> <Mail></Mail></div>
              <div>
                <h3 className="font-semibold text-lg !text-white group-hover:text-blue-200 transition-colors duration-300" style={{color: 'white !important'}}>Email</h3>
                <p className="!text-white group-hover:text-blue-300 transition-colors duration-300" style={{color: 'white !important'}}>raager@fatal.rest</p>
              </div>
            </div>
           
            {/* Discord - Clickable (copies to clipboard) */}
            <div 
              className="animate-slide-in-left bg-white/12 backdrop-blur-md border border-white/15 rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer transform-gpu group"
              style={{animationDelay: '0.2s'}}
              onClick={() => handleContactClick('discord', 'raager')}
            >
              <div className="text-blue-400 text-2xl group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300"><MessageCircle></MessageCircle></div>
              <div>
                <h3 className="font-semibold text-lg !text-white group-hover:text-blue-200 transition-colors duration-300" style={{color: 'white !important'}}>Discord</h3>
                <p className="!text-white group-hover:text-blue-300 transition-colors duration-300" style={{color: 'white !important'}}>raager</p>
              </div>
            </div>
           
            {/* GitHub - Clickable */}
            <div 
              className="animate-slide-in-left bg-white/12 backdrop-blur-md border border-white/15 rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer transform-gpu group"
              style={{animationDelay: '0.3s'}}
              onClick={() => handleContactClick('github', '@raager09')}
            >
              <div className="text-blue-400 text-2xl group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300"><Github></Github></div>
              <div>
                <h3 className="font-semibold text-lg !text-white group-hover:text-blue-200 transition-colors duration-300" style={{color: 'white !important'}}>GitHub</h3>
                <p className="!text-white group-hover:text-blue-300 transition-colors duration-300" style={{color: 'white !important'}}>@raager09</p>
              </div>
            </div>
           
            {/* Twitter - Clickable */}
            <div 
              className="animate-slide-in-left bg-white/12 backdrop-blur-md border border-white/15 rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/30 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 cursor-pointer transform-gpu group"
              style={{animationDelay: '0.4s'}}
              onClick={() => handleContactClick('twitter', '@raager2')}
            >
              <div className="text-blue-400 text-2xl group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300"><Twitter></Twitter></div>
              <div>
                <h3 className="font-semibold text-lg !text-white group-hover:text-blue-200 transition-colors duration-300" style={{color: 'white !important'}}>Twitter</h3>
                <p className="!text-white group-hover:text-blue-300 transition-colors duration-300" style={{color: 'white !important'}}>@raager2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;