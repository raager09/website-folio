import { 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Globe,
  Mail,
  MessageCircle,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

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
      url: 'https://github.com/raager09'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      url: 'https://x.com/Raager2'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram', 
      url: 'https://www.instagram.com/aarmaan_sekhon?igsh=MXE1NzBjcmM2bW4xaQ%3D%3D&utm_source=qr'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aarmaan-sekhon-36a285340'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'other website',
      url: 'https://guns.lol/rgr'
    },
    {
      icon: <FontAwesomeIcon icon={faTelegram} className="w-5 h-5" />,
      label: 'Send',
      url: 'https://t.me/raager09'
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