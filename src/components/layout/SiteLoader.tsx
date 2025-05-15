import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SiteLoaderProps {
  onLoadingComplete: () => void;
}

const SiteLoader: React.FC<SiteLoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 15;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500); // Delay completion for animation
          return 100;
        }
        
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary">
      <div className="relative h-48 w-48">
        <motion.div
          className="absolute inset-0"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          <div className="h-full w-full rounded-full border-4 border-violet-500 opacity-30" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ 
            rotate: -360,
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          <div className="h-4 w-4 rounded-full bg-violet-600" />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-36 w-36 rounded-full border-4 border-violet-400 opacity-50" />
        </div>
      </div>
      
      <div className="mt-8 w-64">
        <div className="h-2 w-full rounded-full bg-gray-700">
          <motion.div 
            className="h-full rounded-full bg-violet-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
        <div className="mt-2 text-center text-violet-400">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default SiteLoader; 