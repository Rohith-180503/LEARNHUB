import React from 'react';

const Course = ({ course, addToCart }) => {
  const { title, instructor, price, img } = course;

  return (
    <div className="course-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>Instructor: {instructor}</p>
      <p>${price}</p>
      <button onClick={() => addToCart(course)}>Enroll</button>
    </div>
  );
};

export default Course;
