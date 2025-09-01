import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "info@wealthsuraksha.com",
      available: "24/7"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Instant support for urgent matters",
      contact: "Available in app",
      available: "24/7"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "0124-4975700, 9582250626",
      available: "Mon-Fri 9AM-6PM PST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Location",
      description: "Visit our Office",
      contact: "PSQ-C1-F04-011, Emaar-The Palm Square, Sector-66, Golf Course Extension Road, Gurgaon, Haryana-1220101",
      available: "Mon-Fri 9AM-5PM PST"
    }
  ];

  const offices = [
    {
      city: "Gurgaon",
      address: "PSQ-C1-F04-011, Emaar-The Palm Square, Sector-66, Golf Course Extension Road",
      phone: "9582250626",
      email: "info@wealthsuraksha.com"
    },
    {
      city: "New York",
      address: "456 Wall Street, New York, NY 10005",
      phone: "+1 (555) 987-6543",
      email: "ny@cryptotrade.com"
    },
    {
      city: "London",
      address: "789 Financial District, London EC2V 8RS, UK",
      phone: "+44 20 7946 0958",
      email: "london@cryptotrade.com"
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
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have questions about crypto trading? Our team of experts is here to help you succeed
          </p>
        </div>
      </motion.section>

      {/* Contact Methods */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary mb-4 flex justify-center">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
              <p className="text-sm font-medium mb-2">{method.contact}</p>
              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {method.available}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-primary/50 focus:outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-primary/50 focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-primary/50 focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-primary/50 focus:outline-none">
                  <option>Trading Support</option>
                  <option>Account Issues</option>
                  <option>Technical Problems</option>
                  <option>Partnership Inquiry</option>
                  <option>General Question</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 focus:border-primary/50 focus:outline-none resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full button-gradient py-3 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
            {offices.map((office, index) => (
              <div key={index} className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Quick answers to common questions about our platform
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "How do I get started with trading?",
              answer: "Simply create an account, verify your identity, fund your account, and start trading. Our platform guides you through each step."
            },
            {
              question: "What are your trading fees?",
              answer: "We offer competitive trading fees starting from 0.1% for makers and 0.2% for takers, with volume discounts available."
            },
            {
              question: "Is my money safe on your platform?",
              answer: "Yes, we use bank-grade security, cold storage for funds, and are insured against cyber attacks and theft."
            },
            {
              question: "Do you offer customer support?",
              answer: "We provide 24/7 customer support via live chat, email, and phone for all our users."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground text-sm">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;