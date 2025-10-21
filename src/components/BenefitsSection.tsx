import { Clock, Globe, TrendingUp, Users, Zap, HeadphonesIcon } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a guest inquiry again, even during holidays or off-hours."
    },
    {
      icon: Globe,
      title: "Multilingual Communication",
      description: "Engage international visitors in their preferred language automatically."
    },
    {
      icon: TrendingUp,
      title: "Increases Direct Bookings",
      description: "Reduce dependency on expensive booking platforms and boost direct revenue."
    },
    {
      icon: Users,
      title: "No Extra Staff Required",
      description: "Runs automatically without additional hiring or training costs."
    },
    {
      icon: Zap,
      title: "Easy Integration",
      description: "Simple setup that works seamlessly with your existing website."
    },
    {
      icon: HeadphonesIcon,
      title: "Premium Support",
      description: "Full customization and ongoing professional support included."
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transform Your Guest Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to provide world-class service without the premium price tag.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border group hover:border-accent/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent/10 group-hover:bg-gradient-accent rounded-lg flex items-center justify-center mb-6 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
