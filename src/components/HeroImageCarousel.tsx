import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroImageCarousel = () => {
  const images = [
    "/img-uploads/quality.png",
    "/img-uploads/destination.png",
    "/img-uploads/freedom.png",
    "/img-uploads/create.png",
    "/img-uploads/quality.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    // Resume auto-play after manual interaction
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    // Resume auto-play after manual interaction
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    // Resume auto-play after manual interaction
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
  // <div className="relative mx-auto max-w-7xl w-full mt-20">
  <div className="relative w-full mt-20">
  {/* Background Glow Effect Removed for Simplicity */}
      
      <div className="relative perspective-1000">
        {/* <div className="glass rounded-2xl overflow-hidden relative group shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-500"> */}
  <div className="glass overflow-hidden relative group shadow-2xl transition-all duration-500">
          {/* Main Image Container with 3D effect */}
          <div className="relative w-full h-[350px] overflow-hidden flex items-center justify-center bg-black/80">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                className="absolute inset-0 w-full h-full"
                initial={{ 
                  x: "100%",
                  opacity: 0
                }}
                animate={{ 
                  x: "0%",
                  opacity: 1
                }}
                exit={{ 
                  x: "-100%",
                  opacity: 0
                }}
                transition={{ 
                  duration: 1, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
              >
                <img
                  src={images[currentIndex]}
                  alt={`CryptoTrade Dashboard ${currentIndex + 1}`}
                  className="w-full h-full max-h-[480px] object-contain shadow-md bg-black/70"
                  style={{ objectFit: 'contain', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation Arrows */}
          <div className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 opacity-60 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              variant="outline"
              size="icon"
              className="bg-black/40 border-white/40 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-md shadow-lg hover:shadow-white/20 transition-all duration-300 h-8 w-8 md:h-10 md:w-10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 opacity-60 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              variant="outline"
              size="icon"
              className="bg-black/40 border-white/40 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-md shadow-lg hover:shadow-white/20 transition-all duration-300 h-8 w-8 md:h-10 md:w-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default HeroImageCarousel;