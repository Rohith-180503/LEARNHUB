# LearnHub - Online Learning Platform

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.14-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat&logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

LearnHub is a modern, high-performance online learning platform built with React 19 and Vite. It features a sophisticated user interface, dynamic course catalog, persistent shopping cart, and comprehensive content pages for resources and instructors.

![LearnHub Preview](./public/screenshot.png)

## 🆕 What Has Been Done Recently (Latest Updates)

The project recently underwent a thorough codebase audit and structural cleanup to make the application leaner, cleaner, and error-proof. The following improvements were made:

- **Dead Asset Removal**: Removed legacy boilerplate assets (`logo.svg`, `react.svg`, `cart.webp`, and `course-placeholder.svg`) that were no longer used, reducing project payload.
- **Utility Cleanup**: Removed unused utility functions (`finance.js` and `resilientFetch.js`) that were dependent on missing third-party libraries, effectively preventing potential runtime errors.
- **HTML Boilerplate Polish**: Updated `index.html` to reflect the actual project title (`LearnHub - Online Learning`) and fixed broken favicon paths.
- **Quality Assurance**: Verified the stability of the project by running code linting (`eslint`), unit tests (`vitest`), and generating a successful production build.

---

## 🌟 Key Features

### 🛒 **Advanced Shopping Cart System**
- **Persistent Cart State**: Cart contents survive browser refreshes using localStorage
- **Real-time Pricing**: Dynamic total calculations with tax and discounts
- **Context API Integration**: Global state management without prop drilling
- **Toast Notifications**: User feedback for cart actions using React Toastify
- **Cart Flyout**: Slide-out cart preview with item management

### 🎨 **Professional UI/UX Design**
- **Glassmorphism Design**: Modern translucent backgrounds and subtle borders
- **Responsive Navigation**: Desktop dropdowns and mobile drawer navigation
- **Dark/Light Theme**: Theme persistence with localStorage fallback
- **Accessibility**: Keyboard navigation and ARIA labels
- **Professional Color Palette**: Custom CSS variables for consistent theming

### 📚 **Comprehensive Course Catalog**
- **44 Technical Courses**: Covering development, data science, cloud, AI, and more
- **Expert Instructors**: Real instructor profiles with specializations
- **Category Organization**: Courses grouped by technology domains
- **Dynamic Course Cards**: Interactive cards with hover effects and pricing

### 🧭 **Multi-Page Architecture**
- **Home Page**: Hero section with course catalog grid
- **Explore Categories**: Filtered course views (Web Dev, Data Science, Cloud, UI/UX)
- **Resources Section**: Blog, Community, Success Stories, Documentation
- **Instructors Page**: Detailed faculty profiles with expertise tags
- **React Router Navigation**: Client-side routing with nested routes

### 🧪 **Testing & Quality Assurance**
- **Vitest Framework**: Modern testing with React Testing Library
- **Component Testing**: Unit tests for core functionality
- **ESLint Integration**: Code quality and consistency checks

## 🏗️ Technical Architecture

### **Frontend Stack**
- **React 19.1.1**: Latest React with concurrent features and automatic batching
- **Vite 7.1.14**: Ultra-fast build tool with Rolldown integration
- **React Router DOM 7.13.2**: Declarative routing for SPA navigation
- **Bootstrap 5.3.8**: Utility-first CSS framework for responsive design
- **React Toastify 11.0.5**: Elegant notification system

### **State Management**
- **React Context API**: Global cart state without external libraries
- **useState & useEffect**: Local component state management
- **useMemo & useCallback**: Performance optimization for expensive operations
- **localStorage**: Persistent data storage with error handling

### **Project Structure**
```
src/
├── Components/           # Reusable UI components
│   ├── Cart/            # Shopping cart logic and UI
│   ├── Course/          # Course card component
│   └── Navbar/          # Navigation with dropdowns
├── context/             # Global state management
│   └── CartContext.jsx  # Cart provider and hooks
├── fakeData/            # Mock data layer
│   └── fakeData.js      # Courses and instructor data
├── pages/               # Main application views
│   ├── Home/            # Landing page with catalog
│   └── Content/         # Explore/Resources/Instructors pages
├── styles/              # Global styling
│   ├── App.css          # Layout and containers
│   └── index.css        # Color palette and variables
├── utils/               # Helper functions
│   ├── cartPricing.js   # Pricing calculations
│   └── storage.js       # localStorage utilities
└── App.jsx              # Root component with routing
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser with ES6+ support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/learnhub.git
   cd learnhub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Run tests**
   ```bash
   npm test
   ```

6. **Lint code**
   ```bash
   npm run lint
   ```

## 🧪 Testing Focus

The test suite currently covers:
- Home page rendering
- Keyboard-accessible navigation to nested routes
- Add-to-cart behavior and price calculations
- Safe rendering when storage access throws

## 📝 Notes

- Course data is static and stored in `src/fakeData/fakeData.js`.
- Checkout and "save for later" are intentionally placeholder interactions.
- Images are loaded from external CDNs, so offline rendering will not show course artwork.

---

**Built with ❤️ using React 19, Vite, and modern web technologies**
