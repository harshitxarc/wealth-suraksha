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
              <h4 className="font-semibold text-lg mb-2 border-b border-white/10 pb-1">Pages</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h4 className="font-semibold text-lg mb-2 border-b border-white/10 pb-1">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/services#investment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Investment Services
                  </Link>
                </li>
                <li>
                  <Link to="/services#tax" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Tax Services
                  </Link>
                </li>
                <li>
                  <Link to="/services#retirement" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Retirement Services
                  </Link>
                </li>
                <li>
                  <Link to="/services#estate" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Estate Planning
                  </Link>
                </li>
                <li>
                  <Link to="/services#insurance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Insurance Solutions
                  </Link>
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