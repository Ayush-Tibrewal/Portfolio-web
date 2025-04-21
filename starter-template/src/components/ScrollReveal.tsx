"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const ScrollReveal = ({
  children,
  delay = 0.2,
  y = 40,
  scaleEffect = 0.95,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  scaleEffect?: number;
}) => {
  const controls = useAnimation();
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={{
        hidden: {
          opacity: 0,
          y,
          scale: scaleEffect,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
