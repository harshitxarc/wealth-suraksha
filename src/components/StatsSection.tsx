import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      number: "$2.4B+",
      label: "investing Volume",
      description: "Daily investing volume across all markets"
    },
    {
      number: "500K+",
      label: "Active Investors",
      description: "Global community of verified traders"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable platform performance"
    },
    {
      number: "150+",
      label: "Cryptocurrencies",
      description: "Available investing pairs"
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
            Trusted by Millions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform has facilitated billions in trades and serves a global community of crypto enthusiasts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 glass rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-medium mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;