import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="glass rounded-2xl p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-normal mb-4">
              Stay Updated
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest market insights, trading tips, and platform updates delivered directly to your inbox. 
              Join over 100,000 traders who rely on our newsletter.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-background/50 border-border/50 focus:border-primary"
              />
              <Button className="button-gradient whitespace-nowrap">
                Subscribe
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;