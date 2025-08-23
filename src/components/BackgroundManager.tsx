interface BackgroundManagerProps {
  children: React.ReactNode;
}

// 🎨 EASY BACKGROUND CUSTOMIZATION
// Change the backgroundConfig object below to customize your background

const backgroundConfig = {
  // OPTIONS: 'image', 'video', 'gradient', 'gif'
  type: 'image' as 'image' | 'video' | 'gradient' | 'gif',
  
  // For type: 'image' or 'gif'
  imageUrl: '/src/assets/atmospheric-background.jpg',
  
  // For type: 'video' 
  videoUrl: '', // Add your video URL here
  
  // For type: 'gradient'
  gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // CSS gradient
  
  // Optional overlay (works with all types)
  overlay: 'hsl(220 30% 5% / 0.6)', // Semi-transparent overlay
  
  // Background options
  backgroundSize: 'cover', // 'cover', 'contain', 'auto', etc.
  backgroundPosition: 'center', // 'center', 'top', 'bottom', etc.
  backgroundRepeat: 'no-repeat' // 'no-repeat', 'repeat', etc.
};

export const BackgroundManager = ({ children }: BackgroundManagerProps) => {
  const renderBackground = () => {
    switch (backgroundConfig.type) {
      case 'image':
      case 'gif':
        return (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${backgroundConfig.imageUrl})`,
              backgroundSize: backgroundConfig.backgroundSize,
              backgroundPosition: backgroundConfig.backgroundPosition,
              backgroundRepeat: backgroundConfig.backgroundRepeat
            }}
          />
        );
      
      case 'video':
        return (
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={backgroundConfig.videoUrl} type="video/mp4" />
          </video>
        );
      
      case 'gradient':
        return (
          <div 
            className="absolute inset-0"
            style={{ background: backgroundConfig.gradient }}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      {renderBackground()}
      
      {/* Optional overlay */}
      {backgroundConfig.overlay && (
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: backgroundConfig.overlay }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};