// Fix for custom window property
declare global {
  interface Window {
    __NAVBAR_HEIGHT__?: number;
  }
}
import { motion } from "framer-motion";
import { TrendingUp, Eye, Target, Users, Building, Shield } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { DecorativeDivider } from "@/components/ui/decorative-divider";
import LeadershipSection from "@/components/LeadershipSection";

const About = () => {
  const navigate = useNavigate();
  const services = [
    "Resident and Non-Resident Individuals (NRIs)",
    "Small and Medium Enterprises (SMEs)", 
    "Corporates"
  ];

  const missionVisionData = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide unbiased advisory services, offering a comprehensive range of products with transparency, cost-effectiveness, and a commitment to timely delivery, ensuring that we always meet our clients' financial goals and expectations."
    },
    {
      icon: Eye,
      title: "Vision", 
      description: "To be the most trusted and widely recognized platform in the wealth management domain, dedicated to enhancing the financial well-being of individuals and families across all segments, starting from low-income groups to high-net-worth portfolios."
    }
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ paddingTop: typeof window !== 'undefined' && window.__NAVBAR_HEIGHT__ ? window.__NAVBAR_HEIGHT__ : 112 }}
    >
  <TopBar />
  <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
      >
        <div className="container px-4">
          <div className="text-center mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-6 py-2 rounded-full glass"
            >
              <span className="text-sm font-medium text-primary">Know more about us</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl font-light mb-8 tracking-tight"
            >
              About <span className="text-gradient">Wealth Suraksha</span>
              <DecorativeDivider className="mb-6 justify-center" />
            </motion.h1>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-normal mb-8 text-primary">
                Price is what you pay, value is what you get !!
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At <strong className="text-foreground">Wealth Suraksha IMF LLP</strong>, we believe true wealth lies in long-term value 
                  creation. With a clear vision and strategic approach, we help clients nurture their 
                  assets and build enduring legacies.
                </p>
                
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">Company Overview</h3>
                  <p>
                    Established in 2019, <strong className="text-foreground">Wealth Suraksha IMF LLP</strong> is a registered firm under the LLP 
                    Act, 2008, and operates as an independent financial services and Insurance 
                    Marketing Firm. We specialize in wealth management solutions for:
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span>{service}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <p>
                  Our approach is client-oriented, offering tailored investment strategies based on 
                  individual's financial goals and risk profiles.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden glass p-8 flex flex-col items-center">
                <img
                  src="/img-uploads/about-right-img.jpg"
                  alt="About Wealth Suraksha"
                  className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain mb-8 rounded-xl shadow-lg border border-primary/20"
                  loading="lazy"
                />
                <div className="bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-xl p-8 text-center w-full">
                  <TrendingUp className="w-24 h-24 mx-auto mb-6 text-primary" />
                  <h3 className="text-2xl font-medium mb-4">Financial Growth</h3>
                  <p className="text-muted-foreground">
                    Building wealth through strategic investments and comprehensive financial planning
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12">
              <blockquote className="text-xl md:text-2xl font-medium text-primary italic mb-6">
                "Focusing on the underlying objective of the investments is far better than eyeing on immediate results"
              </blockquote>
            </div>
          </motion.div>

          {/* Detailed Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed mb-20"
          >
            <p>
              Investing can be tricky, and especially those who are new to investing can quickly start to feel overwhelmed. At Wealth Suraksha, we offer the best investment 
              products, prudent selection from a diverse range of fund managers and investment houses identifying the best-in-class investment products across Equities, Fixed Income, 
              Real Estate, Insurance, Structures and Alternate Products best suited to your requirements.
            </p>
            
            <p>
              The product onboarding process involves a detailed fundamental and technical analysis, check on disclosures, regulatory documents, processes, fund manager meetings 
              and evaluation of associated costs structure.
            </p>
            
            <p>
              While we provide the best-in-class investment products, we essentially align it with the investor's objective of investing with the proper asset allocation and a clear road map 
              to help them achieve their financial dreams.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionVisionData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.06, zIndex: 2 }}
                style={{ zIndex: 1 }}
              >
                <Card className="h-full glass hover:bg-muted/20 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-medium mb-6">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <div className="bg-background">
        <LeadershipSection />
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10"
      >
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-normal mb-6">
            Have any query?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team to discuss your investment goals and financial planning needs.
          </p>
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 rounded-full"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </Button>
        </div>
      </motion.section>

      {/* Leadership Section
      <div className="bg-black">
        <LeadershipSection />
      </div> */}

      <Footer />
    </div>
  );
};

export default About;