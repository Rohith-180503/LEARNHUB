import { Navigate, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./styles/App.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import Home from "./pages/Home/Home";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import CoursePlayer from "./pages/CoursePlayer/CoursePlayer";
import Login from "./pages/Login/Login";
import {
  AllCourses,
  WebDevelopment,
  DataScience,
  CloudComputing,
  UiUxDesign,
  Blog,
  Community,
  SuccessStories,
  Documentation,
  Instructors,
} from "./pages/Content/ContentPages";

/**
 * Gates a route behind authentication.
 * Redirects to /login and stores the intended location so the user
 * is sent back after a successful sign-in.
 */
function ProtectedRoute({ children }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="auth-loading" role="status" aria-live="polite">
        <span className="auth-loading__spinner" aria-hidden="true" />
        <span>Loading…</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function AppShell() {
  return (
    <div className="app-container">
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/courses/:courseId" element={<CourseDetail />} />
        {/* ── Protected: must be logged in to watch a course ── */}
        <Route
          path="/learn/:courseId"
          element={
            <ProtectedRoute>
              <CoursePlayer />
            </ProtectedRoute>
          }
        />
        <Route path="/explore/all" element={<AllCourses />} />
        <Route path="/explore/web-development" element={<WebDevelopment />} />
        <Route path="/explore/data-science" element={<DataScience />} />
        <Route path="/explore/cloud-computing" element={<CloudComputing />} />
        <Route path="/explore/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/community" element={<Community />} />
        <Route path="/resources/success-stories" element={<SuccessStories />} />
        <Route path="/resources/documentation" element={<Documentation />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={2800}
        closeOnClick
        pauseOnHover
        role="alert"
        theme="colored"
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
