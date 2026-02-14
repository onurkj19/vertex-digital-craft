import { Linkedin, Instagram, Twitter, Github, Youtube, ArrowUpRight } from "lucide-react";

const serviceLinks = [
  { label: "Web Development", href: "#services" },
  { label: "Mobile Apps", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
  { label: "Digital Marketing", href: "#services" },
  { label: "E-Commerce", href: "#services" },
  { label: "AI & Automation", href: "#services" },
  { label: "Branding", href: "#services" },
  { label: "Cloud & DevOps", href: "#services" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter/X" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy border-t border-border/10">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#" className="font-display text-xl font-bold text-primary-foreground flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              Vertex<span className="text-gradient"> Digital</span>
            </a>
            <p className="text-primary-foreground/50 text-sm mt-4 leading-relaxed">
              A full-service digital agency with 400+ specialized professionals delivering world-class 
              digital solutions across development, design, marketing, and AI.
            </p>
            <div className="flex gap-2 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/40 hover:bg-accent/20 hover:text-accent transition-colors"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-wider">Services</h4>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-primary-foreground/40 hover:text-accent transition-colors text-left flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-primary-foreground/40 hover:text-accent transition-colors text-left flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-3 text-sm text-primary-foreground/40">
              <p>info@vertexdigital.agency</p>
              <p>+41 44 123 45 67</p>
              <p className="leading-relaxed">
                Vertex Digital AG<br />
                Zurich, Switzerland
              </p>
            </div>
            <div className="mt-5">
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors border border-accent/20"
              >
                Get a Free Quote
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30">
            &copy; {new Date().getFullYear()} Vertex Digital AG. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-primary-foreground/30">
            <button className="hover:text-primary-foreground/60 transition-colors">Privacy Policy</button>
            <button className="hover:text-primary-foreground/60 transition-colors">Terms of Service</button>
            <button className="hover:text-primary-foreground/60 transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
