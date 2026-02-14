import {
  Shield,
  MessageCircle,
  TrendingUp,
  HeartHandshake,
  Rocket,
  Users,
  Award,
  Clock,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    icon: Users,
    title: "400+ In-House Experts",
    description: "No outsourcing, no freelancers. Every project is handled by our dedicated teams of specialists across 6 departments.",
    stat: "400+",
    statLabel: "Team Members",
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    icon: Rocket,
    title: "End-to-End Solutions",
    description: "From initial concept to final launch and beyond — we handle every aspect of your digital journey under one roof.",
    stat: "A-Z",
    statLabel: "Full Coverage",
    gradient: "from-violet-500/10 to-transparent",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Our clients see an average 340% return on investment. We don't just build — we engineer measurable business outcomes.",
    stat: "340%",
    statLabel: "Avg. ROI",
    gradient: "from-emerald-500/10 to-transparent",
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description: "Recognized as a top digital agency with 50+ industry awards. We set the standard for excellence in digital.",
    stat: "50+",
    statLabel: "Industry Awards",
    gradient: "from-amber-500/10 to-transparent",
  },
  {
    icon: Clock,
    title: "Lightning Fast Delivery",
    description: "Dedicated teams mean faster timelines. We deliver complex projects 3x faster than typical agencies without cutting corners.",
    stat: "3x",
    statLabel: "Faster Delivery",
    gradient: "from-cyan-500/10 to-transparent",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2, GDPR, HIPAA compliant. Your data and projects are protected by bank-grade security protocols and practices.",
    stat: "99.9%",
    statLabel: "Uptime SLA",
    gradient: "from-red-500/10 to-transparent",
  },
  {
    icon: MessageCircle,
    title: "24/7 Dedicated Support",
    description: "Your dedicated project manager and support team are always available. Real people, real responses, real results.",
    stat: "24/7",
    statLabel: "Support Available",
    gradient: "from-sky-500/10 to-transparent",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnerships",
    description: "92% of our clients stay with us for 3+ years. We're invested in your growth — not just the project launch.",
    stat: "92%",
    statLabel: "Client Retention",
    gradient: "from-pink-500/10 to-transparent",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-secondary/50 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/3 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Why Choose Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Built on <span className="text-gradient">Trust, Scale & Results</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We don't just promise results — we guarantee them. Here's why leading brands choose Vertex Digital.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 80}>
              <div className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-500 h-full hover-glow relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <reason.icon size={24} className="text-accent" />
                    </div>
                    <div className="text-right">
                      <div className="font-display text-xl font-bold text-gradient">{reason.stat}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{reason.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
