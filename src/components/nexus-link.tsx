import { motion } from 'motion/react';

import nexusMods from '@/assets/nexus-mods.svg';
import { cn } from '@/lib/utils';

export const NexusLink = ({ className }: { className?: string }) => (
  <motion.a
    href="https://www.nexusmods.com/skyrimspecialedition/mods/148718"
    target="_blank"
    rel="noopener noreferrer"
    className={cn('block', className)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
  >
    <img className="w-full h-auto" src={nexusMods.src} alt="Nexus Mods" />
  </motion.a>
);
