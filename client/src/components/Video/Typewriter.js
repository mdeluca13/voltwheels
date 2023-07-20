// Typewriter.js
import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Typewriter = ({ texts, interval }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let currentIndex = 0;

    const typewriterInterval = setInterval(() => {
      if (currentIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, interval);

    return () => clearInterval(typewriterInterval);
  }, [texts, currentTextIndex, interval]);

  return (
    <Box>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
      </motion.span>
    </Box>
  );
};

export default Typewriter;
