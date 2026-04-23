import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";
import "./Course.css";

const Course = ({ course }) => {
  const { title, instructor, price, img, id, category, rating } = course;
  const { cart, addToCart } = useCart();

  const isEnrolled = cart.some((item) => item.id === course.id);
  const formattedPrice = typeof price === "number" ? `$${price.toFixed(2)}` : price;

  const handleEnroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isEnrolled) {
      toast.info(`"${title}" is already in your cart`);
      return;
    }
    addToCart(course);
    toast.success(`Added to cart: ${title}`);
  };

  return (
    <Link to={`/explore/courses/${id}`} className="course-card-link animate-fade-in">
      <article className="course-card">
        <div className="course-card__media">
          <img className="course-card__img" src={img} alt={`${title} course`} loading="lazy" />
        </div>
        <div className="course-card__body">
          <span className="course-card__category">{category.replace("-", " ")}</span>
          <h3 className="course-card__title">{title}</h3>
          <p className="course-card__instructor">
            By <span className="course-card__instructor-name">{instructor}</span>
          </p>
          
          <div className="course-card__footer">
            <span className="course-card__price">{formattedPrice}</span>
            {rating && (
              <div className="course-card__rating">
                <span className="star-icon">Ôÿà</span>
                <span>{rating}</span>
              </div>
            )}
          </div>

          <button
            type="button"
            className="course-card__action"
            onClick={handleEnroll}
            disabled={isEnrolled}
          >
            {isEnrolled ? (
              <>Ô£ô In Cart</>
            ) : (
              <>+ Add to Cart</>
            )}
          </button>
        </div>
      </article>
    </Link>
  );
};

export default Course;
