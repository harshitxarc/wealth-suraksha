import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 transition-transform duration-300 ${
        isVisible ? "z-[100] translate-y-0" : "z-0 -translate-y-full"
      }`}
    >
  <div className="bg-[#005985] border-b border-[#005985]/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-8">
            {/* Left side - Auth buttons */}
            <div className="flex items-center gap-2">
              <Link to="/signup">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-white hover:bg-white/20 text-xs font-medium px-3 h-6"
                >
                  Sign Up
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white hover:bg-white/20 text-xs font-medium px-3 h-6"
                onClick={() => window.location.href = "https://wealthelite.in/client-login"}
              >
                Sign In
              </Button>
            </div>
            
            {/* Right side - Social icons */}
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white hover:text-white/80 transition-colors p-1 rounded hover:bg-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;