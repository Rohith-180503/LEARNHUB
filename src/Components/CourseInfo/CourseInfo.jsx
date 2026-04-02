import { useState } from "react";
import fakeData from "../../fakeData/fakeData";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";

const CourseInfo = () => {
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
    <div className="row p-4">
      <div className="col-md-4">
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>

      <div className="col-md-8">
        <div className="course-grid">
          {fakeData.map(course => (
            <Course
              key={course.id}
              course={course}
              addToCart={addToCart}
              cart={cart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
