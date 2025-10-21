import { Button } from "@/components/ui/button";
import { Award, Palette, DollarSign, Users } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Palette,
      title: "Fully Customized",
      description: "Tailored to match your resort's unique brand, tone of voice, and specific requirements."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Simple, affordable rates with no hidden costs or surprise fees. Cancel anytime."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Built and managed by real professionals who understand hospitality and technology."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Enterprise-grade solution without enterprise pricing — designed for luxury resorts."
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

        <div className="text-center animate-scale-in">
          <p className="text-lg text-muted-foreground mb-6">
            We handle the technical complexity so you can focus on what you do best — creating unforgettable guest experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-lg"
            >
              Book a Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToContact}
              className="text-lg"
            >
              See Demo Chatbot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
