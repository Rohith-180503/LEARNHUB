# 🎓 LearnHub: The Full-Stack Education Ecosystem

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.14-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=flat&logo=express)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-3-003B57?style=flat&logo=sqlite)](https://www.sqlite.org/)
[![JWT](https://img.shields.io/badge/JWT-JSON%20Web%20Token-000000?style=flat&logo=json-web-tokens)](https://jwt.io/)

LearnHub is a state-of-the-art, full-stack online learning platform designed to provide a premium, seamless educational experience. It has evolved from a sophisticated frontend prototype into a robust, secure, and dynamic web application featuring a centralized Node.js backend and persistent data storage.

---

## 📖 Table of Contents
1. [Project Vision](#-project-vision)
2. [Full-Stack Architecture](#-full-stack-architecture)
3. [Core Technical Concepts](#-core-technical-concepts)
4. [Detailed File Structure](#-detailed-file-structure)
5. [Authentication & Security](#-authentication--security)
6. [Frontend Design System](#-frontend-design-system)
7. [Backend API Documentation](#-backend-api-documentation)
8. [Setup & Installation](#-setup--installation)
9. [Development Roadmap](#-development-roadmap)

---

## 🎯 Project Vision

The goal of LearnHub is to bridge the gap between static content and interactive learning. By combining a **high-performance React frontend** with a **secure Express backend**, we provide:
- **Persistence**: Your progress, cart, and profile are stored safely.
- **Security**: Industry-standard protection for user credentials and sessions.
- **Scalability**: A modular architecture ready for cloud deployment and payment integration.

---

## 🏗️ Full-Stack Architecture

LearnHub follows a modern **Client-Server Architecture**:

### **The Frontend (React + Vite)**
- Handles the **UI/UX**, rendering dynamic components based on the state.
- Communicates with the backend using **Fetch API** with `credentials: "include"` to handle secure cookies.
- Manages global state using the **React Context API** (Cart and Authentication).

### **The Backend (Node.js + Express)**
- Acts as the **REST API** gateway.
- Manages **Authentication** logic, JWT signing, and password hashing.
- Interfaces with the **SQLite Database** using the async `libsql` driver.

---

## 🧠 Core Technical Concepts

### **1. Secure JWT Auth via Cookies**
Unlike traditional `localStorage` tokens which are vulnerable to XSS (Cross-Site Scripting), LearnHub uses **httpOnly Cookies**.
- **Security**: JavaScript cannot access these cookies, making it impossible for malicious scripts to steal sessions.
- **Persistence**: The browser automatically sends the cookie with every request to the backend.

### **2. Password Hashing (Bcrypt)**
We never store raw passwords. Using `bcryptjs`, we perform **12 salt rounds** of hashing. Even if the database is compromised, user passwords remain mathematically unreadable.

### **3. Local Persistence (SQLite)**
For this phase, we chose **SQLite** because:
- **Serverless**: It stores the entire database in a single file (`learnhub.db`).
- **Speed**: Extremely fast for read-heavy applications like course catalogs.
- **Portability**: Perfect for development and easy to migrate to PostgreSQL for production.

### **4. Protected Routing**
We implemented a custom `<ProtectedRoute />` wrapper in React. It checks the `AuthContext` state. If a user isn't logged in, they are instantly redirected to `/login`, protecting premium content like the `CoursePlayer`.

---

## 📁 Detailed File Structure

### **📂 Root Directory**
- `.gitignore`: Configured to ignore `node_modules`, `.env`, and `.db` files.
- `package.json`: Manages frontend dependencies and scripts.

### **📂 backend/** (The Brain)
- `server.js`: The entry point. Configures **CORS** (to allow frontend communication), mounts routes, and initializes the database.
- `db.js`: The database layer. Uses `@libsql/client` to initialize the `users` table and handle SQL queries.
- `middleware/authenticate.js`: A gatekeeper that verifies the JWT token in cookies before allowing access to private data.
- `routes/auth.js`: Contains the logic for `register`, `login`, `logout`, and `me` (checking current session).

### **📂 src/** (The Heart)
- **📂 context/**:
  - `AuthContext.jsx`: Provides the global `user` state and functions like `login()` and `logout()`.
  - `CartContext.jsx`: Manages the shopping cart, total price calculations, and localStorage backup.
- **📂 components/**:
  - `Navbar/`: The navigation bar. Now dynamic—it changes its look when you log in.
  - `Cart/`: The premium slide-out cart UI.
  - `Course/`: Reusable course card components.
- **📂 pages/**:
  - `Login/`: A multi-mode page (Login vs. Register) with real API validation.
  - `CoursePlayer/`: The learning environment, now protected behind the Auth wall.
  - `Home/`: The landing page showcasing the course catalog.

---

## 🔐 Authentication & Security

### **Registration Flow**
1. User enters name, email, and password.
2. Frontend sends a `POST` request to `/api/auth/register`.
3. Backend checks if the email exists, hashes the password, and saves to SQLite.
4. Backend generates a JWT and sends it back in a secure cookie.

### **Login Flow**
1. User enters email and password.
2. Backend compares the password hash.
3. If valid, a new JWT cookie is issued.
4. React `AuthContext` updates, and the user is redirected to the home page.

---

## 🎨 Frontend Design System

LearnHub uses a **Glassmorphism Design System**:
- **Backgrounds**: Subtle translucency using `backdrop-filter: blur()`.
- **Typography**: Uses modern, readable fonts with hierarchical sizing.
- **Theming**: Integrated Dark/Light mode that syncs with user preferences and survives refreshes.
- **Grid System**: Responsive Flexbox and Grid layouts that adapt from mobile phones to 4K monitors.

---

## 🔌 Backend API Documentation

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/register` | Creates a new user account | No |
| `POST` | `/api/auth/login` | Authenticates user & sets cookie | No |
| `POST` | `/api/auth/logout` | Clears the session cookie | No |
| `GET` | `/api/auth/me` | Returns current user profile | **Yes** |
| `GET` | `/api/health` | Checks if the server is alive | No |

---

## 🚀 Setup & Installation

Follow these steps to get your own instance of LearnHub running:

### **1. Clone & Install**
```bash
git clone https://github.com/Rohith-180503/LEARNHUB.git
cd LEARNHUB

# Install Frontend
npm install

# Install Backend
cd backend
npm install
```

### **2. Environment Configuration**
Create a file named `.env` in the `backend/` folder:
```env
PORT=3001
JWT_SECRET=your_super_secret_key_here
FRONTEND_URL=http://localhost:5173
```

### **3. Execution**
You must run both servers at the same time.

**Terminal 1 (Backend):**
```bash
cd backend
node server.js
```

**Terminal 2 (Frontend):**
```bash
# In the root folder
npm run dev
```

---

## 🔑 Demo Credentials

To quickly test the platform's full-stack features without registering, you can use the following account:
- **Email**: `sivarohithnn@gmail.com`
- **Password**: `Rohith@123`

---

## 🗺️ Development Roadmap

- [x] **Phase 1**: Professional UI/UX Prototype.
- [x] **Phase 2**: Global State (Cart & Themes).
- [x] **Phase 3**: Full-Stack Authentication & SQLite Integration.
- [ ] **Phase 4**: Database-backed Course Catalog & Search.
- [ ] **Phase 5**: Stripe Payment Gateway Integration.
- [ ] **Phase 6**: Instructor CMS (Upload & Manage Courses).

---

**LearnHub is more than a project; it's a foundation for modern, scalable education technology.**

*Built with ❤️ by Rohith-180503 & Antigravity AI*
