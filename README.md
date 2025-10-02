# VERITAS AI LAB

A React-based command center for Thomas Gaye's AI systems architecture, showcasing enterprise and government AI/AGI deployment capabilities.

## Project Structure

```
veritas-ai-lab/
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   ├── components/
│   │   ├── CaseStudyArsenal.jsx
│   │   ├── ContactModule.jsx
│   │   ├── ExperienceCarousel.jsx
│   │   ├── HeroModule.jsx
│   │   ├── Navigation.jsx
│   │   └── SkillsMatrix.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   └── styles/
│       └── globals.css
```

## File Descriptions

- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package-lock.json**: Automatically generated for any operations where npm modifies the node_modules directory.
- **package.json**: Contains project metadata, dependencies, and scripts.
- **postcss.config.js**: Configuration for PostCSS, used for processing CSS.
- **tailwind.config.js**: Configuration for Tailwind CSS utility framework.

### src/

- **App.jsx**: Main React component; root of the application.
- **index.js**: Entry point for React; renders the App component.
- **index.css**: Global CSS imports and base styles.

#### src/components/

- **CaseStudyArsenal.jsx**: Displays AI/AGI systems case studies and deployment examples.
- **ContactModule.jsx**: Contact form for enterprise and government engagement.
- **ExperienceCarousel.jsx**: Carousel showcasing elite AI systems architecture experience.
- **HeroModule.jsx**: Command center hero section with mission directive and tactical positioning.
- **Navigation.jsx**: Navigation bar component.
- **SkillsMatrix.jsx**: Component displaying full-stack AI/AGI capabilities and automation frameworks.

#### src/contexts/

- **ThemeContext.jsx**: Provides theme context for managing light/dark mode or other theme settings.

#### src/styles/

- **globals.css**: Global CSS styles for the project.

## Setup & Usage

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start development server**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Build for production**
   ```bash
   npm run build
   ```

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request.

## License

Specify your license here (e.g., MIT).

---

## Audit & Status

**Frontend Audit (October 2025):**
- Project uses React 18, React Router, Tailwind CSS, Framer Motion, and modern best practices.
- All major modules (Navigation, Hero, Skills, Experience, Case Studies, AI Marketplace, Contact) are implemented and integrated.
- Rebranded to VERITAS AI LAB with mission directive focused on enterprise/government AI/AGI deployment.
- Theme management (light/dark mode) is robust and persistent.
- Code is modular, readable, and maintainable.
- Command center positioning emphasizes tactical edge, infrastructure automation, and full-stack AI systems.

**Estimated Completion:** 95%
