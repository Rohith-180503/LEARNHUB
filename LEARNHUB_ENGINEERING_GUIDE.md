# LearnHub: Academic Premium Architecture & Engineering Guide

## 1. Project Overview
LearnHub is a high-end, professional educational platform built with **React 19** and **Vite**. It features an "Academic Premium" aesthetic, a layered architecture for scalability, and advanced state management.

---

## 2. Technical Stack
- **Frontend Framework**: React 19 (utilizing Concurrent Rendering & Transitions)
- **Build System**: Vite (Ultra-fast HMR and build pipelines)
- **State Management**: React Context API (Cart & Theme persistence)
- **Routing**: React Router v6.x
- **Styling**: Modern CSS3 with Design Tokens (Custom Properties)
- **Notifications**: React Toastify (Custom themed)

---

## 3. Project Structure & Layered Architecture
The project follows a modular, layered structure to ensure a clear separation of concerns:

```text
learnhub-root/
├── .github/ workflows/      # CI/CD & GitHub Pages sync
├── public/                  # Static assets (favicons, manifest)
└── src/
    ├── Components/          # Shared UI Components (Atomic Design)
    │   ├── Cart/            # Shopping cart logic & UI
    │   ├── Course/          # Course card & grid components
    │   └── Navbar/          # Navigation, search, & dropdowns
    ├── assets/              # Logos & media files
    ├── constants/           # Global strings, navigation config
    ├── context/             # Global state (CartContext)
    ├── fakeData/            # Mock database for courses
    ├── pages/               # View-level components
    │   ├── Home/            # Landing page & filtering
    │   ├── CourseDetail/    # Individual course deep-dives
    │   └── Content/         # Static technical content pages
    ├── styles/              # Global CSS & design tokens
    ├── utils/               # Helper functions & logic
    ├── App.jsx              # Main router configuration
    └── main.jsx             # React entry point
```

### Layer Rationale:
1.  **Components**: Reusable blocks. If it's used in multiple pages, it belongs here.
2.  **Pages**: The highest level of composition. Pages handle data orchestration and layout.
3.  **Context**: Global state that needs to survive navigation (e.g., your shopping cart).
4.  **Utils/Constants**: Logic-only layer. Separating pure functions from React components makes testing easier.

---

## 4. Design Philosophy: "Elite Indigo & Slate"
The "Academic Premium" look is defined in `src/styles/index.css` using CSS variables:

- **Elite Indigo** (`#4338ca`): Represents authority and intelligence.
- **Slate Surfaces** (`#f8fafc`): Provides a clean, paper-like background for academic focus.
- **Glassmorphism**: Used on the Navbar and dropdowns for a modern, layered feel.
- **Safe Bridge Pattern**: A custom CSS/JS implementation that ensures navigation menus don't close prematurely during mouse movements.

---

## 5. Key Features Implementation

### Advanced Filtering System
Located in `src/pages/Home/Home.jsx`, the filtering system uses `useMemo` for performance and `useEffect` to synchronize filters with the URL search parameters. This allows users to share specific filtered views via links.

### Shopping Cart Orchestration
The cart uses `src/context/CartContext.jsx` to provide a global `cart` object. It includes sophisticated pricing logic (discounts, totals) handled in `src/utils/cartPricing.js`.

### Responsive Navigation
The Navbar (`src/Components/Navbar`) implements:
- **Desktop**: State-driven hover menus with a 150ms "grace period" (timeout) to prevent accidental closing.
- **Mobile**: A dedicated slide-out drawer for touch-first interaction.

---

## 6. Future-Proofing & Best Practices
- **React 19 Readiness**: Using modern hooks and avoiding deprecated patterns.
- **Accessibility (A11y)**: Semantic HTML tags (`<nav>`, `<main>`, `<article>`) and ARIA labels on all interactive elements.
- **Performance**: Vite's code-splitting and asset optimization ensure fast load times even as content grows.
