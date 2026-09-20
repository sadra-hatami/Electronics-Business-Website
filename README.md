<div align="center">

# Electronics Business Website
# 💻✨

### A Cinematic Electronics Store Experience

A high-end Persian landing page with **scroll-driven motion**, a **3D laptop that opens as you scroll**, a **live product configurator**, and a polished interface built with HTML, CSS, GSAP, and Three.js.

<br>

# 👨‍💻 **Sadra Hatami**

### *Developer • Software Engineer • Creator*

<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![RTL](https://img.shields.io/badge/Direction-RTL%20Persian-success?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Yes-0078D6?style=for-the-badge)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue?style=for-the-badge&logo=github)](https://sadra-hatami.github.io/Electronics-Business-Website/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

<br>

[🌐 Live Demo](https://sadra-hatami.github.io/Electronics-Business-Website/)
•
[📘 نسخه فارسی راهنما](README.fa.md)
•
[📧 Contact](mailto:sadra.hatami.1732@gmail.com)
•
[🔗 GitHub Profile](https://github.com/sadra-hatami)

</div>

---

# 📑 Table of Contents

- [About](#-about)
- [Why This Website?](#-why-this-website)
- [Key Features](#-key-features)
- [Interface Highlights](#-interface-highlights)
- [Project Structure](#-project-structure)
- [Technologies](#️-technologies)
- [Usage](#️-usage)
- [Target Audience](#-target-audience)
- [Live Demo](#-live-demo)
- [Roadmap](#-roadmap)
- [FAQ](#-frequently-asked-questions)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)
- [Copyright](#-copyright)
- [Support](#-support)

---

# 📖 About

**Electronics Business Website** is a single-page electronics store interface designed to feel closer to a product film than a static catalog.

The page is RTL and built for Persian readers, but the main work is visual: a preloader, a custom cursor, a scroll-progress rail, side-dot navigation, a 3D laptop stage, and a configurator that updates the total as options change.

Libraries are loaded from CDN. There is no backend and no build step.

> **Tagline:** *A cinematic Persian electronics store with scroll-driven motion, a 3D laptop that opens as you scroll, and a live product configurator.*

---

# 🚀 Why This Website?

A product page can list specs, or it can make the product move.

This project focuses on the second path:

- Motion is tied to scroll, not only to click
- The laptop lid opens as the visitor moves down the hero
- Navigation stays on screen without covering the stage
- The configurator lets someone assemble a machine and see the price change
- The layout stays one page, so the story never leaves the screen

---

# ✨ Key Features

- 🎬 Full-page preloader with a live percent bar
- 🖱️ Custom cursor and a light film-grain overlay
- 📍 Side-dot navigation between page stages
- 📊 Top scroll-progress line
- 💻 3D laptop preview with a lid that opens on scroll
- ✨ Screen glow and particle canvas around the hero
- ⚖️ Side-by-side model comparison
- 🎛️ Live configurator for RAM, storage, and color
- 💰 Running total that updates with each option
- 🔝 Back-to-top control
- 🇮🇷 RTL layout and Persian UI
- 📱 Responsive single-page structure

---

# 🎨 Interface Highlights

### Scroll-opened laptop

The hero is not a still photo. As the page scrolls, the laptop lid lifts, the screen becomes the focus, and the scene feels like a product reveal.

### Stage, not a form

The interface is built as a sequence of stages: opening, models, specs, comparison, and configuration. Side dots jump between those stages without breaking the motion.

### Configurator

RAM, storage, and color can be changed in place. Labels and the total update immediately, so the visitor sees the machine they are building.

### Quiet chrome

The header tightens after scroll, the progress rail stays thin, and the grain overlay keeps the page from looking flat.

---

# 📁 Project Structure

```text
Electronics-Business-Website/
├── index.html
├── css/
│   └── style.css
└── js/
    └── main.js
```

- `index.html` — page frame, sections, and CDN libraries
- `css/style.css` — layout, color system, and interface motion
- `js/main.js` — GSAP / ScrollTrigger, Three.js stage, configurator, and UI behavior

External libraries loaded in the page:

- Vazirmatn and JetBrains Mono
- GSAP and ScrollTrigger
- Three.js

---

# 🛠️ Technologies

- HTML5
- CSS3
- JavaScript
- GSAP + ScrollTrigger
- Three.js

No package manager or bundler is required.

---

# ▶️ Usage

### Live website

https://sadra-hatami.github.io/Electronics-Business-Website/

### Open locally

```bash
git clone https://github.com/sadra-hatami/Electronics-Business-Website.git
cd Electronics-Business-Website
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

A local server is the safer way to load `css/` and `js/` paths.

---

# 🎓 Target Audience

- Front-end developers studying scroll-driven UI
- Designers looking at cinematic product pages
- Stores that want a single-page electronics showcase
- Students learning GSAP and Three.js together

---

# 🌍 Live Demo

https://sadra-hatami.github.io/Electronics-Business-Website/

Repository: https://github.com/sadra-hatami/Electronics-Business-Website

---

# 🚀 Roadmap

Possible later improvements:

- 🔊 Optional sound for the lid animation
- 🛒 Real checkout connection
- 🌙 Theme switch
- 🖼️ Extra product scenes
- ♿ Reduced-motion refinements beyond the current media query

---

# ❓ Frequently Asked Questions

### Does the site need a backend?

No. It is a static front-end page.

### Why use a local server?

Relative `css/` and `js/` paths are more reliable over `http://localhost` than over a raw file path.

### Does the 3D laptop need WebGL?

Yes. The hero stage uses Three.js. An older browser without WebGL will lose that scene.

### Is this the same as Business Website?

No. [Business Website](https://github.com/sadra-hatami/Business-Website) is a multi-page company template. This repository is a cinematic single-page electronics store.

---

# 🤝 Contributing

Contributions are welcome.

You can:

- Report motion bugs
- Improve responsive behavior
- Refine the 3D scene
- Submit Pull Requests

---

# 📬 Contact

**Developer:**

### **Sadra Hatami**

📧 [Email](mailto:sadra.hatami.1732@gmail.com)

🌐 [GitHub](https://github.com/sadra-hatami)

---

# 📄 License

This project is licensed under the **MIT License**.

---

# © Copyright

© 2026 **Sadra Hatami**

All rights reserved.

The source code, visual design, motion, documentation, and project structure are protected under applicable copyright laws.

---

# ⭐ Support the Project

If you like this interface, please consider starring the repository.

---

<div align="center">

## Designed & developed with ❤️ for the developer community of Iran and the world

<br>

## 👨‍💻 **Sadra Hatami**

### Developer • Software Engineer • Creator

⭐ If you like this project, don't forget to star the repository!

</div>
