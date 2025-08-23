import { 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Globe,
  Mail,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  url: string;
}

export const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      url: '#'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      url: '#'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram', 
      url: '#'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      url: '#'
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      label: 'YouTube',
      url: '#'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'Discord',
      url: '#'
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {socialLinks.map((link, index) => (
        <Button
          key={index}
          variant="ghost"
          size="icon"
          asChild
          className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-secondary border border-glass-border backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-profile-glow"
        >
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
};