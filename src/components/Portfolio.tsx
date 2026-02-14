import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Alpine Finance",
    category: "Corporate Website",
    description: "A sleek, modern website for a Swiss financial consulting firm with integrated booking and multilingual support.",
    color: "from-accent/20 to-blue-glow/10",
  },
  {
    title: "SwissCart",
    category: "E-Commerce Store",
    description: "A high-performance e-commerce platform with custom product configurator and seamless checkout experience.",
    color: "from-emerald-500/20 to-accent/10",
  },
  {
    title: "DataPulse",
    category: "SaaS Dashboard",
    description: "An analytics dashboard for a B2B SaaS startup with real-time data visualization and user management.",
    color: "from-violet-500/20 to-accent/10",
  },
  {
    title: "Maison Élégance",
    category: "Branding Project",
    description: "Complete brand identity for a luxury Swiss hospitality brand including logo, guidelines, and collateral.",
    color: "from-amber-500/20 to-accent/10",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Portfolio</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Our Recent <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects that showcase our expertise and commitment to excellence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                <div className={`h-56 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="w-20 h-20 rounded-2xl bg-foreground/5 backdrop-blur-sm border border-foreground/10 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-foreground/60">{project.title[0]}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
