import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const rotatingWords = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Digital Marketing",
  "AI Solutions",
  "E-Commerce",
  "Branding",
  "Cloud & DevOps",
];

const clientLogos = [
  "TechCorp", "FinanceHub", "MediaMax", "CloudNet", "DataSync", "BrandPro"
];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-blue-400/15 rounded-full blur-[100px] animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[80px] animate-float-gentle" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-glow [animation-delay:4s]" />
        <div className="absolute bottom-1/3 left-1/4 w-[200px] h-[200px] bg-cyan-500/10 rounded-full blur-[80px] animate-float [animation-delay:3s]" />
      </div>

      {/* Rotating gradient ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]">
        <div className="w-full h-full rounded-full border border-white/20 animate-spin-slow" />
        <div className="absolute inset-8 rounded-full border border-white/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-float-gentle"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${6 + i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-blue-400/20 bg-blue-500/10 mb-8 animate-fade-up backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-blue-300">400+ Experts Ready to Build Your Vision</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white mb-6 animate-fade-up [animation-delay:100ms]">
          We Don't Just Build
          <br />
          <span className="text-gradient-animated">We Dominate Digital</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-4 animate-fade-up [animation-delay:200ms]">
          Full-service digital agency with <span className="text-blue-400 font-semibold">400+ specialized professionals</span> delivering 
          world-class development, design, and digital marketing solutions from A to Z.
        </p>

        {/* Rotating service keywords */}
        <div className="h-8 mb-10 animate-fade-up [animation-delay:250ms] flex items-center justify-center">
          <span className="text-sm text-white/40 mr-2">We excel at:</span>
          <span
            className={`text-sm font-semibold text-blue-400 transition-all duration-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            {rotatingWords[wordIndex]}
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:300ms]">
          <Button
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-10 h-14 text-base gap-2 group shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02]"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#portfolio")}
            className="rounded-full px-10 h-14 text-base border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/30 gap-2 transition-all"
          >
            <Play size={16} className="fill-current" />
            See Our Work
          </Button>
        </div>

        {/* Social proof bar */}
        <div className="mt-20 animate-fade-up [animation-delay:500ms]">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">Trusted by industry leaders</p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="text-white/15 hover:text-white/35 transition-all duration-300 font-display text-lg font-bold tracking-wide hover:scale-105"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
