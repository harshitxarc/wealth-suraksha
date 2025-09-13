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
  <section className="py-14 bg-[#005985] text-white">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-1 text-white">
            Why Choose Us
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20"></div>
            <div className="w-2 h-2 bg-primary rotate-45"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-20"></div>
          </div>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
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
               <div className="h-full p-3 rounded-xl transition-all duration-300 text-center transform-gpu group-hover:scale-105 group-hover:shadow-2xl group-hover:z-10" style={{ background: '#00000033' }}>
                <div className="mb-3 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform-gpu">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-16 h-16 object-contain transition-transform duration-700 group-hover:rotate-[360deg]"
                    />
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-4 leading-tight text-white">
                  {feature.title}
                </h3>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;