import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  "Free project consultation & quote",
  "Dedicated team assigned within 48 hours",
  "Transparent pricing — no hidden costs",
  "100% satisfaction guarantee",
];

const CallToAction = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-[100px] animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-blue-300">Limited Spots Available — Book Your Free Consultation</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to <span className="text-gradient-animated">Dominate Your Market?</span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto mb-10">
              Join 500+ brands that trust Vertex Digital to power their digital success. 
              Let's build something extraordinary together.
            </p>

            {/* Benefits list */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-white/60">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollTo("#contact")}
                className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-10 h-14 text-lg gap-2 group shadow-xl shadow-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-[1.02]"
              >
                Start Your Project Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-white/30">
                No commitment required
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CallToAction;
