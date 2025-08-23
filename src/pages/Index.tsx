import { ProfileCard } from '@/components/ProfileCard';
import { SocialLinks } from '@/components/SocialLinks';
import { Navigation } from '@/components/Navigation';
import { BackgroundManager } from '@/components/BackgroundManager';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      {/* Profile Card with blur background and black text */}
      <div className="animate-scale-up profile-card max-w-md mx-auto text-center">
        {/* Profile Image */}
        <div className="relative mb-6">
          <img 
            src="/path-to-your-profile-image.jpg" 
            alt="Profile" 
            className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
          />
          <div className="absolute bottom-2 right-1/3 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        
        {/* Name and Status */}
        <h1 className="text-3xl font-bold mb-2">raager</h1>
        <p className="text-blue-600 mb-1 font-semibold">Watching</p>
        <p className="text-gray-800 text-sm mb-4">The Time - Its 01:04 AM for me right now</p>
        
        {/* Bio */}
        <h2 className="text-xl mb-2">a nerd</h2>
        <p className="flex items-center justify-center gap-2 mb-2 font-medium">
          <span>📍</span> Alberta, Canada
        </p>
        <p className="flex items-center justify-center gap-2 font-medium">
          <span>👁️</span> 56
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-6">
          {/* Add your social icons here */}
        </div>
      </div>
    </div>
  );
};

export default Index;