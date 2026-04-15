import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./styles/App.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import Home from "./pages/Home/Home";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
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

function AppShell() {
  return (
    <div className="app-container">
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/courses/:courseId" element={<CourseDetail />} />
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
    <CartProvider>
      <AppShell />
    </CartProvider>
  );
}

export default App;
