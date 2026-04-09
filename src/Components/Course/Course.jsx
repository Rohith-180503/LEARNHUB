import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";
import "./Course.css";

const Course = ({ course }) => {
  const { title, instructor, price, img } = course;
  const { cart, addToCart } = useCart();

  const isEnrolled = cart.some((item) => item.id === course.id);
  const priceLabel =
    typeof price === "number" ? price.toFixed(2) : String(price);

  const handleEnroll = () => {
    if (isEnrolled) return;
    addToCart(course);
    toast.success(`Added to cart: ${title}`);
  };

  return (
    <article className="course-card">
      <div className="course-card__media">
        <img className="course-card__img" src={img} alt={`${title} course`} />
      </div>
      <div className="course-card__body">
        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__instructor">
          Instructor
          <span className="course-card__instructor-name">{instructor}</span>
        </p>
        <div className="course-card__footer">
          <p className="course-card__price">
            Price
            <span className="course-card__price-value">${priceLabel}</span>
          </p>
          <button
            type="button"
            className="course-card__cta"
            onClick={handleEnroll}
            disabled={isEnrolled}
          >
            {isEnrolled ? "In cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Course;
