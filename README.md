# Yash Gupta - Premium Portfolio Website

A next-level, ultra-aesthetic, highly animated personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features a beautiful white theme with purple/pink gradient accents, glassmorphism effects, and smooth animations throughout.

## ✨ Features

### 🎨 Design
- **Clean White Theme** - Soft white background with luxury feminine-tech aesthetic
- **Gradient Accents** - Purple (#7b2ff7), Pink (#ff4ecd), Violet (#a855f7), Lavender (#c084fc)
- **Glassmorphism** - Beautiful glass effects with blur and soft shadows
- **Animated Mesh Gradient Background** - Smooth gradient transitions
- **Floating Gradient Blobs** - Interactive animated background elements

### 🎬 Animations & Effects
- **Smooth Scroll Animations** - Fade and slide animations on scroll
- **3D Tilt Card Effects** - Interactive project cards with 3D tilt
- **Animated Cursor** - Custom purple/pink glowing cursor with magnetic hover
- **Typing Animation** - Animated typing effect for skills
- **Flip Cards** - Certifications with flip card animation
- **Progress Rings** - Animated circular progress indicators
- **Parallax Scrolling** - Smooth parallax effects
- **Micro-interactions** - Hover effects, glow shadows, and transitions

### 📱 Responsive & Accessible
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Dark/Light Mode Toggle** - Switch between themes
- **Smooth Scrolling** - Smooth navigation between sections
- **Active Section Indicator** - Navbar highlights current section

### 🚀 Premium Features
- **Project Modal Popups** - Detailed project views with animations
- **Animated Timeline** - Education and experience timeline
- **Skill Filters** - Filter skills by category
- **Floating Labels** - Animated form labels
- **Scroll Progress Bar** - Visual scroll progress indicator
- **Back to Top Button** - Floating button with smooth scroll
- **Section Dividers** - Animated SVG dividers between sections
- **Loading Animation** - Beautiful loading screen

## 🛠️ Tech Stack

- **React.js** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Typed** - Typing animation effect
- **Vite** - Build tool

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd YashPortFolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
YashPortFolio/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── AnimatedCursor.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionDivider.jsx
│   │   ├── Skills.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Timeline.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Sections

1. **Hero Section** - Animated introduction with typing effect, 3D floating tech icons, and gradient blobs
2. **About Section** - Professional summary with image placeholder and animated skill progress bars
3. **Skills Section** - Interactive skill bubbles with category filters
4. **Projects Section** - 3D tilt cards with modal popups and animated gradient borders
5. **Achievements Section** - Animated counters with progress ring indicators
6. **Certifications Section** - Flip card animations with shine hover effects
7. **Education Section** - Academic background with animations
8. **Timeline Section** - Animated vertical timeline for education and experience
9. **Contact Section** - Animated contact form with floating labels and validation

## 🎨 Customization

### Update Personal Information

Edit the following files to update your personal information:

- `src/components/Hero.jsx` - Name, title, and skills
- `src/components/About.jsx` - About section content
- `src/components/Contact.jsx` - Contact information
- `src/components/Projects.jsx` - Project details
- `src/components/Education.jsx` - Education details
- `src/components/Timeline.jsx` - Timeline items

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'purple': '#7b2ff7',
  'pink': '#ff4ecd',
  'violet': '#a855f7',
  'lavender': '#c084fc',
}
```

### Modify Animations

Animations are handled by Framer Motion. You can adjust animation properties in each component file.

## 🌈 Color Palette

- **Primary Background**: #ffffff (Soft White)
- **Purple**: #7b2ff7
- **Pink**: #ff4ecd
- **Violet**: #a855f7
- **Lavender**: #c084fc
- **Soft Pink**: #fce7f3
- **Soft Purple**: #f3e8ff

## 🎭 Theme Support

The website supports both light and dark themes. Users can toggle between themes using the theme toggle button in the top right corner. The theme preference is saved in localStorage.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Performance

- Optimized animations with Framer Motion
- Lazy loading for images
- Efficient re-renders with React hooks
- CSS optimizations for smooth scrolling

## 📝 License

This project is open source and available under the MIT License.

## 👤 Contact

**Yash Gupta**
- Email: yg745192@gmail.com
- Phone: +91 9713319182
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Made with ❤️ using React, Tailwind CSS, and Framer Motion
