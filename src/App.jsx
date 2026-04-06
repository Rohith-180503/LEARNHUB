import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import CourseInfo from "./Components/CourseInfo/CourseInfo";
import { WebDevelopment, DataScience, CloudComputing, UiUxDesign, Blog, Community, SuccessStories, Instructors } from "./Pages/ContentPages";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    if (!cart.find(item => item.id === course.id)) {
      setCart([...cart, course]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <Navbar cart={cart} removeFromCart={removeFromCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Routes>
        <Route path="/" element={<CourseInfo cart={cart} addToCart={addToCart} />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/instructors" element={<Instructors />} />
      </Routes>
    </div>
  );
}

export default App;
