import { Bot, MessageCircle, Globe, Clock, Zap, Shield } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Instant Responses 24/7",
      description: "Your AI concierge never sleeps, answering guest questions about rooms, amenities, and availability at any time."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate with international guests in their native language - perfect for resorts in tourist destinations."
    },
    {
      icon: Zap,
      title: "Booking Automation",
      description: "Streamline reservations by guiding guests through availability checks and booking processes automatically."
    },
    {
      icon: Shield,
      title: "Smart Routing",
      description: "Complex questions are seamlessly transferred to your staff with full conversation context."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-6">
            <Bot className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Your New AI Concierge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A smart assistant that works around the clock to convert website visitors into confirmed bookings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-12 text-center shadow-lg max-w-4xl mx-auto animate-scale-in">
          <Clock className="w-12 h-12 text-primary-foreground mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Always Polite. Always Fast. Always Accurate.
          </h3>
          <p className="text-xl text-primary-foreground/90">
            The perfect assistant your website never had — until now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
