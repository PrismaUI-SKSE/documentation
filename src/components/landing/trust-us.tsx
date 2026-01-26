'use client';

import { motion } from 'motion/react';

import { Marquee } from '@/components/ui/marquee';
import { MODS_USING_PRISMA } from '@/constants';

export default function TrustUs() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Amazing Mods
        </motion.h2>
        <motion.p
          className="text-center text-zinc-500 mt-4 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join the growing ecosystem of mods powered by Prisma UI
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <Marquee className="[--duration:110s] [--gap:2rem]" pauseOnHover>
          {MODS_USING_PRISMA.map((mod, index) => (
            <a
              key={`${mod.name}-${index}`}
              href={mod.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-shrink-0 w-80 h-40 rounded-2xl border border-zinc-800/50 overflow-hidden transition-all duration-300 hover:border-zinc-700/70 hover:scale-[1.02] cursor-pointer"
            >
              {/* Background Image with Blur */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${mod.image})`,
                  filter: 'blur(3px) brightness(0.55)',
                }}
              />

              {/* Content - Centered Title */}
              <div className="relative z-10 flex items-center justify-center h-full px-8">
                <h3 className="text-2xl font-bold text-white text-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300">
                  {mod.name}
                </h3>
              </div>
            </a>
          ))}
        </Marquee>
      </div>

      {/* Bottom Text */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-zinc-600 text-sm">
          Want to see your mod here?{' '}
          <a
            href="https://discord.gg/bawdketrFX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            Join our Discord
          </a>
        </p>
      </motion.div>
    </section>
  );
}
