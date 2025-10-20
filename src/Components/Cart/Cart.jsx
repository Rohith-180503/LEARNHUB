import React from 'react';

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, course) => sum + course.price, 0).toFixed(2);

  return (
    <div className="cart-panel">
      <h2>CART</h2>
      <hr />
      <h5>Enrolled Courses: <span>{cart.length}</span></h5>

      {cart.map(course => (
        <div key={course.id} className="course-item">
          <span>{course.title}</span>
          <span>${course.price}</span>
        </div>
      ))}

      <hr />
      <div className="total">
        <span>Total:</span>
        <span>${total}</span>
      </div>
    </div>
  );
};

export default Cart;
