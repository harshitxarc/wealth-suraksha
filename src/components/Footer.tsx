import { Github, Twitter, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-16 mt-24 bg-[#101010] border-t border-white/10">
      <div className="container px-4">
        <div className="glass glass-hover rounded-2xl p-10 md:p-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            <div className="space-y-5 flex flex-col h-full justify-between">
              <div>
                <h3 className="font-bold text-2xl mb-2 tracking-tight text-gradient">Wealth Suraksha</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  At Wealth Suraksha LLP, we believe true wealth is not just about accumulating assets—it’s about creating a legacy that lasts. With the right vision, expert guidance, and a client-focused approach, we help you grow, protect, and pass on your wealth with confidence.
                </p>
                <p className="text-sm text-muted-foreground">
                  Founded in 2019 and registered under the LLP Act, 2008, Wealth Suraksha LLP is an independent financial services firm offering tailored wealth management solutions for Individuals (Residents & NRIs), SMEs, and Corporates.
                </p>
              </div>
              <div className="flex space-x-3 pt-2">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" aria-label="Github">
                  <Github className="w-5 h-5" />
                </Button>
                <a
                  href="https://instagram.com/wealth_suraksha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex"
                >
                  <Button variant="ghost" size="icon">
                    <Instagram className="w-5 h-5"/>
                  </Button>
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <h4 className="font-semibold text-lg mb-2 border-b border-white/10 pb-1">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/investment-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Investment Services</Link>
                </li>
                <li>
                  <Link to="/services/tax-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tax Services</Link>
                </li>
                <li>
                  <Link to="/services/retirement-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Retirement Services</Link>
                </li>
                <li>
                  <Link to="/services/insurance-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Insurance Services</Link>
                </li>
                <li>
                  <Link to="/services/will-trust-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Will / Trust Formation Services</Link>
                </li>
                <li>
                  <Link to="/services/loan-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Loan Services</Link>
                </li>
                <li>
                  <Link to="/services/real-estate-services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Real Estate Services</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="font-semibold text-lg mb-2 border-b border-white/10 pb-1">Important Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="font-semibold text-lg mb-2 border-b border-white/10 pb-1">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Wealth Suraksha. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <span className="text-xs text-muted-foreground">|</span>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;