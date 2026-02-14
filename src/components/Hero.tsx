import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const clientLogos = [
  "TechCorp", "FinanceHub", "MediaMax", "CloudNet", "DataSync", "BrandPro"
];

const Hero = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-blue-glow/15 rounded-full blur-[100px] animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[80px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-glow [animation-delay:4s]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/20 bg-accent/5 mb-8 animate-fade-up">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-accent">400+ Experts Ready to Build Your Vision</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-primary-foreground mb-6 animate-fade-up [animation-delay:100ms]">
          We Don't Just Build
          <br />
          <span className="text-gradient">We Dominate Digital</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-primary-foreground/60 max-w-3xl mx-auto mb-4 animate-fade-up [animation-delay:200ms]">
          Full-service digital agency with <span className="text-accent font-semibold">400+ specialized professionals</span> delivering 
          world-class development, design, and digital marketing solutions from A to Z.
        </p>

        <p className="text-sm text-primary-foreground/40 max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:250ms]">
          Web Development &bull; Mobile Apps &bull; UI/UX Design &bull; Digital Marketing &bull; SEO &bull; Branding &bull; AI & Automation &bull; E-Commerce &bull; And Everything In Between
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:300ms]">
          <Button
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 h-14 text-base gap-2 group shadow-lg shadow-accent/25"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#portfolio")}
            className="rounded-full px-10 h-14 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground gap-2"
          >
            <Play size={16} className="fill-current" />
            See Our Work
          </Button>
        </div>

        {/* Social proof bar */}
        <div className="mt-20 animate-fade-up [animation-delay:500ms]">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/30 mb-6">Trusted by industry leaders</p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {clientLogos.map((name, i) => (
              <div
                key={name}
                className="text-primary-foreground/20 hover:text-primary-foreground/40 transition-colors font-display text-lg font-bold tracking-wide"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
