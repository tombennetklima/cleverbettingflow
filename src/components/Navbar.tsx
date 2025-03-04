
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Über uns', href: '#about' },
    { name: 'System', href: '#system' },
    { name: 'Zahlen', href: '#stats' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 md:px-8", 
      isScrolled ? "nav-blur backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold golden-gradient font-['Playfair_Display']">BetClever</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-brown-dark/70 hover:text-brown transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="https://discord.gg/betclever" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm">
              Mitspieler werden
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brown-dark p-1 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sand/95 backdrop-blur-lg border-t border-brown/10">
          <div className="px-4 py-5 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-brown-dark/80 hover:text-brown py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a href="https://discord.gg/betclever" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" className="w-full">
                  Mitspieler werden
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
