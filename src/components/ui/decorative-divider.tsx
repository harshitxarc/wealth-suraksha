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
  className={`flex items-center justify-start my-6 ${className}`}
    >
  <div className="flex items-center w-64">
        {/* Left decorative line */}
        <div className="flex-1 flex items-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#2e3060]/40 to-primary"></div>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-1 h-1" style={{ background: 'linear-gradient(90deg, #2e3060 60%, #4ADE80 100%)', borderRadius: '9999px', marginLeft: '0.5rem', marginRight: '0.5rem' }}
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
            <div className="w-3 h-3 rotate-45 border" style={{ borderColor: '#2e3060', background: 'linear-gradient(135deg, #2e3060 10%, #4ADE80 90%)' }}></div>
            {/* Inner diamond */}
            <div className="w-2 h-2 rotate-45 relative z-10" style={{ background: 'linear-gradient(135deg, #4ADE80 0%, #2e3060 100%)' }}></div>
            {/* Side ornaments */}
            <div className="absolute -left-4 w-2 h-px" style={{ background: 'linear-gradient(90deg, #2e3060 60%, #4ADE80 100%)' }}></div>
            <div className="absolute -right-4 w-2 h-px" style={{ background: 'linear-gradient(90deg, #2e3060 60%, #4ADE80 100%)' }}></div>
            {/* Tiny accent dots */}
            <div className="absolute -left-6 w-0.5 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #2e3060 60%, #4ADE80 100%)' }}></div>
            <div className="absolute -right-6 w-0.5 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #2e3060 60%, #4ADE80 100%)' }}></div>
          </div>
        </motion.div>
        
        {/* Right decorative line */}
        <div className="flex-1 flex items-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-1 h-1" style={{ background: 'linear-gradient(90deg, #2e3060 60%, #4ADE80 100%)', borderRadius: '9999px', marginLeft: '0.5rem', marginRight: '0.5rem' }}
          ></motion.div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#2e3060]/40 to-primary"></div>
        </div>
      </div>
    </motion.div>
  );
};