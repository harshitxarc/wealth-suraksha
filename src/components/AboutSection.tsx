import { motion } from "framer-motion";
import { Shield, Zap, Globe, Users } from "lucide-react";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Multi-layer security protocols protect your assets with institutional-grade encryption"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute trades in milliseconds with our advanced matching engine"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Available worldwide with localized support in over 40 languages"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Built by industry veterans from top financial institutions and tech companies"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6">
              Wealth <span className="text-gradient">Suraksha</span> IMF LLP
            </h2>
            <DecorativeDivider className="mb-6" />
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Wealth Suraksha LLP, we believe true wealth is not just about accumulating assets—it’s about creating a legacy that lasts. With the right vision, expert guidance, and a client-focused approach, we help you grow, protect, and pass on your wealth with confidence.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded in 2019 and registered under the LLP Act, 2008, Wealth Suraksha LLP is an independent financial services firm offering tailored wealth management solutions for Individuals (Residents & NRIs), SMEs, and Corporates. Whether you’re planning for growth, stability, or succession, we are here to be your trusted financial partner every step of the way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 glass rounded-xl"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-medium mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;