# 🎓 LearnHub - Full-Stack Online Learning Platform

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.14-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat&logo=express)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-3-003B57?style=flat&logo=sqlite)](https://www.sqlite.org/)
[![JWT](https://img.shields.io/badge/JWT-JSON%20Web%20Token-000000?style=flat&logo=json-web-tokens)](https://jwt.io/)

LearnHub is a premium, full-stack online learning platform. Originally a frontend-heavy React application, it has been evolved into a production-ready ecosystem featuring a secure Node.js backend, JWT-based authentication, and a persistent SQLite database.

![LearnHub Preview](./public/screenshot.png)

---

## 🚀 Recent Major Milestone: Full-Stack Evolution (Phase 3)

The project has successfully transitioned from a static mockup to a **dynamic full-stack application**. Key technical implementations include:

- **🔐 Secure Authentication System**:
  - **JWT Cookie-based Sessions**: Authentication tokens are stored in `httpOnly` and `sameSite` cookies, protecting users from XSS and CSRF attacks.
  - **Password Security**: Implemented high-entropy hashing using `bcryptjs` (12 salt rounds) to ensure user data remains secure.
  - **Persistent Login**: Sessions survive page refreshes via an automated `/api/auth/me` check on app startup.
- **🛡️ Protected Content Architecture**:
  - **Gated Learning**: The `CoursePlayer` is now a protected route, requiring a valid session to access course videos and curriculum.
  - **Auth-Aware UI**: The Navbar dynamically transforms based on auth state, showing a "Sign In" button when guest, and a personalized User Menu with initials-avatar and dropdown when authenticated.
- **💾 Modern Backend Foundation**:
  - **Node.js & Express**: A scalable REST API architecture handles authentication and user state.
  - **SQLite with @libsql/client**: A lightweight yet powerful local database using the modern LibSQL driver (async/await compatible).
  - **Environment Configuration**: Secure management of secrets (JWT keys, database paths) via `.env` files.

---

## 🌟 Key Features

### 🔐 **Full-Stack Authentication**
- **User Registration & Login**: Real database-backed account creation.
- **Protected Routes**: Navigation guards that redirect unauthenticated users to login.
- **Auto-Session Restore**: Seamless user experience using persistent cookie tokens.
- **User Profile Menu**: Personalized dropdown with logout functionality.

### 🛒 **Advanced Shopping Cart System**
- **Persistent Cart State**: Cart contents survive browser refreshes.
- **Real-time Pricing**: Dynamic total calculations including tax and platform fees.
- **Toast Notifications**: Interactive feedback for all cart and auth actions.
- **Cart Flyout**: Premium slide-out UI for quick item management.

### 🎨 **Premium UI/UX Design**
- **Glassmorphism Aesthetic**: Modern translucent cards, vibrant gradients, and subtle micro-animations.
- **Dynamic Theming**: Dark/Light mode support with state persistence.
- **Responsive Layout**: Fluid experience across mobile, tablet, and desktop.
- **Rich Interaction**: Hover effects, smooth transitions, and intuitive navigation patterns.

### 📚 **Rich Educational Content**
- **Extensive Catalog**: 44+ courses across Web Dev, AI, Data Science, and Cloud Engineering.
- **Course Player Interface**: Dedicated learning environment with module navigation and curriculum tracking.
- **Instructor Profiles**: Deep dives into the experts behind the courses.

---

## 🏗️ Technical Architecture & File Structure

### **Project Directory Structure**
```
LEARNHUB/
├── backend/                # Node.js Express Server
│   ├── routes/             # API Endpoints (auth, etc.)
│   ├── middleware/         # Auth verification logic
│   ├── db.js               # SQLite & LibSQL initialization
│   ├── server.js           # Server entry point & middleware
│   └── learnhub.db         # Local SQLite database file
├── src/                    # React Frontend
│   ├── context/            # Global state (Auth, Cart)
│   ├── Components/         # Shared UI (Navbar, Cart, Course)
│   ├── pages/              # Main Views (Home, Login, Player)
│   ├── hooks/              # Custom React hooks (Theme, ClickOutside)
│   ├── utils/              # Logic helpers (Pricing, Filters)
│   └── styles/             # Global CSS & Design System
└── .gitignore              # Configured to exclude DBs and .env
```

### **The Stack**
- **Frontend**: React 19, Vite, React Router 7, Vanilla CSS, React Toastify.
- **Backend**: Node.js, Express, @libsql/client (SQLite).
- **Security**: JWT (Cookies), bcryptjs, CORS, Middleware guards.
- **Database**: SQLite (local persistence).

---

## 🚀 Getting Started

To run this project locally, you need to start both the **Backend** and the **Frontend** servers.

### 1. Prerequisites
- Node.js 18+ and npm.

### 2. Installation
Clone the repository and install dependencies in both folders:

```bash
# Clone the repo
git clone https://github.com/Rohith-180503/LEARNHUB.git
cd LEARNHUB

# Install Frontend dependencies
npm install

# Install Backend dependencies
cd backend
npm install
```

### 3. Running the Project
Open two terminals to run the servers concurrently:

**Terminal 1: Backend**
```bash
cd backend
node server.js
```
*Backend runs on: http://localhost:3001*

**Terminal 2: Frontend**
```bash
# Back in the root directory
npm run dev
```
*Frontend runs on: http://localhost:5173*

---

## 🧪 Testing & Linting

- **Run Tests**: `npm test` (Uses Vitest)
- **Lint Code**: `npm run lint` (Uses ESLint)

---

## 📝 Roadmap & Future Phases
- [ ] **Phase 4**: Database migration for Course Catalog (moving from `fakeData.js` to SQLite).
- [ ] **Phase 5**: Stripe Payment Integration for the Checkout flow.
- [ ] **Phase 6**: Instructor Dashboard & Content Management System.
- [ ] **Phase 7**: Real-time Q&A using WebSockets.

---

**Crafted with excellence by Antigravity AI for Rohith-180503**
