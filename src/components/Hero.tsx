import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-glow/15 rounded-full blur-[100px] animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[80px] animate-float" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-8 animate-fade-up">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-accent">Swiss Digital Excellence</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-primary-foreground mb-6 animate-fade-up [animation-delay:100ms]">
          We Build Powerful
          <br />
          <span className="text-gradient">Digital Experiences</span>
        </h1>

        <p className="text-lg sm:text-xl text-primary-foreground/60 max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:200ms]">
          Swiss precision meets modern technology. We craft high-performance digital solutions
          that elevate your brand and drive results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:300ms]">
          <Button
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-12 text-base gap-2 group"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#portfolio")}
            className="rounded-full px-8 h-12 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            View Our Work
          </Button>
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
