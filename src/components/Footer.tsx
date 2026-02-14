import { Linkedin, Instagram, Twitter, Github } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy border-t border-border/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <a href="#" className="font-display text-xl font-bold text-primary-foreground">
              Vertex<span className="text-gradient"> Web Solutions</span>
            </a>
            <p className="text-primary-foreground/50 text-sm mt-3 leading-relaxed">
              A full-service Swiss digital agency crafting powerful digital experiences with precision and passion.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-primary-foreground/50 hover:text-accent transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-primary-foreground/5 flex items-center justify-center text-primary-foreground/50 hover:bg-accent/20 hover:text-accent transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Vertex Web Solutions. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 flex items-center gap-1">
            Made with precision in 🇨🇭 Switzerland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
