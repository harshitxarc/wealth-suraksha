import { useState, useEffect } from "react";
import { Command, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'testimonials') {
      const testimonialSection = document.querySelector('.animate-marquee');
      if (testimonialSection) {
        const yOffset = -100; // Offset to account for the fixed header
        const y = testimonialSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else if (sectionId === 'cta') {
      const ctaSection = document.querySelector('.button-gradient');
      if (ctaSection) {
        const yOffset = -100;
        const y = ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: "Home", href: "/", type: "link" },
    { name: "Services", href: "/services", type: "link" },
    { name: "Products", href: "/products", type: "link" },
    { name: "Blog", href: "/blog", type: "link" },
    { name: "Terms", href: "/terms", type: "link" }
  ];

  return (
    <header
      // className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          // ? "h-14 bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl" 
          // : "h-14 bg-[#1B1B1B] w-[95%] max-w-3xl"
          ? "h-20 bg-card/95 backdrop-blur-xl border-b border-border" 
          : "h-28 bg-card border-b border-border"
      }`}
    >
      {/* <div className="mx-auto h-full px-6"> */}
      <div className="container mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-3">
            {/* <Command className="w-5 h-5 text-primary" /> */}
            <img src="/img-uploads/ws-logo.png" alt="Wealth Suraksha Logo" className="w-20 h-20 mr-4 rounded-full object-contain shadow align-middle" />
            <span className="font-bold text-2xl">
              Wealth<span style={{ color: '#4ADE80' }}>Suraksha</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm transition-all duration-300 ${location.pathname === item.href ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button 
                size="sm"
                className="button-gradient"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#1B1B1B]">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-lg transition-colors ${location.pathname === item.href ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link to="/contact">
                    <Button 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="button-gradient mt-4"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;