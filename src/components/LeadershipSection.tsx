import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const teamMembers = [
  {
    name: "Gaurav Verma",
    title: "Co-Founder",
    subtitle: "Wealth & Investment Strategist",
    experience: "25+ Years of Experience",
    description: "Gaurav Verma brings over 25 years of diverse experience in the banking, NBFC, and wealth management sectors, making him a well-rounded expert in designing and executing investment strategies for HNIs, Ultra HNIs, and corporate clients.",
    fullBio: [
      "Having worked with leading financial institutions such as HDFC Bank, Deutsche Bank, Bajaj Capital, and Karvy Private Wealth, Gaurav possesses a deep understanding of the full spectrum of financial products - including equity, debt, structured products, insurance, and alternative investments.",
      "His early career in retail and corporate banking provided him with a strong foundation in credit, lending, and risk management - skills that are critical in understanding client needs and building robust, goal-aligned portfolios. Transitioning into the NBFC and wealth advisory space, he honed his ability to deliver customized investment solutions, combining technical expertise with a client-first approach.",
      "Senior Vice President, Karvy Private Wealth - Spearheaded the setup and growth of a profitable wealth management unit over a decade, leading advisory for HNI and Ultra HNI clients across geographies."
    ]
  },
  {
    name: "Nidhi Jindal",
    title: "Co-Founder",
    subtitle: "Certified Financial Planner (CFP)",
    experience: "15+ Years of Experience",
    description: "Nidhi Jindal is a seasoned financial planning professional with over 15 years of experience in personal finance, investment advisory, and operations management. An MBA in Marketing and a Certified Financial Planner (CFP), she brings a strong blend of analytical expertise, client engagement, and process-driven execution.",
    fullBio: [
      "Coming from a Chartered Accountant family, Nidhi has an innate understanding of financial structures, compliance, and taxation, which enhances her ability to deliver comprehensive and tax-efficient wealth strategies. Her work as an independent financial advisor has helped numerous clients across income brackets organize their financial lives with clarity and confidence.",
      "Her strength lies in creating structured financial roadmaps - from budgeting and goal planning to investment selection and risk management. Her sharp focus on operational efficiency ensures seamless client servicing and regulatory adherence.",
      "Holistic financial planning for individuals and families, retirement, insurance, and tax-efficient investment strategies, operational oversight and compliance in financial services."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const LeadershipSection = () => {
  return (
    <section className="relative container px-4 py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 rounded-full glass"
          >
            <span className="text-sm font-medium text-primary">
              Executive Leadership
            </span>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">
            Our Leadership{" "}
            <span className="text-gradient font-medium">Team</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Meet the visionary leaders driving innovation and excellence in 
            <span className="text-white font-medium"> financial services</span>
          </motion.p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-12"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div
                variants={cardHoverVariants}
                className="group cursor-pointer"
              >
                <Card className="glass h-full border-2 border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden relative">
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 p-10">
                    {/* Member Header */}
                    <motion.div 
                      className="space-y-6 mb-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {/* Avatar Placeholder */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </h3>
                        
                        <div className="space-y-2">
                          <div className="text-xl font-semibold text-gradient">
                            {member.title}
                          </div>
                          <div className="text-lg text-gray-300">
                            {member.subtitle}
                          </div>
                        </div>
                        
                        <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
                          {member.experience}
                        </Badge>
                      </div>
                    </motion.div>

                    <Separator className="bg-white/10 mb-8" />

                    {/* Description */}
                    <motion.p 
                      className="text-gray-300 leading-relaxed text-lg mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {member.description}
                    </motion.p>

                    {/* Key Achievements */}
                    <motion.div 
                      className="space-y-6 mb-8"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold text-white mb-4">Key Achievements & Experience</h4>
                      {member.fullBio.map((point, pointIndex) => (
                        <motion.div
                          key={pointIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * pointIndex + 0.5 }}
                          className="relative pl-8 group/item"
                        >
                          <motion.div 
                            className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary/60 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300"
                            whileHover={{ scale: 1.3, backgroundColor: "hsl(var(--primary))" }}
                          />
                          <div className="absolute left-1 top-3 w-1 h-1 rounded-full bg-white/80" />
                          <p className="text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors duration-300">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>

                    <Separator className="bg-white/10 mb-6" />

                    {/* Expertise Tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h4 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Core Expertise</h4>
                      <div className="flex flex-wrap gap-3">
                        {member.name === "Gaurav Verma" ? (
                          <>
                            <motion.span 
                              className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Investment Strategy
                            </motion.span>
                            <motion.span 
                              className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Wealth Management
                            </motion.span>
                            <motion.span 
                              className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Corporate Banking
                            </motion.span>
                          </>
                        ) : (
                          <>
                            <motion.span 
                              className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Financial Planning
                            </motion.span>
                            <motion.span 
                              className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Tax Strategy
                            </motion.span>
                            <motion.span 
                              className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Compliance
                            </motion.span>
                          </>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              Ready to work with our experienced leadership team?{" "}
              {/* <span className="text-gradient font-medium">Get in touch</span> to learn more about our services. */}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;