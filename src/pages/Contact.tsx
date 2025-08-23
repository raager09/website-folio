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

  return (
    <div className="min-h-screen p-8 text-white">
      <div className="max-w-2xl mx-auto">
        {/* Content section with blur background */}
        <div className="content-section">
          <h1 className="animate-fade-up text-4xl font-bold text-center mb-4 text-white">
            Get in Touch
          </h1>
         
          <p className="animate-fade-up-delay-1 text-center mb-12 text-lg text-white">
            Feel free to reach out through any of these channels.<br />
            I'd love to hear from you!
          </p>
         
          <div className="space-y-4">
            <div className="animate-slide-in-left contact-card-blur p-6 flex items-center gap-4 text-white"
                 style={{animationDelay: '0.1s'}}>
              <div className="text-blue-400 text-2xl">✉️</div>
              <div>
                <h3 className="font-semibold text-lg text-white">Email</h3>
                <p className="text-white">noemailyet</p>
              </div>
            </div>
           
            <div className="animate-slide-in-left contact-card-blur p-6 flex items-center gap-4 text-white"
                 style={{animationDelay: '0.2s'}}>
              <div className="text-purple-400 text-2xl">💬</div>
              <div>
                <h3 className="font-semibold text-lg text-white">Discord</h3>
                <p className="text-white">raager</p>
              </div>
            </div>
           
            <div className="animate-slide-in-left contact-card-blur p-6 flex items-center gap-4 text-white"
                 style={{animationDelay: '0.3s'}}>
              <div className="text-gray-400 text-2xl">🐙</div>
              <div>
                <h3 className="font-semibold text-lg text-white">GitHub</h3>
                <p className="text-white">@raager09</p>
              </div>
            </div>
           
            <div className="animate-slide-in-left contact-card-blur p-6 flex items-center gap-4 text-white"
                 style={{animationDelay: '0.4s'}}>
              <div className="text-blue-400 text-2xl">🐦</div>
              <div>
                <h3 className="font-semibold text-lg text-white">Twitter</h3>
                <p className="text-white">@raager02</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;