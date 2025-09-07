import { motion } from "framer-motion";
import { Smartphone, Monitor, Code, Headphones } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Products = () => {
  const products = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Wealth Suraksha Pro",
      subtitle: "Desktop investing Platform",
      description: "Advanced desktop application with professional investing tools, real-time charts, and portfolio management.",
      features: [
        "Advanced charting tools",
        "Real-time market data",
        "Portfolio analytics",
        "Risk management tools",
        "Automated investing strategies",
        "Multi-monitor support"
      ],
      image: "/img-uploads/c32c6788-5e4a-4fee-afee-604b03113c7f.png"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Wealth Suraksha Mobile",
      subtitle: "iOS & Android App",
      description: "Trade on the go with our feature-rich mobile application available for iOS and Android devices.",
      features: [
        "Touch-optimized interface",
        "Biometric authentication",
        "Push notifications",
        "Quick buy/sell orders",
        "Price alerts",
        "Offline portfolio viewing"
      ],
      image: "/img-uploads/7cc724d4-3e14-4e7c-9e7a-8d613fde54d0.png"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Wealth Suraksha API",
      subtitle: "Developer Platform",
      description: "Integrate cryptocurrency investing into your applications with our robust REST and WebSocket APIs.",
      features: [
        "REST & WebSocket APIs",
        "Real-time market data",
        "Order management",
        "Account information",
        "Comprehensive documentation",
        "SDK libraries"
      ],
      image: "/img-uploads/bf56a0c6-48e4-49f7-b286-8e3fda9a3385.png"
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "Premium Support",
      subtitle: "24/7 Customer Service",
      description: "Get dedicated support from our team of cryptocurrency experts whenever you need assistance.",
      features: [
        "24/7 live chat support",
        "Dedicated account manager",
        "Priority ticket resolution",
        "Phone support",
        "Educational resources",
        "investing consultation"
      ],
      image: "/img-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
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
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive suite of cryptocurrency investing products designed for every type of trader
          </p>
        </div>
      </motion.section>

      {/* Products Section */}
      <section className="container px-4 py-20">
        <div className="space-y-20">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="text-primary mb-4">
                  {product.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h2>
                <p className="text-primary text-lg mb-4">{product.subtitle}</p>
                <p className="text-muted-foreground text-lg mb-6">{product.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="button-gradient px-6 py-3 rounded-lg font-medium">
                  Learn More
                </button>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="glass rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          ))}
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
            Ready to try our products?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the power of professional cryptocurrency investing tools
          </p>
          <button className="button-gradient px-8 py-3 rounded-lg font-medium">
            Start Free Trial
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;