import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData.js';
import Course from '../Course/Course.jsx';
import Cart from '../Cart/Cart.jsx';

const CourseInfo = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    if (!cart.find(c => c.id === course.id)) {
      setCart([...cart, course]);
    }
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <Cart cart={cart} />
      </div>

      <div className="col-md-8">
        <div className="course-grid">
          {fakeData.map(course => (
            <Course course={course} addToCart={addToCart} key={course.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
