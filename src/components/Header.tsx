
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold text-foreground cursor-pointer">
          Portfolio
        </a>
        
        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-5 h-5" />
            </Button>
            
            {isOpen && (
              <div className="absolute top-16 left-0 right-0 bg-background border-b border-border py-4 animate-fade-in">
                <nav>
                  <ul className="flex flex-col space-y-3 px-4">
                    {navItems.map((item) => (
                      <li key={item.label}>
                        <a 
                          onClick={() => scrollToSection(item.id)}
                          className="block py-2 px-4 hover:bg-secondary rounded-md transition-colors cursor-pointer"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav>
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
