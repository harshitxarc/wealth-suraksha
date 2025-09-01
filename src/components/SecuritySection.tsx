import { motion } from "framer-motion";
import { Lock, Eye, Shield, Server } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Cold Storage",
      description: "95% of funds stored offline in secure cold wallets",
      details: "Multi-signature technology with geographically distributed storage"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 threat detection and response systems",
      details: "AI-powered security monitoring with instant threat response"
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive insurance protection for digital assets",
      details: "Lloyd's of London backed insurance for customer funds"
    },
    {
      icon: Server,
      title: "SOC 2 Compliant",
      description: "Industry-leading compliance and security standards",
      details: "Regular third-party security audits and penetration testing"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Your security is our top priority. We employ multiple layers of protection to ensure your assets remain safe and secure at all times.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 glass rounded-xl group hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    {feature.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-medium mb-4">Security Certifications</h3>
            <p className="text-muted-foreground mb-6">
              Wealth Suraksha is certified and compliant with global security standards
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-sm font-medium text-primary">SOC 2 Type II</div>
              <div className="text-sm font-medium text-primary">ISO 27001</div>
              <div className="text-sm font-medium text-primary">PCI DSS Level 1</div>
              <div className="text-sm font-medium text-primary">CCSS Level 3</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;