import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fair Pricing, Tailored to Your Resort
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Every resort is unique — so your pricing should be too. Our AI Concierge Chatbots are priced based on your resort's size, annual visitor volume, and the complexity of your guest experience. This ensures you pay only for the value you receive, not a one-size-fits-all rate.
            </p>
            
            <p>
              Our goal is to provide premium-quality automation at a fair cost — whether you're a small boutique hotel or a world-class resort welcoming thousands of guests each season.
            </p>
            
            <p>
              Pricing scales with your property's needs — from simple FAQ and lead capture chatbots to advanced multilingual concierge systems.
            </p>
            
            <p className="font-semibold text-foreground">
              No hidden fees. No long-term commitments. Just results.
            </p>
          </div>
        </div>

        <div className="text-center animate-scale-in">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-6 h-auto mb-4"
          >
            Get a Custom Quote
          </Button>
          
          <p className="text-muted-foreground mb-8">
            Tell us a few details about your resort, and we'll send you a personalized offer within 24 hours.
          </p>
          
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            All projects include setup, testing, and post-launch support. Optional monthly maintenance and updates available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
