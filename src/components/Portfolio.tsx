import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "NeoBank Platform",
    category: "FinTech Application",
    description: "Full-stack banking platform serving 2M+ users with real-time transactions, AI fraud detection, and multi-currency support. Built with React, Node.js, and microservices.",
    color: "from-blue-600/30 to-cyan-500/15",
    tags: ["React", "Node.js", "AI/ML", "Microservices"],
    stats: "2M+ Users",
  },
  {
    title: "LuxeMarket",
    category: "E-Commerce Platform",
    description: "Premium luxury marketplace generating $50M+ annual revenue. Custom product configurator, AR try-on features, and 99.99% uptime guaranteed.",
    color: "from-amber-500/30 to-orange-500/15",
    tags: ["Next.js", "Shopify Plus", "AR/VR", "Custom CMS"],
    stats: "$50M+ Revenue",
  },
  {
    title: "DataPulse Analytics",
    category: "SaaS Platform",
    description: "Enterprise analytics dashboard processing 100TB+ of data daily. Real-time visualization, predictive analytics, and custom reporting engine.",
    color: "from-violet-500/30 to-purple-500/15",
    tags: ["Python", "React", "TensorFlow", "AWS"],
    stats: "100TB+ Daily",
  },
  {
    title: "HealthConnect",
    category: "Healthcare Platform",
    description: "Telemedicine platform connecting 500K+ patients with doctors. HIPAA-compliant video calls, AI symptom checker, and EHR integration.",
    color: "from-emerald-500/30 to-green-500/15",
    tags: ["React Native", "WebRTC", "AI", "HIPAA"],
    stats: "500K+ Patients",
  },
  {
    title: "EcoTrack Global",
    category: "Enterprise Software",
    description: "Carbon tracking and ESG reporting platform for Fortune 500 companies. IoT sensor integration, blockchain verification, and regulatory compliance.",
    color: "from-teal-500/30 to-emerald-500/15",
    tags: ["Vue.js", "Blockchain", "IoT", "Python"],
    stats: "200+ Enterprises",
  },
  {
    title: "Stellar Brands",
    category: "Brand & Marketing",
    description: "Complete digital transformation for a global FMCG brand. Redesigned 15 product lines, 800% increase in social engagement, and brand new visual identity.",
    color: "from-rose-500/30 to-pink-500/15",
    tags: ["Branding", "Social Media", "SEO", "PPC"],
    stats: "800% Growth",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-background relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/3 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Portfolio</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Projects That <span className="text-gradient">Speak for Themselves</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From startups to Fortune 500 — a selection from our 2,500+ delivered projects.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 80}>
              <div className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 h-full hover-glow cursor-pointer">
                {/* Top gradient area */}
                <div className={`h-44 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  {/* Animated mesh background */}
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
                      backgroundSize: "30px 30px",
                    }}
                  />
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="font-display text-2xl font-bold text-white/60">{project.title[0]}</span>
                  </div>
                  
                  {/* Stats badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs font-bold text-white border border-white/10">
                    {project.stats}
                  </div>

                  {/* Arrow - appears on hover */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 border border-white/10">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-md bg-secondary text-[11px] font-medium text-muted-foreground border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
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
