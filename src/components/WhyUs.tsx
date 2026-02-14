import { Shield, MessageCircle, TrendingUp, HeartHandshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    icon: Shield,
    title: "Swiss Quality Standards",
    description: "Every project is built with the precision, reliability, and attention to detail Switzerland is renowned for.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description: "Clear timelines, honest feedback, and regular updates — you always know where your project stands.",
  },
  {
    icon: TrendingUp,
    title: "Performance-Driven Solutions",
    description: "We don't just build websites — we create digital tools engineered to deliver measurable business results.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    description: "Our partnership doesn't end at launch. We provide ongoing support, maintenance, and optimization.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Built on <span className="text-gradient">Trust & Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What sets Vertex Web Solutions apart from the rest.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 100}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                  <reason.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
