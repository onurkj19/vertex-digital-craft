import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";

const contactInfo = [
  {
    icon: MapPin,
    title: "Headquarters",
    lines: ["Vertex Digital AG", "Zurich, Switzerland"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@vertexdigital.agency", "sales@vertexdigital.agency"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+41 44 123 45 67", "+1 (555) 987-6543"],
  },
  {
    icon: Globe,
    title: "Global Offices",
    lines: ["Zurich · London · New York", "Dubai · Singapore"],
  },
];

const serviceOptions = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing & SEO",
  "E-Commerce Solutions",
  "Branding & Identity",
  "AI & Automation",
  "Custom Software",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "Our team will get back to you within 2-4 hours during business hours.",
    });
    setFormData({ name: "", email: "", company: "", service: "", budget: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Contact Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Let's Build Something{" "}
              <span className="text-gradient">Extraordinary</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell us about your project and we'll assign the perfect team from our 400+ experts 
              to bring your vision to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Form - takes 3 columns */}
          <ScrollReveal className="lg:col-span-3">
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-xl h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full h-12 rounded-xl border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-150k">$50,000 - $150,000</option>
                      <option value="150k+">$150,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed *</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full h-12 rounded-xl border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="rounded-xl min-h-[130px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-12 gap-2 w-full sm:w-auto text-base shadow-lg shadow-accent/20"
                >
                  <Send size={18} />
                  Send Message
                  <ArrowRight size={16} />
                </Button>

                <p className="text-xs text-muted-foreground">
                  We typically respond within 2-4 hours during business hours. All inquiries are confidential.
                </p>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact info - takes 2 columns */}
          <ScrollReveal delay={200} className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{item.title}</p>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Office hours card */}
              <div className="bg-card border border-border rounded-2xl p-5 mt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} className="text-accent" />
                  <h4 className="font-display font-semibold text-foreground text-sm">Office Hours</h4>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Monday — Friday: 8:00 — 20:00 CET</p>
                  <p>Saturday: 10:00 — 16:00 CET</p>
                  <p>Sunday: Emergency support only</p>
                </div>
              </div>

              {/* Quick response promise */}
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-5">
                <p className="text-sm font-medium text-foreground mb-1">Fast Response Guarantee</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We guarantee a response within 4 hours during business hours. 
                  For urgent projects, call us directly for immediate assistance.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
