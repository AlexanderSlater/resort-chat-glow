import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No hidden costs. No surprises. Just straightforward pricing that works for your resort.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {/* Setup Fee */}
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border animate-slide-up">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Setup Fee</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-sm text-muted-foreground">from</span>
                <span className="text-5xl font-bold text-foreground">$300</span>
              </div>
              <p className="text-muted-foreground mt-2">One-time customization</p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Complete chatbot setup and configuration</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Custom branding and tone of voice</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Integration with your website</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Training on your resort's FAQs</span>
              </li>
            </ul>
          </div>

          {/* Monthly Maintenance */}
          <div className="bg-gradient-primary rounded-2xl p-8 shadow-lg text-primary-foreground animate-slide-up" style={{ animationDelay: '100ms' }}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Monthly Maintenance</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-sm opacity-90">from</span>
                <span className="text-5xl font-bold">$50</span>
              </div>
              <p className="opacity-90 mt-2">Optional ongoing support</p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Regular updates and improvements</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Performance monitoring and optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Priority technical support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Content updates as needed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 max-w-2xl mx-auto text-center shadow-sm border border-border animate-scale-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Check className="w-6 h-6 text-accent" />
            <span className="text-lg font-semibold text-card-foreground">No Hidden Costs</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Cancel anytime. No long-term contracts. No surprise fees. Just honest, affordable pricing for quality service.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg"
          >
            Get Your Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
