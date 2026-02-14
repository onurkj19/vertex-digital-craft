import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 400, suffix: "+", label: "Team Members", description: "Specialized professionals", color: "from-blue-500 to-cyan-400" },
  { value: 2500, suffix: "+", label: "Projects Delivered", description: "Across 40+ countries", color: "from-violet-500 to-purple-400" },
  { value: 12, suffix: "+", label: "Years of Excellence", description: "Industry experience", color: "from-emerald-500 to-green-400" },
  { value: 99, suffix: "%", label: "Client Satisfaction", description: "5-star rated agency", color: "from-amber-500 to-yellow-400" },
];

function useCountUp(target: number, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) ref.current = requestAnimationFrame(step);
    };
    ref.current = requestAnimationFrame(step);
    return () => { if (ref.current) cancelAnimationFrame(ref.current); };
  }, [target, duration, trigger]);

  return count;
}

const StatCard = ({ value, suffix, label, description, color, delay }: { value: number; suffix: string; label: string; description: string; color: string; delay: number }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2200, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative bg-card border border-border rounded-2xl p-6 text-center hover:border-accent/30 transition-all duration-500 hover-glow group overflow-hidden shimmer"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="font-display text-4xl sm:text-5xl font-bold text-gradient mb-1 count-up">
        {count}{suffix}
      </div>
      <div className="font-semibold text-foreground text-sm mb-1">{label}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Vertex Digital</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
                Where Innovation Meets{" "}
                <span className="text-gradient">Execution</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Vertex Digital is not just another agency — we are a <span className="text-foreground font-medium">powerhouse of 400+ specialized professionals</span> spanning 
                development, design, digital marketing, AI, and beyond. We deliver end-to-end digital solutions that transform businesses and dominate markets.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From startups to Fortune 500 companies, we've partnered with visionary brands across 40+ countries 
                to build products that matter. Our teams operate across specialized departments — each one an elite 
                unit of experts dedicated to their craft.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {["Development", "Design", "Marketing", "AI & ML", "E-Commerce", "Branding"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:scale-105 transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} delay={i * 100} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
