import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-resort.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-6 py-2 mb-8">
            <MessageSquare className="w-4 h-4 text-background" />
            <span className="text-sm font-medium text-background">AI-Powered Guest Experience</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 leading-tight">
            Upgrade Your Resort's Guest Experience with an{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">AI Concierge Chatbot</span>
          </h1>

          <p className="text-xl md:text-2xl text-background/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Transform your website visitors into bookings with 24/7 intelligent chat support — fast, professional, and multilingual.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 h-auto"
            >
              Book a Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 h-auto bg-transparent border-background/30 text-background hover:bg-background/10 hover:border-background/50"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-background rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
