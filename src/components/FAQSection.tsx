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
      question: "What kind of clients does Wealth Suraksha serve?",
      answer: "We serve Resident and Non-Resident Indians (NRIs), SMEs, and Corporates with customized wealth management solutions."
    },
    {
      question: "What financial services do you provide?",
      answer: "We offer Investment, Tax, Insurance, Retirement, Will/Trust, Loan, and Real Estate services under one roof."
    },
    {
      question: "What types of investment products are available?",
      answer: "Our portfolio includes mutual funds, PMS, private equity, AIFs, real estate, insurance, bonds, and retirement schemes."
    },
    {
      question: "What is Portfolio Management Service (PMS)?",
      answer: "PMS is a personalized, professionally managed portfolio service ideal for high-net-worth clients seeking tailored strategies."
    },
    {
      question: "What tax-related services do you offer?",
      answer: "We help with PAN applications, tax planning, ITR filing, salary restructuring, and responding to income-tax notices."
    },
    {
      question: "What is included in Will and Trust Formation services?",
      answer: "We draft and register wills or trusts through expert attorneys to ensure smooth and secure estate planning."
    },
    {
      question: "How does Wealth Suraksha simplify investment management?",
      answer: "Clients get consolidated reports, capital gains statements, online transactions, calculators, and timely reminders."
    },
    {
      question: "Who are the founders of Wealth Suraksha?",
      answer: "Gaurav Verma and Nidhi Jindal, both with decades of finance experience, lead the firm with expertise and trust."
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