import { MapPin, Eye } from 'lucide-react';

interface ProfileCardProps {
  username: string;
  status: string;
  statusDetail: string;
  title: string;
  location: string;
  avatar: string;
  viewCount: number;
}

export const ProfileCard = ({ 
  username, 
  status, 
  statusDetail, 
  title,
  location,
  avatar, 
  viewCount 
}: ProfileCardProps) => {
  return (
    <div className="relative">
      {/* Atmospheric overlay with minimal glassmorphism */}
      <div className="backdrop-blur-sm bg-glass border border-glass-border rounded-3xl p-8 shadow-2xl">
        {/* Main profile section */}
        <div className="text-center space-y-6">
          {/* Profile info section */}
          <div className="flex items-center justify-center gap-4 py-6">
            <div className="relative">
              <img 
                src={avatar} 
                alt={`${username}'s avatar`}
                className="w-16 h-16 rounded-full border-2 border-primary shadow-lg shadow-profile-glow"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-status-online rounded-full border-2 border-background"></div>
            </div>
            
            <div className="text-left">
              <div className="font-semibold text-foreground text-lg">{username}</div>
              <div className="text-sm text-accent font-medium">{status}</div>
              <div className="text-xs text-muted-foreground">{statusDetail}</div>
            </div>
          </div>

          {/* Title and Location moved below status */}
          <div className="space-y-2">
            <p className="text-xl text-muted-foreground font-medium">
              {title}
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {/* View counter */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Eye className="w-4 h-4" />
            <span>{viewCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};