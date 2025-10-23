import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            ResortAI Concierge
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={scrollToContact}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </button>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={scrollToContact}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contact Us
              </button>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Services
              </a>
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
