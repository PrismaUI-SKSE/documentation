// @ts-check
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import starlightThemeNext from 'starlight-theme-next';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNext()],
      title: 'Prisma UI',
      social: [
        {
          icon: 'heart',
          label: 'Support',
          href: 'https://www.donationalerts.com/r/starkmp',
        },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/PrismaUI-SKSE' },
      ],
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        ru: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      logo: {
        light: './src/assets/brand-logo.svg',
        dark: './src/assets/brand-logo.svg',
        replacesTitle: true,
      },
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'API',
          autogenerate: { directory: 'api' },
        },
        {
          label: 'Configuration',
          autogenerate: { directory: 'configuration' },
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
      ],
      favicon: '/favicon.ico',
      components: {
        Hero: './src/components/starlight/hero.astro',
        ThemeSelect: './src/components/starlight/null.astro',
        ThemeProvider: './src/components/starlight/theme-provider.astro',
        LanguageSelect: './src/components/starlight/null.astro',
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('src', import.meta.url).pathname,
      },
    },
  },
});
