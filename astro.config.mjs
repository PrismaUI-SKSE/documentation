// @ts-check
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import starlightThemeNext from 'starlight-theme-next';

// https://astro.build/config
export default defineConfig({
  site: 'https://prismaui.dev',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 45_000,
    }),
    starlight({
      plugins: [starlightThemeNext()],
      title: 'Prisma UI',
      description:
        'Skyrim Next-Gen Web UI Framework - Create beautiful and modern user interfaces for Skyrim with HTML, CSS, JavaScript, React, Vue and other web technologies. 10x faster than Chromium with 60fps performance.',
      head: [
        // Open Graph / Facebook
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:title',
            content: 'Prisma UI - Skyrim Next-Gen Web UI Framework',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content:
              'Create beautiful and modern user interfaces for Skyrim with HTML, CSS, JavaScript, React, Vue and other web technologies. 10x faster than Chromium with 60fps performance.',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:url',
            content: 'https://prismaui.dev',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'Prisma UI',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:width',
            content: '1200',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:height',
            content: '630',
          },
        },
        // Twitter Card
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:title',
            content: 'Prisma UI - Skyrim Next-Gen Web UI Framework',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:description',
            content:
              'Create beautiful and modern user interfaces for Skyrim with HTML, CSS, JavaScript, React, Vue and other web technologies. 10x faster than Chromium with 60fps performance.',
          },
        },
        // Additional SEO meta tags
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content:
              'Skyrim, UI, Prisma UI, Framework, Web, HTML, CSS, JavaScript, React, Vue, SKSE, Modding, Game Development, WebKit, Performance',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'author',
            content: 'StarkMP',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        },
        // Canonical URL
        {
          tag: 'link',
          attrs: {
            rel: 'canonical',
            href: 'https://prismaui.dev',
          },
        },
        // Web App Manifest
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: '/manifest.json',
          },
        },
        // Theme color for mobile browsers
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#3b82f6',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'msapplication-TileColor',
            content: '#3b82f6',
          },
        },
        // JSON-LD Structured Data
        {
          tag: 'script',
          attrs: {
            type: 'application/ld+json',
          },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Prisma UI',
            description:
              'Skyrim Next-Gen Web UI Framework - Create beautiful and modern user interfaces for Skyrim with HTML, CSS, JavaScript, React, Vue and other web technologies.',
            url: 'https://prismaui.dev',
            author: {
              '@type': 'Person',
              name: 'StarkMP',
              url: 'https://github.com/StarkMP',
            },
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Windows',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              ratingCount: '1',
            },
          }),
        },
      ],
      social: [
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/bawdketrFX',
        },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/PrismaUI-SKSE' },
      ],
      locales: {
        root: {
          label: 'English',
          lang: 'en',
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
