import { motion } from "framer-motion";
import { Shield, TrendingUp, Zap, Users, BarChart3, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investment Services",
      description: "Our investment services are designed to match your goals, risk profile, and time horizon—ensuring smarter decisions and long-term financial growth.",
      features: ["Risk Profile & Time Horizon Assessment", "Optimal Asset Allocation Strategy", "Portfolio Review & Gap Analysis", "Personalized Portfolio Alignment", "Portfolio Management (Equity & Debt)", "Digital Access & Transactions"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tax Services",
      description: "Our tax services are designed to minimize liabilities and optimize your wealth through smart, legal, and personalized tax planning strategies.",
      features: ["PAN Application Assistance", "Salary Structuring & Restructuring", "Tax Calculation & Advisory", "Tax Declaration Support", "Specialized Tax Consulting & Opinions", "Tax-Efficient Investment Planning"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Retirement Services",
      description: "Our retirement services help you build a secure income stream, so you can enjoy life after work without financial worries.",
      features: ["Retirement Corpus Calculation", "Portfolio Realignment", "Corpus Accumulation Strategies", "Investment Selection", "Annual Portfolio Review", "Market Insights for Retirement"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Insurance Services",
      description: "Our insurance services safeguard you and your family with tailored coverage plans that ensure long-term security and peace of mind.",
      features: ["Policy Review & Analysis", "Research & Product Comparison", "Human Life Value Assessment", "Tailored Insurance Product Selection", "ULIP Advisory", "Claims Assistance", "Convenient Online Premium Payments"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Will / Trust Formation Services",
      description: "Our will and trust formation services help you protect your legacy and provide clarity for your family’s financial future.",
      features: ["Professional Will Drafting", "Convenient Will Delivery", "Trust Formation", "Comprehensive Estate Planning"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Loan Services",
      description: "Our loan services help you access funds quickly and easily, ensuring the right balance of affordability and convenience.",
      features: ["Home Loans", "Loan Against Property (LAP)", "Loan Against Securities", "Personal Loans", "Auto Loans"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            At <span className="font-bold text-base">
              <span style={{ color: '#FFFFFF'}}>Wealth</span> <span style={{ color: '#4ADE80' }}>Suraksha</span>
            </span> IMF LLP, we follow a comprehensive and disciplined approach to help you build, align, and manage your investment portfolio effectively
          </p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Map service titles to ids for anchor links
            const idMap = {
              "Investment Services": "investment",
              "Tax Services": "tax",
              "Retirement Services": "retirement",
              "Insurance Services": "insurance",
              "Will / Trust Formation Services": "estate",
              "Loan Services": "loan"
            };
            const anchorId = idMap[service.title as keyof typeof idMap] || undefined;
            return (
              <motion.div
                key={index}
                id={anchorId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders who trust CryptoTrade for their cryptocurrency needs
          </p>
          <button className="button-gradient px-8 py-3 rounded-lg font-medium">
            Get Started Today
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;