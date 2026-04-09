# LearnHub - Online Learning Platform

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.14-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat&logo=bootstrap)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

LearnHub is a modern, high-performance online learning platform built with React 19 and Vite. It features a sophisticated user interface, dynamic course catalog, persistent shopping cart, and comprehensive content pages for resources and instructors.

![LearnHub Preview](./public/screenshot.png)

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

### **Development Tools**
- **ESLint 9.36.0**: Code linting and formatting
- **Vitest 3.2.4**: Fast unit testing framework
- **Testing Library**: Component testing utilities
- **PropTypes**: Runtime type checking for components

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

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Run tests**
   ```bash
   npm test
   ```

7. **Lint code**
   ```bash
   npm run lint
   ```

## 📖 Course Categories

### **Web Development**
- HTML & CSS Bootcamp
- Modern JavaScript from Scratch
- React.js Complete Guide
- Node.js Backend Development
- Full Stack Web Development
- Full Stack with Next.js & Server Components

### **Data Science & AI**
- Python for Everybody
- Data Structures & Algorithms
- Generative AI, LLMs & RAG Systems
- TensorFlow & Neural Network Design
- MLOps: Deploy & Monitor Models
- Data Engineering with Apache Spark & Kafka

### **Cloud & DevOps**
- Cloud Computing with AWS
- DevOps Fundamentals
- Terraform & Infrastructure as Code
- Kubernetes, Helm & GitOps Workflows
- Cybersecurity, Zero Trust & Cloud Hardening

### **Mobile & Systems**
- Kotlin & Modern Android Development
- iOS & SwiftUI App Architecture
- Rust Systems Programming & Performance
- Go: Microservices, gRPC & Concurrency
- Embedded Systems, RTOS & ARM Cortex

### **Engineering Disciplines**
- Power Electronics & Smart Grid Fundamentals
- Robotics, ROS 2 & Motion Planning
- CAD/CAM, AutoCAD & Parametric Modeling
- Structural Analysis: Steel, Concrete & Codes
- Process Design, Mass Balance & Unit Operations

## 👨‍🏫 Featured Instructors

LearnHub features a distinguished faculty of industry experts:

- **Dr. Alexander Sterling** - Principal Systems Architect
- **Sophia Varma** - Design Director & UX Strategy Lead
- **Dr. Hiroshi Tanaka** - AI Research Scientist
- **Elena Volkov** - Cybersecurity Director
- **Marcus Chen** - Head of MLOps
- **Jordan Okonkwo** - Blockchain Architect
- **Rachel Kim** - Principal Infrastructure Engineer
- **Tomas Alvarez** - Kubernetes Specialist
- **Amira Hassan** - Big Data Architect
- **Alex Rivera** - Full Stack Architect
- **Grace O'Connor** - Lead iOS Architect
- **Sanjay Patel** - Go Backend Lead

## 🛠️ Development Highlights

### **Performance Optimizations**
- **Memoization**: useMemo for expensive calculations, useCallback for event handlers
- **Code Splitting**: Dynamic imports for route-based code splitting
- **Image Optimization**: CDN-hosted tech icons for fast loading
- **Bundle Analysis**: Vite's built-in optimization for minimal bundle sizes

### **Accessibility Features**
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **ARIA Labels**: Proper labeling for screen readers
- **Focus Management**: Logical tab order and focus indicators
- **Color Contrast**: WCAG-compliant color ratios

### **Responsive Design**
- **Mobile-First**: Progressive enhancement from mobile to desktop
- **Flexible Grid**: CSS Grid and Flexbox for adaptive layouts
- **Touch-Friendly**: Appropriate touch targets for mobile devices
- **Cross-Browser**: Tested across modern browsers

### **State Management Patterns**
- **Context Provider**: Centralized cart state with reducer-like patterns
- **Custom Hooks**: Reusable logic for cart operations
- **Error Boundaries**: Graceful error handling for state operations
- **Persistence Layer**: Robust localStorage with fallback mechanisms

## 🧪 Testing Strategy

### **Unit Tests**
- Component rendering and props validation
- Hook functionality and state updates
- Utility function correctness
- Context provider behavior

### **Integration Tests**
- Cart operations end-to-end
- Navigation flow testing
- Form interactions and validation

## 📄 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run test suite with Vitest |
| `npm run lint` | Check code quality with ESLint |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the blazing-fast build tool
- **Bootstrap Team** for the utility-first CSS framework
- **DevIcons** for the beautiful technology icons
- **React Toastify** for the notification system

---

**Built with ❤️ using React 19, Vite, and modern web technologies**
- `npm run lint` runs ESLint

## Testing Focus

The test suite currently covers:

- home page rendering
- keyboard-accessible navigation to nested routes
- add-to-cart behavior and price calculations
- safe rendering when storage access throws

## Notes

- Course data is static and stored in `src/fakeData/fakeData.js`.
- Checkout and "save for later" are intentionally placeholder interactions.
- Images are loaded from external CDNs, so offline rendering will not show course artwork.
