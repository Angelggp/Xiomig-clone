import { motion } from "framer-motion";
import React from "react";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
