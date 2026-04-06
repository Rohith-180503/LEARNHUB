import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, course) => sum + course.price, 0);

  return (
    <div className="horizontal-cart">
      <div className="cart-left">
        <h3 className="cart-title">
          <span>🛒</span> My Cart
        </h3>
        
        <div className="cart-items-container">
          {cart.length === 0 ? (
            <span className="cart-empty">No courses enrolled yet.</span>
          ) : (
            cart.map(course => (
              <div key={course.id} className="course-chip">
                <span>{course.title}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(course.id)}
                  title="Remove Course"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="cart-right">
        <span className="cart-total-label">Total:</span>
        <span className="cart-total-price">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Cart;
