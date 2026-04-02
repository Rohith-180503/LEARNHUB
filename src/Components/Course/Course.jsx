

const Course = ({ course, addToCart, cart }) => {
  const { title, instructor, price, img } = course;

  const isEnrolled = cart.some(item => item.id === course.id);

  return (
    <div className="course-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>Instructor: {instructor}</p>
      <p>${price}</p>

      <button
        onClick={() => addToCart(course)}
        disabled={isEnrolled}
      >
        {isEnrolled ? "Enrolled" : "Enroll"}
      </button>
    </div>
  );
};

export default Course;
