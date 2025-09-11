import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
// import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
// import LogoCarousel from "@/components/LogoCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import LiveTicker from "@/components/LiveTicker";
import AboutSection from "@/components/AboutSection";
import WealthSuraksha from "@/components/WealthSuraksha";
// import SecuritySection from "@/components/SecuritySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import HeroImageCarousel from "@/components/HeroImageCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Full-width Image Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full mt-32"
      >
        <HeroImageCarousel />
      </motion.div>
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        // className="relative container px-4 pt-40 pb-20"
        className="relative container px-4 pt-36 pb-20"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-background"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            Wealth Suraksha IMF LLP
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="Building your Wealth" />
            </span>
            <br />
            <span className="text-foreground font-medium">
              <TextGenerateEffect words="securing your legacy." />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
          >
            We believe true wealth is not just about accumulating assets—its about creating a legacy that lasts. With the right vision, expert guidance, and a client-focused approach, we help you grow, protect, and pass on your wealth with confidence.{" "}
            <span className="text-foreground">Contact Us in minutes.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Link to="/contact">
              <Button size="lg" className="button-gradient">
                Contact Us Now
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="link" className="text-foreground">
                View Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      
      </motion.section>

      {/* Full-width Image Carousel */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full"
      >
        <HeroImageCarousel />
      </motion.div> */}

      {/* About Section */}
      <div className="bg-background">
        <AboutSection />
      </div>

      {/* Wealth Suraksha Services */}
      <WealthSuraksha />

      {/* Logo Carousel */}
      {/* <div className="bg-background">
        <LogoCarousel />
      </div> */}

      {/* Live Ticker */}
      <div className="bg-background">
        <LiveTicker />
      </div>

      {/* Stats Section */}
      <div className="bg-background">
        <StatsSection />
      </div>

      {/* About Section */}
      {/* <div className="bg-black">
        <AboutSection />
      </div> */}

      {/* Features Section
      <div id="features" className="bg-black">
        <FeaturesSection />
      </div> */}

      {/* Why Choose Us Section */}
      <div className="bg-background">
        <WhyChooseUsSection />
      </div>

      {/* Security Section
      <div className="bg-black">
        <SecuritySection />
      </div> */}

      {/* Pricing Section */}
      <div id="pricing" className="bg-background">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-background">
        <TestimonialsSection />
      </div>

      {/* FAQ Section */}
      <div className="bg-background">
        <FAQSection />
      </div>

      {/* Newsletter Section */}
      <div className="bg-background">
        <NewsletterSection />
      </div>

      {/* Partners Section */}
      <div className="bg-background">
        <PartnersSection />
      </div>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-background">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/img-uploads/21f3edfb-62b5-4e35-9d03-7339d803b980.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-background backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of investors who have already discovered the power of our platform.
          </p>
          <Button size="lg" className="button-gradient">
            Create Account
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-background">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
