// pages/Index.tsx
import DiscordPresence from '@/components/DiscordPresence';
import { SocialLinks } from '@/components/SocialLinks';
import GradientBackground from '@/components/GradientBackground';
import './styles/background.css' // Added this line

const Index = () => {
  return (
    <>
      <title>raager - Digital Portfolio</title>
      <meta name="description" content="My digital portfolio and online presence" />
      <link rel="icon" href="/favicon.ico" />
     
      <GradientBackground />
     
      <div className="min-h-screen flex flex-col items-center justify-center p-8 relative z-10 text-white">
        <div className="w-full max-w-md relative z-10" style={{color: 'white !important'}}>
          <div className="mb-8">
            <DiscordPresence />
          </div>
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default Index;