import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    title: "Investment Services",
    description: "To invest is to allocate money in the expectation of some benefit in the future. In finance, the benefit from an investment is called a return.",
    iconImage: "/lovable-uploads/3e896768-5a38-4bc1-8f40-1dcc6c46303d.png",
    onClick: () => console.log("Investment Services clicked")
  },
  {
    title: "Tax Services", 
    description: "A tax is a compulsory financial charge or some other type of levy imposed on a taxpayer (an individual or legal entity) by a governmental organization",
    iconImage: "/lovable-uploads/0bf27f3c-ee65-4ca5-88c3-d2c34b10be25.png",
    onClick: () => console.log("Tax Services clicked")
  },
  {
    title: "Insurance Services",
    description: "Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss.",
    iconImage: "/lovable-uploads/b16b104e-e0f7-48ca-a8a1-dffc5ece1bee.png",
    onClick: () => console.log("Insurance Services clicked")
  },
  {
    title: "Retirement Services",
    description: "Retirement is the withdrawal from one's position or occupation or from one's active working life. A person may also semi-retire by reducing work hours or workload.",
    iconImage: "/lovable-uploads/c9dff7e1-e14b-4975-8edd-173ba5da5861.png",
    onClick: () => console.log("Retirement Services clicked")
  },
  {
    title: "Real Estate Services",
    description: "Real estate is the land along with any permanent improvements attached to the land, including water, trees, minerals, buildings, homes, fences, and bridges.",
    iconImage: "/lovable-uploads/b16b104e-e0f7-48ca-a8a1-dffc5ece1bee.png",
    onClick: () => console.log("Real Estate Services clicked")
  },
  {
    title: "Loan Services",
    description: "In finance, a loan is the lending of money by one or more individuals, organizations, or other entities to other individuals, organizations etc.",
    iconImage: "/lovable-uploads/6cdb01f9-a545-45b6-9e99-d13687211dfe.png",
    onClick: () => console.log("Loan Services clicked")
  }
];

const WealthSuraksha = () => {
  return (
    <section className="container px-4 py-24 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-normal mb-6 tracking-tight">
          Wealth Suraksha
          <br />
          <span className="text-gradient font-medium">Services</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Comprehensive financial services designed to protect and grow your wealth with professional guidance and expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card 
              className="h-full bg-black/40 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer hover:scale-105 transform"
              onClick={service.onClick}
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img 
                      src={service.iconImage} 
                      alt={`${service.title} icon`} 
                      className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WealthSuraksha;