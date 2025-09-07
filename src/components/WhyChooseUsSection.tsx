import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const features = [
    {
      image: "/img-uploads/portfolio-report.png",
      title: "Anytime consolidated portfolio report",
      description: "Get comprehensive portfolio insights and performance analytics whenever you need them"
    },
    {
      image: "/img-uploads/statement-of-mutual-funds.png",
      title: "Capital gain statement of mutual funds",
      description: "Detailed capital gains tracking and tax reporting for all your mutual fund investments"
    },
    {
      image: "/img-uploads/Transact-Online.png",
      title: "Transact Online",
      description: "Seamless online transactions with secure payment processing and instant confirmations"
    },
    {
      image: "/img-uploads/Financial-Calculators.png",
      title: "Financial Calculators",
      description: "Advanced financial planning tools to help you make informed investment decisions"
    },
    {
      image: "/img-uploads/Auto-reminder-for-due-commitments.png",
      title: "Auto reminder for due commitments",
      description: "Never miss important deadlines with automated notifications for all your financial commitments"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
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
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20"></div>
            <div className="w-2 h-2 bg-primary rotate-45"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20"></div>
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Discover the advantages that set us apart and make us the preferred choice for your financial journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-6 glass rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-4 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;