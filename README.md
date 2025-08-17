# Prisma UI - Skyrim Next-Gen Web UI Framework

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fprismaui.dev)](https://prismaui.dev)
[![GitHub](https://img.shields.io/github/license/PrismaUI-SKSE/prismaui-website)](https://github.com/PrismaUI-SKSE/prismaui-website)
[![Discord](https://img.shields.io/discord/your-discord-id?label=Discord&logo=discord)](https://discord.gg/bawdketrFX)

> Revolutionary web UI framework for Skyrim modding. Create beautiful, modern user interfaces with HTML, CSS, JavaScript, React, Vue and other web technologies. 10x faster than Chromium with 60fps performance.

## 🚀 Features

- **⚡ Lightning Fast**: 10x lighter than Chromium with 60fps performance using optimized WebKit integration
- **🎨 Modern Technologies**: Use HTML, CSS, JavaScript, React, Vue, and any modern frontend framework
- **🔧 Developer Friendly**: Develop and test directly in browser with hot reload and modern dev tools
- **🔄 Bidirectional Communication**: Seamless C++ ↔ JavaScript communication with JSON data exchange
- **🎮 Game Integration**: Non-invasive approach - integrate web UI step by step without touching vanilla Skyrim's SWF interface

## 📖 Documentation

Visit our comprehensive documentation at [prismaui.dev](https://prismaui.dev) to get started:

- [Getting Started](https://prismaui.dev/getting-started/introduction/)
- [API Reference](https://prismaui.dev/api/)
- [Configuration Guide](https://prismaui.dev/configuration/)
- [Migration Guides](https://prismaui.dev/guides/)

## 🛠️ Quick Start

```cpp
// C++ (SKSE Plugin)
PrismaView view = PrismaUI->CreateView("my-ui/index.html", [](PrismaView view) {
    // Send player data to UI when ready
    PrismaUI->Invoke(view, "updatePlayerStats({health: 100, magicka: 50})");
});

// Register listener for UI events
PrismaUI->RegisterJSListener(view, "castSpell", [](const char* spellName) {
    logger::info("Player wants to cast: {}", spellName);
    // Cast spell in game...
});
```

```html
<!-- HTML/JavaScript -->
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
</script>
```

## 🏗️ Website Development

This website is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build/).

### Commands

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`         |
| `npm run preview` | Preview build locally                      |

### Project Structure

```
.
├── public/           # Static assets
├── src/
│   ├── assets/      # Images and other assets
│   ├── content/     # Documentation content
│   │   └── docs/    # Markdown/MDX files
│   ├── components/  # Astro components
│   └── styles/      # Global styles
├── astro.config.mjs # Astro configuration
└── package.json
```

## 🤝 Community

- **💬 Discord**: [Join our community](https://discord.gg/bawdketrFX)
- **🐛 Issues**: [Report bugs](https://github.com/orgs/PrismaUI-SKSE/discussions)
- **📚 Examples**: [Plugin templates](https://github.com/PrismaUI-SKSE/PrismaUI-Example-Plugin)

## 🙏 Acknowledgments

- Skyrim Modding Community
- Bethesda Game Studios
- SKSE Team
- All contributors and supporters

---

**Created with ❤️ by [StarkMP](https://github.com/StarkMP) for the Skyrim modding community.**
