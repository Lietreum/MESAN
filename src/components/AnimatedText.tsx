import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  variant?: string; // Optional, for different style variants
  style?: React.CSSProperties; // Optional inline styles
  loopCount?: number; // Number of times to loop the animation
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, variant, style, loopCount = 3 }) => {
  const words = text.split(' ');

  return (
    <div className={variant} style={style}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2.5, // Increased duration for slower animation
            delay: index * 0.1,
            repeat: loopCount - 1, // Number of additional loops (loopCount - 1 because it starts from the initial state)
            repeatType: 'loop', // Type of repeat: 'loop' or 'reverse'
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
