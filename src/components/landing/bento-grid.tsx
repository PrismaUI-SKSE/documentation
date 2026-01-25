'use client';

import { motion } from 'motion/react';

const features = [
  {
    title: 'Good Performance',
    description:
      '10x lighter than Chromium with optimized WebKit integration for smooth performance',
    icon: '⚡',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    border: 'hover:border-blue-500/50',
  },
  {
    title: 'Modern Web Stack',
    description: 'Use HTML, CSS, JavaScript, React, Vue, and any modern frontend framework',
    icon: '🎨',
    gradient: 'from-purple-500/10 to-pink-500/10',
    border: 'hover:border-purple-500/50',
  },
  {
    title: 'DirectX 11 Integration',
    description: 'Native DirectX 11 rendering for seamless integration with Skyrim as overlay',
    icon: '🎮',
    gradient: 'from-emerald-500/10 to-teal-500/10',
    border: 'hover:border-emerald-500/50',
  },
  {
    title: 'Bidirectional Communication',
    description: 'Seamless C++ ↔ JavaScript communication with JSON data exchange',
    icon: '🔄',
    gradient: 'from-orange-500/10 to-red-500/10',
    border: 'hover:border-orange-500/50',
  },
  {
    title: 'Developer Friendly',
    description: 'Modern dev tools, and browser-based development workflow',
    icon: '🔧',
    gradient: 'from-violet-500/10 to-indigo-500/10',
    border: 'hover:border-violet-500/50',
  },
  {
    title: 'Non-Invasive',
    description: 'Integrate step by step without touching vanilla Skyrim SWF interface',
    icon: '🛡️',
    gradient: 'from-amber-500/10 to-yellow-500/10',
    border: 'hover:border-amber-500/50',
  },
];

export default function BentoGrid() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent mb-4">
            Why Prisma UI?
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            Revolutionary web UI framework built for the next generation of Skyrim modding
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`group relative bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm rounded-3xl border border-zinc-800/50 p-8 overflow-hidden transition-all duration-500 ${feature.border}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Gradient Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '200% 0%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-6 filter drop-shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                whileHover={{
                  x: ['100%', '200%'],
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-zinc-500 mb-6">
            Ready to experience the future of Skyrim UI development?
          </p>
          <motion.a
            href="/getting-started/introduction/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            Start Building Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
