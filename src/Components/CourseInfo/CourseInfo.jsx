import fakeData from "../../fakeData/fakeData";
import Course from "../Course/Course";

const CourseInfo = ({ cart, addToCart }) => {
  return (
    <div className="container p-4">
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
  );
};

export default CourseInfo;
