// pages/index.tsx
import DiscordPresence from '@/components/DiscordPresence';
import { SocialLinks } from '@/components/SocialLinks'; // Make sure the import matches your export

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Main content centered vertically and horizontally */}
      <div className="content-overlay w-full max-w-md">
        {/* Discord Presence - Centerpiece */}
        <div className="mb-8">
          <DiscordPresence />
        </div>
        
        {/* Social Links - Using your existing component */}
        <SocialLinks />
      </div>
    </div>
  );
};

export default Index;