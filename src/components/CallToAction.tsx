import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const CallToAction = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-glow/10 rounded-full blur-[100px] animate-pulse-glow [animation-delay:2s]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Let's Build Your{" "}
            <span className="text-gradient">Digital Future.</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto mb-10">
            Ready to elevate your digital presence? Let's discuss your project and create something extraordinary together.
          </p>
          <Button
            size="lg"
            onClick={() => scrollTo("#contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 h-14 text-base gap-2 group"
          >
            Get in Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CallToAction;
