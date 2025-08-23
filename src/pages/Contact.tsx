import { BackgroundManager } from '@/components/BackgroundManager';
import { Navigation } from '@/components/Navigation';
import { Mail, MessageCircle, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen p-8 text-black">
      <div className="max-w-2xl mx-auto">
        {/* Content section with blur background */}
        <div className="content-section">
          {/* Title */}
          <h1 className="animate-fade-up text-4xl font-bold text-center mb-4">
            Get in Touch
          </h1>
          
          <p className="animate-fade-up-delay-1 text-center mb-12 text-lg">
            Feel free to reach out through any of these channels.<br />
            I'd love to hear from you!
          </p>
          
          {/* Contact Cards */}
          <div className="space-y-4">
            {/* Email */}
            <div className="animate-slide-in-left contact-card-blur p-6 flex items-center gap-4"
                 style={{animationDelay: '0.1s'}}>
              <div className="text-blue-600 text-2xl">
                ✉️
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-800">noemailyet</p>
              </div>
            </div>
            
            {/* Discord */}
            <div className="animate-slide-in-left contact-card-blur p-6 flex items-center gap-4"
                 style={{animationDelay: '0.2s'}}>
              <div className="text-purple-600 text-2xl">
                💬
              </div>
              <div>
                <h3 className="font-semibold text-lg">Discord</h3>
                <p className="text-gray-800">raager</p>
              </div>
            </div>
            
            {/* GitHub */}
            <div className="animate-slide-in-left contact-card-blur p-6 flex items-center gap-4"
                 style={{animationDelay: '0.3s'}}>
              <div className="text-gray-700 text-2xl">
                🐙
              </div>
              <div>
                <h3 className="font-semibold text-lg">GitHub</h3>
                <p className="text-gray-800">@raager09</p>
              </div>
            </div>
            
            {/* Twitter */}
            <div className="animate-slide-in-left contact-card-blur p-6 flex items-center gap-4"
                 style={{animationDelay: '0.4s'}}>
              <div className="text-blue-600 text-2xl">
                🐦
              </div>
              <div>
                <h3 className="font-semibold text-lg">Twitter</h3>
                <p className="text-gray-800">@raager02</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
