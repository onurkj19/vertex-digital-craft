import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "8+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Happy Clients" },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Us</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
                Digital Excellence,{" "}
                <span className="text-gradient">Swiss Made</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Vertex Web Solutions is a full-service digital agency based in Switzerland. We combine Swiss precision
                with cutting-edge technology to deliver exceptional digital experiences that drive business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From concept to launch and beyond, we partner with businesses to build powerful websites,
                applications, and brands that stand out in today's competitive landscape. Our commitment to quality
                and long-term partnerships sets us apart.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-accent/30 transition-colors"
                >
                  <div className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
