import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I get started with Wealth Suraksha?",
      answer: "Getting started is simple! Create your account, complete the verification process, deposit funds, and you're ready to trade. Our onboarding process typically takes less than 10 minutes."
    },
    {
      question: "What cryptocurrencies can I trade?",
      answer: "We support over 150 cryptocurrencies including Bitcoin, Ethereum, and all major altcoins. We regularly add new tokens based on market demand and our strict security criteria."
    },
    {
      question: "Is my money safe on Wealth Suraksha?",
      answer: "Absolutely. We use bank-grade security with 95% of funds stored in cold storage, multi-signature wallets, and comprehensive insurance coverage. Your security is our top priority."
    },
    {
      question: "What are your investing fees?",
      answer: "Our fees are competitive and transparent. Standard investing fees start at 0.1% and decrease with higher investing volumes. We offer three pricing tiers with additional benefits for higher-volume traders."
    },
    {
      question: "How long do withdrawals take?",
      answer: "Cryptocurrency withdrawals typically process within 15 minutes. Bank transfers usually take 1-3 business days depending on your location and payment method."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! We provide 24/7 customer support through live chat, email, and phone. Our support team consists of crypto experts ready to help with any questions or issues."
    },
    {
      question: "Can I use Wealth Suraksha on mobile?",
      answer: "Absolutely! Our platform is fully responsive and works seamlessly on all devices. We also offer dedicated mobile apps for iOS and Android with all the features of our web platform."
    },
    {
      question: "Is Wealth Suraksha regulated?",
      answer: "Yes, we operate under strict regulatory compliance in multiple jurisdictions. We hold licenses and registrations where required and follow all applicable financial regulations."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about investing, security, and using our platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-xl border-border/50 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;