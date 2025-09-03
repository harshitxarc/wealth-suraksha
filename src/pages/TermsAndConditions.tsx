import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-24"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block p-2 rounded-lg bg-primary/10 mb-6"
            >
              <div className="text-primary text-sm font-medium px-3 py-1">Legal Document</div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6"
            >
              Terms & Conditions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Please read these terms carefully before using our services. Your use of our platform constitutes acceptance of these terms.
            </motion.p>
          </motion.div>

          {/* Content Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass rounded-2xl border border-border/50 p-8 md:p-12 shadow-2xl shadow-primary/5"
          >
            {/* Introduction */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-primary/5 rounded-xl p-6 mb-8 border border-primary/10"
            >
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Wealth Suraksha IMF LLP</span> is a wealth management platform dedicated to providing personalized financial solutions. By accessing this website and using our services, you agree to comply with and be bound by the following terms and conditions of use.
              </p>
            </motion.div>

            <div className="space-y-10">
              {[
                { number: 1, title: "Acceptance of Terms", content: "By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions, as well as our Privacy Policy.", bgColor: "bg-primary/10", textColor: "text-primary" },
                { 
                  number: 2, 
                  title: "Services Offered", 
                  content: "We offer a range of financial product distribution and tax consulting services.", 
                  bgColor: "bg-primary/10", 
                  textColor: "text-primary",
                  hasServices: true
                },
                { number: 3, title: "Client Responsibilities", content: "You agree to provide accurate and complete information when using our services. Additionally, you acknowledge that all investment decisions are your responsibility. Consequently, Wealth Suraksha IMF LLP is not liable for the performance of any investments made on your behalf.", bgColor: "bg-primary/10", textColor: "text-primary" },
                { number: 4, title: "Investment Risks", content: "Please note that investing in financial markets involves various risks, including the potential loss of principal. Importantly, past performance is not indicative of future results.", bgColor: "bg-destructive/10", textColor: "text-destructive", isRisk: true },
                { number: 5, title: "Confidentiality", content: "We respect your privacy and handle your personal and financial information in accordance with our Privacy Policy.", bgColor: "bg-primary/10", textColor: "text-primary" },
                { number: 6, title: "Intellectual Property", content: "All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Wealth Suraksha IMF LLP and is protected by intellectual property laws.", bgColor: "bg-primary/10", textColor: "text-primary" },
                { number: 7, title: "Limitation of Liability", content: "To the fullest extent permitted by law, Wealth Suraksha IMF LLP shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of our website or services.", bgColor: "bg-primary/10", textColor: "text-primary" },
                { number: 8, title: "Termination", content: "We reserve the right to terminate or suspend your access to our website or services at any time without prior notice, for any reason.", bgColor: "bg-primary/10", textColor: "text-primary" },
                { number: 9, title: "Governing Law", content: "These terms and conditions shall be governed by and construed in accordance with the laws of India. Consequently, any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Gurgaon, Haryana.", bgColor: "bg-primary/10", textColor: "text-primary" },
                { number: 10, title: "Changes to Terms", content: "Wealth Suraksha IMF LLP reserves the right to update or modify these terms and conditions at any time without prior notice. Therefore, we encourage you to review these terms periodically for any changes.", bgColor: "bg-primary/10", textColor: "text-primary" },
                { number: 11, title: "Contact Us", content: "If you have any questions about these terms and conditions, please contact us through email:", bgColor: "bg-primary/10", textColor: "text-primary", isContact: true }
              ].map((section, index) => (
                <motion.section
                  key={section.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-8 h-8 rounded-full ${section.bgColor} flex items-center justify-center`}>
                      <span className={`${section.textColor} font-bold text-sm`}>{section.number}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
                  </div>
                  
                  {section.hasServices ? (
                    <div className="ml-11 bg-muted/30 rounded-lg p-6 border border-border/30 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        We offer a range of financial product distribution and tax consulting services. Specifically, our services include, but are not limited to:
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-background/50 rounded-lg p-4 border border-border/20">
                          <div className="text-foreground font-medium">Financial Products</div>
                          <div className="text-sm text-muted-foreground">Distribution services</div>
                        </div>
                        <div className="bg-background/50 rounded-lg p-4 border border-border/20">
                          <div className="text-foreground font-medium">Tax Services</div>
                          <div className="text-sm text-muted-foreground">Preparation and planning</div>
                        </div>
                        <div className="bg-background/50 rounded-lg p-4 border border-border/20">
                          <div className="text-foreground font-medium">Consulting</div>
                          <div className="text-sm text-muted-foreground">Financial guidance</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Furthermore, our services are tailored based on the information you provide. We strive to offer personalized recommendations that align with your financial goals and risk tolerance.
                      </p>
                    </div>
                  ) : section.isRisk ? (
                    <div className="ml-11 bg-destructive/5 rounded-lg p-6 border border-destructive/20 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        While we offer general investment advice, we do not guarantee the success of any investment strategy or recommendation.
                      </p>
                    </div>
                  ) : section.isContact ? (
                    <div className="ml-11 bg-primary/5 rounded-lg p-6 border border-primary/20">
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content} 
                        <a href="mailto:info@wealthsuraksha.com" className="text-primary hover:text-primary/80 transition-colors underline ml-1 font-medium">
                          info@wealthsuraksha.com
                        </a>
                      </p>
                    </div>
                  ) : (
                    <div className="ml-11 bg-muted/30 rounded-lg p-6 border border-border/30">
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  )}
                </motion.section>
              ))}
            </div>

            {/* Footer note */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 }}
              className="mt-12 pt-8 border-t border-border/30"
            >
              <p className="text-center text-sm text-muted-foreground">
                Last updated: December 2024 • These terms are effective immediately upon posting
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;






// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import { motion } from "framer-motion";

// const TermsAndConditions = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
//       <Navigation />
//        <main className="container mx-auto px-4 py-24">
//         <div className="max-w-4xl mx-auto">
//       {/* Hero Section */}
//             <motion.section 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="relative container px-4 pt-40 pb-20"
//             >
//               <div className="text-center max-w-4xl mx-auto">
//                 <h1 className="text-5xl md:text-6xl font-bold mb-6">
//                   Terms & <span className="text-primary">Conditions</span>
//                 </h1>
//                 <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
//                   Please read these terms carefully before using our services
//                 </p>
//               </div>
//             </motion.section>
      
//       {/* <main className="container mx-auto px-4 py-24">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//               Terms & Conditions
//             </h1>
//             <p className="text-xl text-muted-foreground">
//               Please read these terms carefully before using our services
//             </p>
//           </div> */}

//           <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-8 md:p-12 space-y-8">
//             <div className="prose prose-lg max-w-none">
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 Wealth Suraksha IMF LLP is a wealth management platform dedicated to providing personalized financial solutions. By accessing this website and using our services, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our website.
//               </p>

//               <section className="mt-8">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   1.1. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions, as well as our Privacy Policy.
//                 </p>
//               </section>

//               <section className="mt-8">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Offered</h2>
//                 <div className="space-y-4 text-muted-foreground leading-relaxed">
//                   <p>
//                     2.1. We offer a range of financial product distribution and tax consulting services. Specifically, our services include, but are not limited to:
//                   </p>
//                   <ul className="list-disc list-inside ml-4 space-y-2">
//                     <li>Distribution of financial products</li>
//                     <li>Tax preparation and planning</li>
//                     <li>Financial consulting</li>
//                   </ul>
//                   <p>
//                     2.2. Furthermore, our services are tailored based on the information you provide. We strive to offer personalized recommendations that align with your financial goals and risk tolerance.
//                   </p>
//                 </div>
//               </section>

//               <section className="mt-8">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">3. Client Responsibilities</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   3.1. You agree to provide accurate and complete information when using our services. Additionally, you acknowledge that all investment decisions are your responsibility. Consequently, Wealth Suraksha IMF LLP is not liable for the performance of any investments made on your behalf.
//                 </p>
//               </section>

//               <section className="mt-8">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">4. Investment Risks</h2>
//                 <div className="space-y-4 text-muted-foreground leading-relaxed">
//                   <p>
//                     4.1. Please note that investing in financial markets involves various risks, including the potential loss of principal. Importantly, past performance is not indicative of future results.
//                   </p>
//                   <p>
//                     4.2. While we offer general investment advice, we do not guarantee the success of any investment strategy or recommendation.
//                   </p>
//                 </div>
//               </section>

//               <section className="mt-8">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">5. Confidentiality</h2>
//                 <div className="space-y-4 text-muted-foreground leading-relaxed">
//                   <p>
//                     5.1. We respect your privacy and handle your personal and financial information in accordance with our Privacy Policy.
//                   </p>
//                   <p>
//                     5.2. However, you agree that communications through our website or electronic means may not be secure, and you accept the associated risks.
//                   </p>
//                 </div>
//               </section>

//               <section className="mt-8">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
//                 <div className="space-y-4 text-muted-foreground leading-relaxed">
//                   <p>
//                     6.1. All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Wealth Suraksha IMF LLP and is protected by intellectual property laws.
//                   </p>
//                   <p>
//                     6.2. Therefore, you may not reproduce, distribute, or modify any content from this website without our prior written consent.
//                   </p>
//                 </div>
//               </section>

//               <section className="mt-8">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   7.1. To the fullest extent permitted by law, Wealth Suraksha IMF LLP shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your use of our website or services.
//                 </p>
//               </section>

//               <section className="mt-8">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   8.1. We reserve the right to terminate or suspend your access to our website or services at any time without prior notice, for any reason.
//                 </p>
//               </section>

//               <section className="mt-8">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   9.1. These terms and conditions shall be governed by and construed in accordance with the laws of India. Consequently, any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts located in Gurgaon, Haryana.
//                 </p>
//               </section>

//               <section className="mt-8">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   10.1. Wealth Suraksha IMF LLP reserves the right to update or modify these terms and conditions at any time without prior notice. Therefore, we encourage you to review these terms periodically for any changes.
//                 </p>
//               </section>

//               <section className="mt-8">
//                 <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   11.1. If you have any questions about these terms and conditions, please contact us through email: 
//                   <a href="mailto:info@wealthsuraksha.com" className="text-primary hover:underline ml-1">
//                     info@wealthsuraksha.com
//                   </a>
//                 </p>
//               </section>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default TermsAndConditions;