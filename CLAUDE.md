# Physica Inc - Development Rules

## CRITICAL RULES - MANDATORY COMPLIANCE

### 1. LANGUAGE RULES
- **ALL** website content MUST be in English (professional, medical-appropriate language)
- Communication with the developer: Spanish
- Code comments: English
- Variable names: English
- Git commits: English

### 2. CSS/SCSS METHODOLOGY - BEM (Block Element Modifier) - STRICT
- **MANDATORY**: Use BEM naming convention for ALL classes
- Format: `BlockName__element--modifier`
- Examples:
  - Component: `AboutUs`
  - Main container: `.AboutUs`
  - Element: `.AboutUs__container`
  - Element with sub-element: `.AboutUs__content-wrapper`
  - Modifier: `.AboutUs__title--primary`
  - Element with modifier: `.AboutUs__card--featured`

#### BEM Rules:
- Block names: PascalCase (e.g., `Header`, `Hero`, `AboutUs`)
- Elements: lowercase with hyphens, double underscore separator (e.g., `Header__nav-menu`)
- Modifiers: lowercase with hyphens, double dash separator (e.g., `Header__button--active`)
- NO generic classes like `.container`, `.section`, `.title` without block prefix
- Every component must have its own BEM namespace

### 3. DESIGN PRINCIPLES
- **Aesthetic**: Elegant, professional medical clinic (NOT tech startup)
- **Style**: Clean, trustworthy, calming, sophisticated
- **Colors**: Use defined palette (greens and beiges) - medical/natural feel
- **Typography**: Professional serif for headings, clean sans-serif for body
- **Spacing**: Generous whitespace, breathing room
- **Images**: Prepare proper spaces for high-quality medical photography

### 4. IMAGE GUIDELINES
- Use placeholder containers with proper aspect ratios
- Prepare for real medical/clinic photography
- Image areas should have elegant borders/frames
- Support for: team photos, facility photos, medical equipment, patient care scenes

### 5. QUALITY STANDARDS
- This MUST be THE BEST clinic website
- Professional-grade code quality
- Pixel-perfect design
- Smooth animations and transitions
- Fully responsive (mobile-first)
- Accessible (WCAG compliant)

### 6. COMPONENT STRUCTURE
Each component must follow this structure:
```
ComponentName/
├── ComponentName.jsx      // React component
└── ComponentName.scss     // BEM styles with component namespace
```

### 7. SCSS STRUCTURE
```scss
// ComponentName.scss
@use '../variables';
@use '../mixins';

.ComponentName {
  // Block styles

  &__element {
    // Element styles

    &--modifier {
      // Modifier styles
    }
  }
}
```

### 8. FORBIDDEN
- ❌ Spanish text on the website
- ❌ Generic class names without BEM
- ❌ Tech startup aesthetics
- ❌ Poor quality placeholder images
- ❌ Inconsistent spacing/typography
- ❌ Non-semantic HTML
- ❌ Inline styles

### 9. FILE NAMING
- Components: PascalCase (e.g., `AboutUs.jsx`, `ContactForm.jsx`)
- SCSS files: PascalCase matching component (e.g., `AboutUs.scss`)
- Assets: lowercase-with-hyphens (e.g., `clinic-team-photo.jpg`)

### 10. COMMIT MESSAGES
Format: `[Component] Brief description`
Example: `[Header] Implement BEM methodology with professional navigation`

---
**Remember: This is not just a good website. This must be THE BEST clinic website.**
