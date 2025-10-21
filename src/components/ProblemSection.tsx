import { AlertCircle, Clock, UserX, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Slow Response Times",
      description: "Guests expect instant answers. Contact forms and email take hours or days to respond."
    },
    {
      icon: UserX,
      title: "Missed Opportunities",
      description: "When visitors can't get quick answers, they simply move on to your competitors."
    },
    {
      icon: TrendingDown,
      title: "Lost Bookings",
      description: "You're losing potential revenue because no one was available to answer questions in real-time."
    },
    {
      icon: AlertCircle,
      title: "Outdated Systems",
      description: "Many resort websites still rely on contact forms that create friction instead of facilitating bookings."
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Guests Are Leaving Without Answers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In today's fast-paced digital world, delayed responses mean lost bookings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
