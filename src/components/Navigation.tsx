import { Home, User, Mail } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import '../Navigation.css'; // We'll create this file

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export const Navigation = () => {
  const location = useLocation();
 
  const navItems: NavItem[] = [
    {
      icon: <Home className="w-5 h-5" />,
      label: 'Home',
      path: '/'
    },
    {
      icon: <User className="w-5 h-5" />,
      label: 'About',
      path: '/about'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Contact',
      path: '/contact'
    }
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="backdrop-blur-sm bg-glass border border-glass-border rounded-2xl p-2 shadow-2xl nav-container">
        <div className="flex items-center gap-2">
          {navItems.map((item, index) => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? "default" : "ghost"}
              size="sm"
              asChild
              className={`px-4 py-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 nav-button ${
                location.pathname === item.path
                  ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-profile-glow scale-105'
                  : 'hover:bg-secondary/50 hover:shadow-md'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <Link to={item.path} className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};