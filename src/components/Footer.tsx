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
    <footer className="bg-navy border-t border-white/5">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="Vertex Web Solutions" className="h-12 w-auto" />
            </a>
            <p className="text-white/40 text-sm mt-4 leading-relaxed">
              A full-service digital agency with 400+ specialized professionals delivering world-class 
              digital solutions across development, design, marketing, and AI.
            </p>
            <div className="flex gap-2 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/35 hover:bg-blue-500/20 hover:text-blue-400 transition-all hover:scale-110"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Services</h4>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-white/35 hover:text-blue-400 transition-colors text-left flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-white/35 hover:text-blue-400 transition-colors text-left flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-3 text-sm text-white/35">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-all border border-blue-500/20 hover:scale-105"
              >
                Get a Free Quote
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Vertex Digital AG. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/25">
            <button className="hover:text-white/50 transition-colors">Privacy Policy</button>
            <button className="hover:text-white/50 transition-colors">Terms of Service</button>
            <button className="hover:text-white/50 transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
