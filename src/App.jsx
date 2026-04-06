import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import CourseInfo from "./Components/CourseInfo/CourseInfo";
import {
  WebDevelopment,
  DataScience,
  CloudComputing,
  UiUxDesign,
  Blog,
  Community,
  SuccessStories,
  Instructors,
} from "./Pages/ContentPages";

function AppShell() {
  return (
    <div className="app-container">
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<CourseInfo />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/success-stories" element={<SuccessStories />} />
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
