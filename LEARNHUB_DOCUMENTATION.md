# LearnHub Online Learning Platform - Technical Documentation

## 1. Project Overview
LearnHub is a modern, high-performance online learning platform built with React 19. It features a sophisticated user interface, dynamic course catalog, and a persistent shopping cart system. The project is designed with a professional, academic-grade aesthetic using modern web technologies.

## 2. Tech Stack & Versions
- **Frontend Framework**: React 19.1.1 (Latest stable version)
- **Build Tool**: Vite (using Rolldown-Vite for ultra-fast builds)
- **Routing**: React Router DOM 7.13.2
- **State Management**: React Context API & Hooks (useContext, useMemo, useCallback)
- **Styling**: Pure CSS3 with Custom Properties (Variables), Flexbox, and CSS Grid
- **Notifications**: React Toastify 11.0.5
- **Icons & UI**: Bootstrap 5.3.8 (for utility classes and grid)
- **Testing**: Vitest 3.2.4 & Testing Library

## 3. Project Structure (Layered Architecture)
The project follows a clean, systematic, and layered directory structure:

- `src/assets/`: Static files like logos and images.
- `src/Components/`: Reusable UI building blocks (Navbar, Cart, Course).
- `src/context/`: Global state management using Context API.
- `src/fakeData/`: Mock data for courses and instructors.
- `src/pages/`: Main application views (Home, ContentPages).
- `src/styles/`: Global CSS and theme variables.

## 4. Key Concepts (Basic to Advanced)

### Basic Topics
- **JSX**: Syntax extension for JavaScript used to describe UI components.
- **Props**: Passing data between components to make them reusable.
- **Components**: Functional building blocks of the UI.

### Intermediate Topics
- **Hooks (useState, useEffect)**: Managing component state and side effects (like localStorage).
- **React Router**: Handling navigation without page reloads.
- **CSS Variables**: Creating a professional, themeable color palette.

### Advanced Topics
- **Context API**: Managing global state (Cart) without "prop drilling".
- **useMemo & useCallback**: Optimizing performance by preventing unnecessary re-renders.
- **Custom Event Handling**: Implementing hover-based dropdowns and mobile-first navigation.
- **Persistence**: Using LocalStorage to keep the cart intact across browser sessions.

## 5. Development Workflow
1. **Restructuring**: The project was systematically reorganized to separate logic, styles, and views.
2. **Refactoring**: Unnecessary code was removed, and component logic was simplified for better readability.
3. **Verification**: The project undergoes a build process (`npm run build`) to ensure production readiness.
4. **Synchronization**: Changes are automatically synced to GitHub using an integrated Git workflow.

---
*Prepared for future development and platform scaling.*
