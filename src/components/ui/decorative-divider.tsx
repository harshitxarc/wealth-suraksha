import { motion } from "framer-motion";

interface DecorativeDividerProps {
  className?: string;
}

export const DecorativeDivider = ({ className = "" }: DecorativeDividerProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`flex items-center justify-center my-6 ${className}`}
    >
      <div className="flex items-center w-64">
        {/* Left decorative line */}
        <div className="flex-1 flex items-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-primary/60"></div>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-1 h-1 bg-primary/60 rounded-full mx-2"
          ></motion.div>
        </div>
        
        {/* Center ornamental design */}
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "backOut" }}
          className="flex items-center justify-center px-6"
        >
          <div className="relative flex items-center">
            {/* Outer diamond */}
            <div className="w-3 h-3 rotate-45 border border-primary/40 bg-gradient-to-br from-primary/10 to-primary/30 absolute"></div>
            {/* Inner diamond */}
            <div className="w-2 h-2 rotate-45 bg-primary/80 relative z-10"></div>
            {/* Side ornaments */}
            <div className="absolute -left-4 w-2 h-px bg-primary/60"></div>
            <div className="absolute -right-4 w-2 h-px bg-primary/60"></div>
            {/* Tiny accent dots */}
            <div className="absolute -left-6 w-0.5 h-0.5 bg-primary/40 rounded-full"></div>
            <div className="absolute -right-6 w-0.5 h-0.5 bg-primary/40 rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Right decorative line */}
        <div className="flex-1 flex items-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-1 h-1 bg-primary/60 rounded-full mx-2"
          ></motion.div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/20 to-primary/60"></div>
        </div>
      </div>
    </motion.div>
  );
};