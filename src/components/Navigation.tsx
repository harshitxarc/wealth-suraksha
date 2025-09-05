import { useState, useEffect } from "react";
import { Command, Menu, ChevronDown} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
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

  const products = [
    { name: "Mutual Funds", path: "/products/mutual-funds" },
    { name: "PMS", path: "/products/pms" },
    { name: "Private Equity", path: "/products/private-equity" },
    { name: "Alternate Investment Fund", path: "/products/aif" },
    { name: "Debt Structure Products", path: "/products/debt-structure" },
    { name: "Real Estate", path: "/products/real-estate" },
    { name: "Insurance", path: "/products/insurance" },
    { name: "Corporate Fixed Deposits", path: "/products/fixed-deposits" },
    { name: "Bonds", path: "/products/bonds" },
    { name: "Debentures", path: "/products/debentures" },
    { name: "Loans", path: "/products/loans" },
    { name: "Retirement Schemes", path: "/products/retirement-schemes" }
  ];

  const services = [
    { name: "Investment Services", path: "/services/investment-services" },
    { name: "Tax Services", path: "/services/tax-services" },
    { name: "Retirement Services", path: "/services/retirement-services" },
    { name: "Insurance Services", path: "/services/insurance-services" },
    { name: "Will / Trust Formation Services", path: "/services/will-trust-services" },
    { name: "Loan Services", path: "/services/loan-services" },
    { name: "Real Estate Services", path: "/services/real-estate-services" }
  ];

  const navItems = [
    { name: "Home", href: "/", type: "link" },
    { name: "Services", href: "/services", type: "link" },
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
            {/* Home link */}
            <Link
              key="Home"
              to="/"
              className={`text-sm transition-all duration-300 ${location.pathname === "/" ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Home
            </Link>
            {/* Services link */}
            <Link
              key="Services"
              to="/services"
              className={`text-sm transition-all duration-300 ${location.pathname === "/services" ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Services
            </Link>
            {/* Our Products, Services dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* <div className="flex flex-col gap-1 p-3 w-56 bg-popover border border-border rounded-md shadow-lg"> */}
                    <div className="flex flex-col gap-1 p-3 w-48 bg-popover border border-border rounded-md shadow-lg">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    Our Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col gap-1 p-3 w-56 bg-popover border border-border rounded-md shadow-lg">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          to={product.path}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/* Blog link */}
            <Link
              key="Blog"
              to="/blog"
              className={`text-sm transition-all duration-300 ${location.pathname === "/blog" ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Blog
            </Link>
            {/* Terms link */}
            <Link
              key="Terms"
              to="/terms"
              className={`text-sm transition-all duration-300 ${location.pathname === "/terms" ? "text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Terms
            </Link>
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

              <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg text-muted-foreground hover:text-foreground transition-colors">
                      Services
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 ml-4 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
              
              <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg text-muted-foreground hover:text-foreground transition-colors">
                      Our Products
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 ml-4 space-y-2">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          to={product.path}
                          className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

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