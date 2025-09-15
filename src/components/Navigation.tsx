import { useState, useEffect } from "react";
import { TextRoll } from "./Skiper58";
import { Command, Menu, ChevronDown} from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
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
  const [topBarVisible, setTopBarVisible] = useState(true);
  const location = useLocation();

  // Listen for TopBar visibility changes
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handler = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down, navbar should overlap TopBar
        setTopBarVisible(false);
      } else {
        // Scrolling up, navbar should leave space for TopBar
        setTopBarVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
    { name: "About Us", href: "/about", type: "link" },
    { name: "Blog", href: "/blog", type: "link" },
    { name: "Terms", href: "/terms", type: "link" }
  ];

  // Expose navbar height and top offset for page padding
  const navHeight = isScrolled ? 80 : 112; // h-20 = 80px, h-28 = 112px
  const navTop = topBarVisible ? 32 : 0; // top-8 = 32px
  window.__NAVBAR_HEIGHT__ = navHeight + navTop;
  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300
        ${topBarVisible ? 'top-8' : 'top-0'}
        ${isScrolled
          ? "h-20 bg-card/95 backdrop-blur-md border-b border-border"
          : "h-28 bg-card/90 backdrop-blur-sm border-b border-border"}
      `}
    >
      {/* <div className="mx-auto h-full px-6"> */}
      <div className="container mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          {/* Logo & Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-2 flex-shrink-0"
          >
            {/* <Command className="w-5 h-5 text-primary" /> */}
            <img 
              src="/img-uploads/ws-logo.png" 
              alt="Wealth Suraksha Logo" 
              className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full object-contain" 
            />
            <span className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-200 whitespace-nowrap">
              Wealth
              <span className="bg-gradient-to-r from-primary to-green-400 dark:from-green-300 dark:to-primary bg-clip-text text-transparent">
                Suraksha
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Home link */}
            <Link
              key="Home"
              to="/"
              className={`group text-sm font-semibold transition-all duration-300 ${location.pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <TextRoll className="inline-block group-hover:text-[#005985] dark:group-hover:text-primary">Home</TextRoll>
            </Link>
            {/* About Us link */}
            <Link
              key="About Us"
              to="/about"
              className={`group text-sm font-semibold transition-all duration-300 ${location.pathname === "/about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <TextRoll className="inline-block group-hover:text-[#005985] dark:group-hover:text-primary">About Us</TextRoll>
            </Link>
            {/* Services link removed, dropdown remains */}
            {/* Our Products, Services dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group text-sm text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    <TextRoll className="inline-block font-semibold group-hover:text-[#005985] dark:group-hover:text-primary">Services</TextRoll>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {/* <div className="flex flex-col gap-1 p-3 w-56 bg-popover border border-border rounded-md shadow-lg"> */}
                    <div className="flex flex-col gap-1 p-3 w-48 bg-popover border border-border rounded-md shadow-lg">
                      {services.map((service) => {
                        const isActive = location.pathname.toLowerCase() === service.path.toLowerCase();
                        return (
                          <Link
                            key={service.name}
                            to={service.path}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors ${isActive ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                          >
                            {service.name}
                          </Link>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group text-sm text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    <TextRoll className="inline-block font-semibold group-hover:text-[#005985] dark:group-hover:text-primary">Our Products</TextRoll>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col gap-1 p-3 w-56 bg-popover border border-border rounded-md shadow-lg">
                      {products.map((product) => {
                        const isActive = location.pathname.toLowerCase() === product.path.toLowerCase();
                        return (
                          <Link
                            key={product.name}
                            to={product.path}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors ${isActive ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                          >
                            {product.name}
                          </Link>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/* Blog link */}
            <Link
              key="Blog"
              to="/blog"
              className={`group text-sm font-semibold transition-all duration-300 ${location.pathname === "/blog" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <TextRoll className="inline-block group-hover:text-[#005985] dark:group-hover:text-primary">Blog</TextRoll>
            </Link>
            {/* Terms link */}
            <Link
              key="Terms"
              to="/terms"
              className={`group text-sm font-semibold transition-all duration-300 ${location.pathname === "/terms" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <TextRoll className="inline-block group-hover:text-[#005985] dark:group-hover:text-primary">Terms</TextRoll>
            </Link>
            <ThemeToggle />
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-[#005985]/80 dark:bg-primary/80 text-white hover:bg-[#005985]/90 dark:hover:bg-primary/90 focus:ring-2 focus:ring-primary/40 rounded-full transition-colors backdrop-blur-xl border border-[#005985]/30 dark:border-primary/30 shadow-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background border-border">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigate site sections and pages using the mobile menu.</SheetDescription>
                <div className="flex flex-col gap-4 mt-8">
                  {/* Home link */}
                  <Link
                    key="Home"
                    to="/"
                    className={`text-lg transition-colors ${location.pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  >
                    Home
                  </Link>
                  {/* About Us link */}
                  <Link
                    key="About Us"
                    to="/about"
                    className={`text-lg transition-colors ${location.pathname === "/about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  >
                    About Us
                  </Link>
                  {/* Services Dropdown remains */}
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg text-muted-foreground hover:text-foreground transition-colors">
                      Services
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 ml-4 space-y-2">
                      {services.map((service) => {
                        const isActive = location.pathname.toLowerCase() === service.path.toLowerCase();
                        return (
                          <Link
                            key={service.name}
                            to={service.path}
                            className={`block py-2 text-sm rounded-md transition-colors ${isActive ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                            onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          >
                            {service.name}
                          </Link>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>
                  {/* Our Products Dropdown */}
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-lg text-muted-foreground hover:text-foreground transition-colors">
                      Our Products
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 ml-4 space-y-2">
                      {products.map((product) => {
                        const isActive = location.pathname.toLowerCase() === product.path.toLowerCase();
                        return (
                          <Link
                            key={product.name}
                            to={product.path}
                            className={`block py-2 text-sm rounded-md transition-colors ${isActive ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                            onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                          >
                            {product.name}
                          </Link>
                        );
                      })}
                    </CollapsibleContent>
                  </Collapsible>
                  {/* Blog link */}
                  <Link
                    key="Blog"
                    to="/blog"
                    className={`text-lg transition-colors ${location.pathname === "/blog" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  >
                    Blog
                  </Link>
                  {/* Terms link */}
                  <Link
                    key="Terms"
                    to="/terms"
                    className={`text-lg transition-colors ${location.pathname === "/terms" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                    onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  >
                    Terms
                  </Link>
                  <Link to="/contact">
                    <Button 
                      onClick={() => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="bg-primary text-white hover:bg-primary/70 mt-4 rounded-full transition-colors"
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