import { Github, Twitter, Instagram, MapPin, Phone, Mail, MessageCircle} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-16 mt-24 bg-background border-t border-white/10">
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

            {/* <div className="space-y-5">
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
            </div> */}
            <div className="space-y-5">
              <h4 className="font-semibold text-lg mb-2 border-b border-white/10 pb-1">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium mb-1">Address:</p>
                    <div 
                      className="hover:text-primary cursor-pointer transition-colors"
                      onClick={() => window.open('https://maps.google.com/maps?q=28.409,77.067', '_blank')}
                    >
                      <p>PSQ-C1-F04-011, Emaar-The Palm</p>
                      <p>Square, Sector-66, Golf Course</p>
                      <p>Extension Road, Gurgaon,</p>
                      <p>Haryana-122102</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium mb-1">Phone:</p>
                    <p>0124-4975700, 9582250626</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium mb-1">Email:</p>
                    <p>info@wealthsuraksha.com</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 bg-[#25d366] hover:bg-[#20ba5a] border-[#25d366] text-white rounded-full px-4 py-3 flex items-center justify-center space-x-2"
                  onClick={() => window.open('https://wa.me/919582250626', '_blank')}
                >
                    <svg 
                      viewBox="0 0 24 24" 
                      className="h-8 w-8" 
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z"/>
                    </svg>
                  <div className="text-left">
                    <div className="text-xs font-medium">Wealth Suraksha Online</div>
                    <div className="text-xs text-background">Need help? Chat via WhatsApp</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Wealth Suraksha. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <span className="text-xs text-muted-foreground">|</span>
                <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;