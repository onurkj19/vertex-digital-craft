import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TeamStats from "@/components/TeamStats";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TeamStats />
        <Portfolio />
        <Testimonials />
        <WhyUs />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
