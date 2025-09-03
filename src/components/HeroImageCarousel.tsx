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
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-blue-500/20 blur-3xl opacity-30 -z-10" />
      
      <div className="relative perspective-1000">
        {/* <div className="glass rounded-2xl overflow-hidden relative group shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-500"> */}
        <div className="glass rounded-none md:rounded-2xl overflow-hidden relative group shadow-2xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-500">
          {/* Main Image Container with 3D effect */}
          <div className="relative w-full h-[350px] overflow-hidden flex items-center justify-center bg-black/80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative w-full h-full"
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
                  duration: 0.8, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
              >
                <img
                  src={images[currentIndex]}
                  alt={`CryptoTrade Dashboard ${currentIndex + 1}`}
                  className="w-full h-full max-h-[480px] object-contain rounded-lg shadow-md bg-black/70"
                  style={{ objectFit: 'contain', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation Arrows */}
          <motion.div
            className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="bg-black/30 border-white/30 text-white hover:bg-primary/80 hover:border-primary/80 backdrop-blur-md shadow-lg hover:shadow-primary/50 transition-all duration-300"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="bg-black/30 border-white/30 text-white hover:bg-primary/80 hover:border-primary/80 backdrop-blur-md shadow-lg hover:shadow-primary/50 transition-all duration-300"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
};

export default HeroImageCarousel;