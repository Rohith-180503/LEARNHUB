import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import Course from "../../Components/Course/Course";
import CourseReviews from "../../Components/Reviews/CourseReviews";
import { ENDPOINTS } from "../../config";

const API = ENDPOINTS.COURSES;
import "./CourseDetail.css";

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const [course, setCourse] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourseData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API}/${courseId}`);
        const data = await res.json();
        if (res.ok) {
          setCourse(data);
          // Fetch related courses separately or use category from data
          const relRes = await fetch(`${API}?category=${data.category}`);
          const relData = await relRes.json();
          setRelatedCourses(relData.filter(c => c.id !== Number(courseId)).slice(0, 4));
        }
      } catch (e) {
        console.error("Failed to fetch course:", e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourseData();
  }, [courseId]);

  if (isLoading) {
    return <div className="course-detail-container loading">Loading course details...</div>;
  }

  if (!course) {
    return (
      <div className="course-detail-container">
        <div className="course-not-found">
          <h1>Course Not Found</h1>
          <p>The course you're looking for doesn't exist.</p>
          <button onClick={() => navigate("/")} className="btn-back">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const isInCart = cart.some(item => item.id === course.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(course);
    }
  };

  return (
    <div className="course-detail-container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <button onClick={() => navigate("/")} className="breadcrumb-link">
          Home
        </button>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{course.title}</span>
      </div>

      {/* Course Header */}
      <div className="course-detail-header">
        <div className="course-detail-image">
          <img src={course.img} alt={course.title} />
        </div>

        <div className="course-detail-info">
          <h1>{course.title}</h1>

          <div className="course-meta">
            <span className="instructor">👤 {course.instructor}</span>
            <span className="rating">⭐ {course.rating} Rating</span>
            <span className="students">👥 {(course.students_enrolled || 0).toLocaleString()} students</span>
          </div>

          <p className="course-description">{course.description}</p>

          {/* Course Stats */}
          <div className="course-stats">
            <div className="stat">
              <span className="stat-label">Duration:</span>
              <span className="stat-value">{course.duration}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Level:</span>
              <span className={`stat-value level-${course.level}`}>
                {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
              </span>
            </div>
            <div className="stat">
              <span className="stat-label">Category:</span>
              <span className="stat-value">{course.category.replace("-", " ")}</span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="course-cta">
            <div className="price">${course.price}</div>
            <button
              onClick={handleAddToCart}
              className={`btn-add-to-cart ${isInCart ? "in-cart" : ""}`}
              disabled={isInCart}
            >
              {isInCart ? "✓ In Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <div className="related-courses-section">
          <h2>Related Courses</h2>
          <p className="related-description">
            Other courses in the {course.category.replace("-", " ")} category
          </p>
          <div className="related-courses-grid">
            {relatedCourses.map(relatedCourse => (
              <Course key={relatedCourse.id} course={relatedCourse} />
            ))}
          </div>
        </div>
      )}

      {/* Course Reviews */}
      <CourseReviews courseId={course.id} />
    </div>
  );
}
