import { Button } from "@/components/ui/button";
import { Zap, Palette, TrendingUp, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Palette,
      title: "Fully Customized",
      description: "Tailored to match your resort's unique brand, tone of voice, and specific requirements."
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Get up and running in days, not months. Quick deployment with minimal disruption to your operations."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Built and managed by real professionals who understand hospitality and technology."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Increase engagement by 40%, reduce staff workload by 60%, and boost conversions by 35%."
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Premium Solution,{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">Without Premium Costs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get enterprise-level AI technology tailored specifically for your resort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm border border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12 animate-scale-in">
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            We handle the technical complexity so you can focus on what you do best — creating unforgettable guest experiences.
          </p>

          {/* Pricing Section */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Plan
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every resort is unique — so your pricing should be too. Our AI Concierge Chatbots are priced based on your resort's size, annual visitor volume, and the complexity of your guest experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Standard Plan */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border-2 border-border hover:border-primary/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-foreground mb-2">Standard</h4>
                  <p className="text-muted-foreground">Perfect for small to medium resorts</p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Setup Fee</div>
                    <div className="text-4xl font-bold text-primary">$1,000</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Monthly Maintenance</div>
                    <div className="text-4xl font-bold text-primary">$170<span className="text-lg text-muted-foreground">/mo</span></div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Complete setup & integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>24/7 AI concierge support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Multilingual capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Monthly maintenance & updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Post-launch support</span>
                  </li>
                </ul>

                <Button 
                  className="w-full text-lg"
                  size="lg"
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-gradient-primary rounded-2xl p-8 shadow-xl border-2 border-primary relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gold/20 backdrop-blur-sm text-gold-foreground text-xs font-bold px-3 py-1 rounded-full border border-gold/30">
                  POPULAR
                </div>
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-primary-foreground mb-2">Enterprise</h4>
                  <p className="text-primary-foreground/80">For large resorts & hotel chains</p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="text-sm text-primary-foreground/70 mb-1">Custom Quote</div>
                    <div className="text-4xl font-bold text-primary-foreground">Tailored</div>
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70 mb-1">Based on your needs</div>
                    <div className="text-lg text-primary-foreground/90">Volume & complexity pricing</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-primary-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Everything in Standard, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Advanced customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Priority support & SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Multiple properties support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">✓</span>
                    <span>Custom integrations & features</span>
                  </li>
                </ul>

                <Button 
                  className="w-full text-lg bg-white text-primary hover:bg-white/90"
                  size="lg"
                  onClick={scrollToContact}
                >
                  Request Custom Quote
                </Button>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Tell us a few details about your resort, and we'll send you a personalized offer within 24 hours.
              </p>
              
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                All projects include setup, testing, and post-launch support. No hidden fees. No long-term commitments. Just results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
