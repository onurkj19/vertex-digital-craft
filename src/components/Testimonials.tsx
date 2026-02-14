import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Alexander Muller",
    role: "CEO, Alpine Ventures",
    text: "Vertex Digital completely transformed our digital presence. Their team of 50+ developers delivered a platform that handles 10M+ monthly users flawlessly. The ROI exceeded our projections by 340%.",
    rating: 5,
    project: "Enterprise Platform",
  },
  {
    name: "Sarah Chen",
    role: "CMO, NovaTech Global",
    text: "Working with Vertex's marketing team was a game-changer. They took us from page 5 to position 1 on Google in 6 months. Our organic traffic grew by 850% and conversions tripled.",
    rating: 5,
    project: "SEO & Digital Marketing",
  },
  {
    name: "Marco Rossi",
    role: "Founder, LuxuryBrand.io",
    text: "The UI/UX design team at Vertex is world-class. They redesigned our entire e-commerce experience, resulting in a 230% increase in average order value and 67% reduction in cart abandonment.",
    rating: 5,
    project: "E-Commerce Redesign",
  },
  {
    name: "Elena Petrova",
    role: "CTO, DataStream Analytics",
    text: "Vertex built our entire AI-powered analytics platform from scratch. Their machine learning engineers and backend developers delivered something that would have taken us years to build internally.",
    rating: 5,
    project: "AI Platform Development",
  },
  {
    name: "James Morrison",
    role: "VP Digital, MediaCorp",
    text: "We needed a partner who could handle everything — development, design, content, and marketing. Vertex was that partner. They assigned a dedicated team of 30 people to our account and delivered beyond expectations.",
    rating: 5,
    project: "Full Digital Transformation",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      changeSlide((prev: number) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const changeSlide = (getNext: (prev: number) => number) => {
    setFadeIn(false);
    setTimeout(() => {
      setActive((prev) => getNext(prev));
      setFadeIn(true);
    }, 300);
  };

  const goTo = (index: number) => {
    setAutoplay(false);
    setFadeIn(false);
    setTimeout(() => {
      setActive(index);
      setFadeIn(true);
    }, 300);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((active + 1) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] animate-pulse-glow [animation-delay:2s]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">Testimonials</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Don't just take our word for it — hear from the companies we've helped transform.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {/* Quote icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Quote size={28} className="text-blue-400" />
              </div>
            </div>

            {/* Testimonial content */}
            <div className={`text-center min-h-[220px] flex flex-col items-center justify-center transition-all duration-500 ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}>
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-xl sm:text-2xl text-white/85 leading-relaxed mb-8 max-w-3xl font-light italic">
                "{testimonials[active].text}"
              </p>

              <div>
                <p className="font-display text-lg font-semibold text-white">
                  {testimonials[active].name}
                </p>
                <p className="text-sm text-white/45">{testimonials[active].role}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                  {testimonials[active].project}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 transition-all"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === active
                        ? "w-8 h-2.5 bg-blue-500"
                        : "w-2.5 h-2.5 bg-white/15 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
