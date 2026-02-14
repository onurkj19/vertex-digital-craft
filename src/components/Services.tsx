import {
  Globe,
  Code2,
  ShoppingCart,
  Megaphone,
  Palette,
  Layout,
  Settings,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Modern, responsive, SEO-optimized websites that captivate visitors and convert them into customers.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Custom web applications built with React, Node.js, and modern tech stacks for scalable solutions.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "High-converting online stores with Shopify or custom builds that maximize your revenue potential.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic SEO, Google Ads, Meta Ads, and social media marketing to grow your online presence.",
  },
  {
    icon: Palette,
    title: "Branding & Graphic Design",
    description: "Distinctive logos, brand identities, business cards, and social media visuals that tell your story.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User-centered interfaces designed for clarity, usability, and delightful digital experiences.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description: "Ongoing optimization, security updates, and performance monitoring to keep your site running flawlessly.",
  },
  {
    icon: Sparkles,
    title: "Automation & AI",
    description: "Intelligent automation and AI-powered solutions that streamline your operations and save time.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Services</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Everything You Need to{" "}
              <span className="text-gradient">Succeed Online</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From A to Z in digital presence and development — we deliver comprehensive solutions tailored to your business.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
