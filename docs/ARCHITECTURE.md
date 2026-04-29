# LearnHub Architecture

## Core Design
LearnHub follows a **Decoupled Full-Stack Architecture**, ensuring clear separation of concerns between the frontend presentation and backend logic.

### 1. Frontend (Presentation Layer)
- **Framework**: React 19 (Vite)
- **State Management**: React Context API (AuthContext, CartContext)
- **Styling**: Vanilla CSS with modern tokens.
- **Routing**: React Router 7.

### 2. Backend (Logic Layer)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Auth**: JWT stored in `httpOnly` cookies.
- **Middleware**: `cookie-parser`, `cors`, `express.json`.

### 3. Data Layer (Persistence)
- **Database**: SQLite 3
- **Driver**: `@libsql/client`
- **Schema**:
    - `users`: Credentials and profiles.
    - `courses`: Master list of educational content.
    - `lessons`: Content associated with courses.
    - `enrollments`: User ownership of courses.
    - `progress`: Lesson completion tracking.

### 4. External Integrations
- **Payments**: Stripe Checkout and Webhooks.
- **Deployment**: Configured for Vercel (Frontend) and Render (Backend).
