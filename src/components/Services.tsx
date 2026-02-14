import { useState } from "react";
import {
  Globe,
  Code2,
  ShoppingCart,
  Megaphone,
  Palette,
  Layout,
  Settings,
  Sparkles,
  Smartphone,
  Database,
  Search,
  Video,
  BarChart3,
  Cloud,
  Shield,
  Zap,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "dev", label: "Development" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
  { id: "ai", label: "AI & Tech" },
];

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Custom responsive websites built with cutting-edge tech stacks. From landing pages to complex web applications — pixel-perfect and performance-optimized.",
    category: "dev",
    highlight: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native iOS, Android, and cross-platform apps that deliver seamless user experiences. React Native, Flutter, Swift, and Kotlin expertise.",
    category: "dev",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Enterprise-grade software solutions, APIs, SaaS platforms, and microservices architecture built for scale and reliability.",
    category: "dev",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "High-converting online stores with Shopify, WooCommerce, or fully custom builds. Payment integration, inventory management, and optimization.",
    category: "dev",
    highlight: true,
  },
  {
    icon: Database,
    title: "Backend & Cloud Infrastructure",
    description: "Robust server architectures, database design, cloud deployment (AWS, Azure, GCP), DevOps pipelines, and scalable microservices.",
    category: "dev",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Research-driven interface design that converts. Wireframing, prototyping, user testing, and design systems that elevate the user experience.",
    category: "design",
    highlight: true,
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Complete brand identities — logos, color systems, typography, guidelines, and collateral that make your brand unforgettable.",
    category: "design",
  },
  {
    icon: Video,
    title: "Motion & Video Production",
    description: "Animated explainers, promotional videos, social media content, 3D animations, and motion graphics that captivate audiences.",
    category: "design",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Full-funnel marketing strategies — Google Ads, Meta Ads, LinkedIn campaigns, retargeting, and conversion optimization at scale.",
    category: "marketing",
    highlight: true,
  },
  {
    icon: Search,
    title: "SEO & Content Strategy",
    description: "Dominate search rankings with technical SEO, content marketing, link building, keyword strategy, and analytics-driven optimization.",
    category: "marketing",
  },
  {
    icon: BarChart3,
    title: "Social Media Management",
    description: "Strategic social presence across all platforms. Content creation, community management, influencer partnerships, and paid social campaigns.",
    category: "marketing",
  },
  {
    icon: Sparkles,
    title: "AI & Machine Learning",
    description: "Custom AI solutions, chatbots, recommendation engines, predictive analytics, NLP, computer vision, and generative AI integration.",
    category: "ai",
    highlight: true,
  },
  {
    icon: Zap,
    title: "Automation & Integration",
    description: "Workflow automation, CRM integration, API connections, data pipelines, and business process optimization that saves thousands of hours.",
    category: "ai",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud migration, containerization, CI/CD pipelines, monitoring, and infrastructure-as-code for reliable and scalable systems.",
    category: "ai",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security audits, penetration testing, compliance consulting, data protection, and secure architecture design to protect your digital assets.",
    category: "ai",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "24/7 monitoring, regular updates, performance optimization, bug fixes, and dedicated support teams for your ongoing success.",
    category: "dev",
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Services</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Digital Solutions{" "}
              <span className="text-gradient">From A to Z</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              With 400+ experts across every digital discipline, we deliver comprehensive solutions 
              that cover every aspect of your digital presence. No outsourcing, no shortcuts — everything in-house.
            </p>
          </div>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-accent text-white shadow-lg shadow-accent/25"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 60}>
              <div className={`group bg-card border rounded-2xl p-6 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 h-full ${
                service.highlight ? "border-accent/20 glow-border" : "border-border"
              }`}>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                  <service.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm">
              Need something specific? <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="text-accent hover:underline font-medium">Talk to our team</button> — we handle everything digital.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
