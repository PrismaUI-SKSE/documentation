'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

import skyrimLogo from '@/assets/skyrim-logo-silver.svg';

export default function MouseInteractiveBackground() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springConfig = { damping: 20, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const orb1X = 10;
  const orb1Y = 35;
  const orb2X = 90;
  const orb2Y = 65;

  const orb1OffsetX = useTransform(smoothMouseX, (v: number) => (v - orb1X) * -0.3);
  const orb1OffsetY = useTransform(smoothMouseY, (v: number) => (v - orb1Y) * -0.3);
  const orb2OffsetX = useTransform(smoothMouseX, (v: number) => (v - orb2X) * -0.3);
  const orb2OffsetY = useTransform(smoothMouseY, (v: number) => (v - orb2Y) * -0.3);

  const [particles, setParticles] = useState<
    Array<{
      id: number;
      initialX: number;
      initialY: number;
      duration: number;
      delay: number;
      offsetMultiplier: number;
    }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
        offsetMultiplier: 0.8 + Math.random() * 0.7,
      }))
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          left: `${orb1X}%`,
          top: `${orb1Y}%`,
          x: orb1OffsetX,
          y: orb1OffsetY,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
          left: `${orb2X}%`,
          top: `${orb2Y}%`,
          x: orb2OffsetX,
          y: orb2OffsetY,
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-[0.06]"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img src={skyrimLogo.src} alt="" className="w-[800px] h-[800px] object-contain" />
      </motion.div>

      {particles.map((particle) => (
        <FloatingParticle
          key={particle.id}
          particle={particle}
          mouseX={smoothMouseX}
          mouseY={smoothMouseY}
        />
      ))}
    </div>
  );
}

function FloatingParticle({
  particle,
  mouseX,
  mouseY,
}: {
  particle: {
    id: number;
    initialX: number;
    initialY: number;
    duration: number;
    delay: number;
    offsetMultiplier: number;
  };
  mouseX: any;
  mouseY: any;
}) {
  const offsetX = useTransform(
    mouseX,
    (value: number) => (value - particle.initialX) * particle.offsetMultiplier * -1.2
  );

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full opacity-0"
      style={{
        left: `${particle.initialX}%`,
        top: `${particle.initialY}%`,
        x: offsetX,
      }}
      animate={{
        y: [0, -100, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        delay: particle.delay,
        ease: 'easeInOut',
      }}
    />
  );
}
