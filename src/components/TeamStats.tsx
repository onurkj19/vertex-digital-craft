import {
  Code2,
  Palette,
  Megaphone,
  Sparkles,
  Headphones,
  Shield,
  Users,
  Globe2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const departments = [
  {
    icon: Code2,
    name: "Development",
    count: "120+",
    description: "Full-stack, frontend, backend, mobile & DevOps engineers",
    color: "from-blue-500/20 to-cyan-500/10",
    borderColor: "hover:border-blue-500/30",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    accentColor: "text-blue-400",
  },
  {
    icon: Palette,
    name: "Design",
    count: "80+",
    description: "UI/UX designers, graphic artists, motion & 3D specialists",
    color: "from-violet-500/20 to-pink-500/10",
    borderColor: "hover:border-violet-500/30",
    iconBg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    accentColor: "text-violet-400",
  },
  {
    icon: Megaphone,
    name: "Digital Marketing",
    count: "90+",
    description: "SEO experts, PPC managers, social media & content strategists",
    color: "from-emerald-500/20 to-green-500/10",
    borderColor: "hover:border-emerald-500/30",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    accentColor: "text-emerald-400",
  },
  {
    icon: Sparkles,
    name: "AI & Data Science",
    count: "45+",
    description: "ML engineers, data scientists, AI researchers & NLP experts",
    color: "from-amber-500/20 to-orange-500/10",
    borderColor: "hover:border-amber-500/30",
    iconBg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    accentColor: "text-amber-400",
  },
  {
    icon: Shield,
    name: "Cybersecurity",
    count: "25+",
    description: "Security analysts, penetration testers & compliance specialists",
    color: "from-red-500/20 to-rose-500/10",
    borderColor: "hover:border-red-500/30",
    iconBg: "bg-red-500/10 group-hover:bg-red-500/20",
    accentColor: "text-red-400",
  },
  {
    icon: Headphones,
    name: "Client Success",
    count: "30+",
    description: "Project managers, account leads & dedicated support teams",
    color: "from-sky-500/20 to-blue-500/10",
    borderColor: "hover:border-sky-500/30",
    iconBg: "bg-sky-500/10 group-hover:bg-sky-500/20",
    accentColor: "text-sky-400",
  },
];

const highlights = [
  { icon: Users, value: "400+", label: "Total Team Members" },
  { icon: Globe2, value: "15+", label: "Countries Represented" },
  { icon: Code2, value: "50+", label: "Tech Stacks Mastered" },
  { icon: Shield, value: "24/7", label: "Global Coverage" },
];

const TeamStats = () => {
  return (
    <section id="team" className="py-24 lg:py-32 bg-background relative">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-purple-500/3 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Team</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              <span className="text-gradient">400+ Experts</span> Across Every Discipline
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our strength lies in our people. Six specialized departments work in harmony to deliver 
              complete digital solutions — no outsourcing, no compromises.
            </p>
          </div>
        </ScrollReveal>

        {/* Highlight stats bar */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-accent/30 transition-all duration-300 hover-glow group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon size={20} className="text-accent" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Department cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, i) => (
            <ScrollReveal key={dept.name} delay={i * 80}>
              <div className={`group relative bg-card border border-border ${dept.borderColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-500 h-full overflow-hidden`}>
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${dept.iconBg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <dept.icon size={24} className={dept.accentColor} />
                    </div>
                    <span className={`font-display text-2xl font-bold ${dept.accentColor}`}>{dept.count}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{dept.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-card border border-border hover-glow transition-all">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-2 border-background flex items-center justify-center"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="text-[10px] font-bold text-foreground/70">
                      {["JD", "AK", "SR", "MV", "LP"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">+395 more</span> team members ready to work on your project
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TeamStats;
