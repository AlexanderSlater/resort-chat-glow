import { TrendingUp, MessageCircle, Globe, Zap, PhoneOff, Target } from "lucide-react";

const ResultsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Increase in website engagement",
      description: "Visitors stay longer and interact more with AI chat"
    },
    {
      icon: MessageCircle,
      value: "80%",
      label: "Common questions handled",
      description: "Most inquiries resolved instantly without staff"
    },
    {
      icon: PhoneOff,
      value: "60%",
      label: "Fewer calls and emails",
      description: "Reduce staff workload with automated responses"
    },
    {
      icon: Target,
      value: "35%",
      label: "More conversions",
      description: "Turn website visitors into confirmed bookings"
    },
    {
      icon: Globe,
      value: "75+",
      label: "Languages supported",
      description: "Communicate with international guests effortlessly"
    },
    {
      icon: Zap,
      value: "<3s",
      label: "Average response time",
      description: "Lightning-fast answers keep guests engaged"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proven to Boost Engagement and Leads
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from resorts that transformed their guest experience with AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:border-accent/50 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-card-foreground mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-primary rounded-2xl p-12 max-w-4xl mx-auto text-center shadow-lg animate-scale-in">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">
            Join Leading Resorts Already Using AI
          </h3>
          <p className="text-xl text-primary-foreground/90">
            Transform your website from a simple brochure into a 24/7 booking engine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
