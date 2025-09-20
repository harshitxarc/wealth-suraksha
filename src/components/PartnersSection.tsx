import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = [
    {
      name: "Axis Mutual Fund",
      logo: "/img-uploads/axis.png"
    },
    {
      name: "DSP Mutual Fund", 
      logo: "/img-uploads/dsp.png"
    },
    {
      name: "HDFC Mutual Fund",
      logo: "/img-uploads/hdfc.png"
    },
    {
      name: "ICICI Prudential",
      logo: "/img-uploads/icici.png"
    },
    {
      name: "Invesco Mutual Fund",
      logo: "/img-uploads/invesco.png"
    },
    {
      name: "Kotak Mutual Fund",
      logo: "/img-uploads/kotak.png"
    },
    {
      name: "L&T Financial Services",
      logo: "/img-uploads/l&t.png"
    },
    {
      name: "Franklin Templeton",
      logo: "/img-uploads/fi.png"
    },
    {
      name: "SBI Mutual Fund",
      logo: "/img-uploads/sbi.png"
    },
    {
      name: "Sundaram Mutual",
      logo: "/img-uploads/sundaram.png"
    },
    {
      name: "Tata Mutual Fund",
      logo: "/img-uploads/tata.png"
    },
    {
      name: "UTI Mutual Fund",
      logo: "/img-uploads/uti-mutual-fund.png"
    },
    {
      name: "ICICI Lombard",
      logo: "/img-uploads/lombard.png"
    },
    {
      name: "IIFL asset Management",
      logo: "/img-uploads/iifl-asset.png"
    },
    {
      name: "Motilal Oswal Asset Management",
      logo: "/img-uploads/motilal-oswal.png"
    },
    {
      name: "Nippon India Mutual Fund",
      logo: "/img-uploads/nippon.png"
    },
    {
      name: "Star Health Insurance",
      logo: "/img-uploads/star-health.png"
    },
    {
      name: "The New India Assurance Co. Ltd.",
      logo: "/img-uploads/the-new-india.png"
    },
    {
      name: "Axis Max Life Insurance",
      logo: "/img-uploads/axis-max.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-6 rounded-full"
          />
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Partners</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading mutual fund companies and financial institutions
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 max-w-6xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative bg-foreground p-3 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 aspect-square flex items-center justify-center overflow-hidden" style={{ clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)' }}>
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)' }} />
                
                {/* Logo */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="relative z-10 max-w-full max-h-full object-contain w-32 h-32 filter group-hover:brightness-110 transition-all duration-300 group-hover:opacity-0 group-hover:scale-75"
                />
                
                {/* Company Name on Hover */}
                <div className="absolute inset-0 flex items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-semibold text-background text-center leading-tight">
                    {partner.name}
                  </span>
                </div>
                
                {/* Subtle Border Effect */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/10 transition-all duration-300" style={{ clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)' }} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">19+</div>
              <div className="text-sm text-muted-foreground">Fund Partners</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">₹500Cr+</div>
              <div className="text-sm text-muted-foreground">Assets Under Management</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50K+</div>
              <div className="text-sm text-muted-foreground">Active Investors</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection; 