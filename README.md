# 🎓 LearnHub: The Master-Class Full-Stack Education Ecosystem

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.14-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat&logo=express)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-3-003B57?style=flat&logo=sqlite)](https://www.sqlite.org/)
[![JWT](https://img.shields.io/badge/JWT-JSON%20Web%20Token-000000?style=flat&logo=json-web-tokens)](https://jwt.io/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-008CDD?style=flat&logo=stripe)](https://stripe.com/)

---

## 📖 Complete Technical Manual

LearnHub is a professional-grade, full-stack online learning platform. This project represents a complete transition from a static UI prototype to a high-performance, secure, and dynamic ecosystem. This document provides an exhaustive overview of the architecture, technology stack, and implementation details.

---

## 🧭 Table of Contents
1.  [🌟 Project Overview](#-project-overview)
2.  [🛠️ The Tech Stack (In-Depth)](#-the-tech-stack-in-depth)
3.  [🏗️ System Architecture](#-system-architecture)
4.  [📂 Exhaustive File Structure](#-exhaustive-file-structure)
5.  [🔐 Logic & Core Workflows](#-logic--core-workflows)
    - [Authentication & Identity](#authentication--identity)
    - [Course Delivery & Progress](#course-delivery--progress)
    - [Cart Synchronization](#cart-synchronization)
    - [Payment Processing](#payment-processing)
6.  [🔌 API Reference](#-api-reference)
7.  [🚀 Setup & Deployment Guide](#-setup--deployment-guide)
8.  [🗺️ Future Roadmap](#-future-roadmap)

---

## 🌟 Project Overview

LearnHub is designed for ambitious learners who seek a premium educational experience. The platform features:
- **Dynamic Content**: 44+ courses with full curriculum mapping.
- **Persistence**: Real-time progress tracking and cross-device cart synchronization.
- **Security**: Industry-standard JWT cookie-based session management.
- **Commercial Ready**: Integrated Stripe payment infrastructure.

---

## 🛠️ The Tech Stack (In-Depth)

### **Frontend (The User Interface)**
| Technology | Usage | Why? |
| :--- | :--- | :--- |
| **React 19** | Core UI library | High performance, component-based architecture. |
| **Vite** | Build tool | Extremely fast HMR (Hot Module Replacement) for development. |
| **React Router 7** | Client-side routing | Handles nested routes and navigation guards. |
| **Context API** | Global state management | Manages `Auth` and `Cart` states without "prop drilling". |
| **Vanilla CSS** | Styling | Maximum flexibility and design control (Glassmorphism). |
| **React Toastify** | Notifications | Premium, non-blocking user feedback. |

### **Backend (The Logic Layer)**
| Technology | Usage | Why? |
| :--- | :--- | :--- |
| **Node.js** | Runtime environment | Scalable, non-blocking I/O for API handling. |
| **Express.js** | Web Framework | Minimalist and modular REST API foundation. |
| **JWT** | Session Tokens | Stateless authentication for high security. |
| **Bcrypt.js** | Password Hashing | One-way encryption for user security. |
| **Cookie-Parser** | Session Management | Handles `httpOnly` cookies for XSS protection. |
| **CORS** | Security Policy | Manages cross-origin communication with the frontend. |

### **Database (The Storage)**
| Technology | Usage | Why? |
| :--- | :--- | :--- |
| **SQLite 3** | Persistence | Serverless, portable, and extremely fast for development. |
| **@libsql/client** | Database Driver | Modern, async-first driver compatible with serverless environments. |

---

## 🏗️ System Architecture

LearnHub uses a **Decoupled Full-Stack Architecture**:

1.  **Client Layer**: React app makes secure `fetch` requests to the API.
2.  **API Gateway**: Express server validates requests, checks JWTs, and handles business logic.
3.  **Data Layer**: SQLite stores users, courses, and progress.
4.  **External Services**: Stripe handles payment processing via secure webhooks.

---

## 📂 Exhaustive File Structure

### **📂 Root Directory**
- `package.json`: Main project configuration and scripts.
- `.gitignore`: Carefully tuned to protect database files and secrets.

### **📂 backend/** (The Brain)
- `server.js`: The heart of the backend. Registers middleware (CORS, JSON, Cookies) and mounts all feature-specific routers.
- `db.js`: The database interface. Defines the SQL schema for 7 tables and initializes the `@libsql` client.
- `seed.js`: An intelligent automation script that populates the DB with courses, modules, and lessons.
- **📂 routes/**:
  - `auth.js`: Logic for registration, login, logout, and Google OAuth callback.
  - `courses.js`: Efficient SQL queries for fetching the catalog and course curriculum.
  - `enrollments.js`: Manages user ownership of courses.
  - `progress.js`: Tracks which specific lessons a user has finished.
  - `cart.js`: Synchronizes the local browser cart with the server.
  - `payments.js`: Interface for Stripe Checkout and Webhook listeners.
- **📂 middleware/**:
  - `authenticate.js`: A gatekeeper that decodes JWT cookies and attaches the `user` object to the request.

### **📂 src/** (The Heart)
- **📂 context/**:
  - `AuthContext.jsx`: Global provider for user identity, social login, and password recovery.
  - `CartContext.jsx`: Global manager for shopping logic and backend sync.
- **📂 pages/**:
  - `Home/`: Dynamic catalog with server-side search and filtering.
  - `CourseDetail/`: Deep-dive view with curriculum and related suggestions.
  - `CoursePlayer/`: Secure environment for watching lessons and tracking progress.
- **📂 Components/**: Shared UI elements like Navbar, Footer, and Course Cards.
- **📂 styles/**: The Design System (CSS variables, animations, Glassmorphism).

---

## 🔐 Logic & Core Workflows

### **Authentication & Identity**
We use **httpOnly JWT Cookies**. When a user logs in, the backend signs a token and sets it in the browser cookie. This cookie is marked `httpOnly`, meaning JavaScript cannot read it, which completely eliminates XSS session theft.

### **Course Delivery & Progress**
1.  Frontend requests `api/courses/:id`.
2.  Backend joins `courses`, `modules`, and `lessons` tables to build a full curriculum tree.
3.  When a user finishes a video, a `POST` is sent to `api/progress`.
4.  The database records the completion, which is re-applied to the UI next time the user logs in.

### **Cart Synchronization**
To provide a seamless experience, we implemented a **Sync-on-Login** strategy. If a user adds items as a guest and then logs in, the platform automatically pushes those items to the database so their cart follows them to any other device.

### **Payment Processing**
Using **Stripe Checkout**, the backend generates a secure URL for the user. Once the payment is confirmed, a Stripe Webhook sends a message back to our server, which automatically grants the user access to the courses in the `enrollments` table.

---

## 🔌 API Reference

| Endpoint | Method | Purpose | Auth Required |
| :--- | :--- | :--- | :--- |
| `/api/auth/register` | `POST` | Create a new user | No |
| `/api/auth/login` | `POST` | Auth & set JWT cookie | No |
| `/api/courses` | `GET` | Fetch catalog (w/ filters) | No |
| `/api/courses/:id` | `GET` | Get full curriculum | No |
| `/api/enrollments/me` | `GET` | Get owned courses | **Yes** |
| `/api/progress/:id` | `POST` | Mark lesson completed | **Yes** |
| `/api/cart/sync` | `POST` | Sync cart to DB | **Yes** |
| `/api/payments/create` | `POST` | Start Stripe checkout | **Yes** |

---

## 🚀 Setup & Deployment Guide

### **1. Local Installation**
```bash
# Clone the repo
git clone https://github.com/Rohith-180503/LEARNHUB.git
cd LEARNHUB

# Install all dependencies
npm install
cd backend && npm install
```

### **2. Database Initialization**
```bash
# Run the seed script to populate courses
node seed.js
```

### **3. Running the Platform**
Run the backend on port `3001` and the frontend on port `5173`.
```bash
# Terminal 1
npm run dev

# Terminal 2
cd backend && node server.js
```

---

## 🗺️ Future Roadmap
- [ ] **Phase 6**: Instructor CMS (Dashboard for creating content).
- [ ] **Phase 7**: Real-time Q&A system using WebSockets.
- [ ] **Phase 8**: AI-powered course recommendations based on progress.

---

**LearnHub is a production-ready foundation for the future of digital education.**

*Crafted by Rohith-180503 & Antigravity AI*
