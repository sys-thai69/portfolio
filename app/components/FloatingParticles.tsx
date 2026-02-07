"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ParticleSeed {
  initX: number;
  initY: number;
  animX: number;
  animY: number;
  duration: number;
}

// Generate seeds outside the component to avoid impure calls during render
const INITIAL_SEEDS: ParticleSeed[] = Array.from({ length: 20 }, () => ({
  initX: Math.random(),
  initY: Math.random(),
  animX: Math.random(),
  animY: Math.random(),
  duration: Math.random() * 10 + 10,
}));

export default function FloatingParticles() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Initial dimensions set via resize handler callback
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {INITIAL_SEEDS.map((seed, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-500/20 rounded-full"
          initial={{
            x: seed.initX * dimensions.width,
            y: seed.initY * dimensions.height,
          }}
          animate={{
            x: seed.animX * dimensions.width,
            y: seed.animY * dimensions.height,
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: seed.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
