'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeExamples = {
  cpp: `// C++ (SKSE Plugin)
PrismaView view = PrismaUI->CreateView("my-ui/index.html", [](PrismaView view) {
    // Send player data to UI when ready
    PrismaUI->Invoke(view, "updatePlayerStats({health: 100, magicka: 50})");
});

// Register listener for UI events
PrismaUI->RegisterJSListener(view, "castSpell", [](const char* spellName) {
    SKSE::log::info("Player wants to cast: {}", spellName);
    // Cast spell in game...
});`,
  html: `<!-- HTML/JavaScript -->
<div class="player-stats">
    <div class="stat">Health: <span id="health">0</span></div>
    <div class="stat">Magicka: <span id="magicka">0</span></div>
    <button onclick="castFireball()">Cast Fireball</button>
</div>

<script>
// Receive data from game
window.updatePlayerStats = (stats) => {
    document.getElementById('health').textContent = stats.health;
    document.getElementById('magicka').textContent = stats.magicka;
};

// Send commands to game
function castFireball() {
    window.castSpell('Fireball');
}
</script>`,
};

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState<'cpp' | 'html'>('html');

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
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
            Simple & Powerful
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            See how easy it is to create interactive UI that communicates with Skyrim
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Tab Buttons */}
          <div className="flex gap-4 mb-6">
            <motion.button
              onClick={() => setActiveTab('html')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
                activeTab === 'html'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-zinc-900/50 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              HTML/JavaScript
            </motion.button>
            <motion.button
              onClick={() => setActiveTab('cpp')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer ${
                activeTab === 'cpp'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-zinc-900/50 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              C++ (SKSE Plugin)
            </motion.button>
          </div>

          {/* Code Block */}
          <motion.div
            className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 backdrop-blur-sm rounded-2xl border border-zinc-800/50 overflow-hidden"
            layout
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-zinc-800/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 text-sm text-zinc-500 font-mono">
                {activeTab === 'cpp' ? 'main.cpp' : 'index.html'}
              </span>
            </div>

            {/* Code Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="overflow-x-auto"
            >
              <SyntaxHighlighter
                language={activeTab === 'cpp' ? 'cpp' : 'html'}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: '1.5rem',
                  background: 'transparent',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                }}
                codeTagProps={{
                  style: {
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    lineHeight: '1.7',
                  },
                }}
              >
                {codeExamples[activeTab]}
              </SyntaxHighlighter>
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 pointer-events-none"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            />
          </motion.div>

          {/* Features List */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              {
                icon: '🚀',
                title: 'Easy Integration',
                description: 'Seamlessly integrate web UI into Skyrim with minimal setup',
              },
              {
                icon: '💬',
                title: 'Two-Way Communication',
                description: 'Send data and receive events seamlessly',
              },
              {
                icon: '📦',
                title: 'Modern Web Stack',
                description: 'Use any web framework - React, Vue, or vanilla JS',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center text-center p-6 bg-zinc-900/30 rounded-xl border border-zinc-800/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
