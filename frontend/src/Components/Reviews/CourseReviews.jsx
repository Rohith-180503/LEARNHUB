import { useState } from "react";
import "./CourseReviews.css";

const MOCK_REVIEWS = [
  { id: 1, userId: "u1", name: "Sarah Jenkins", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", rating: 5, date: "2 months ago", text: "Absolutely incredible course! The instructor explains complex topics with such clarity. I was able to land a job using these exact skills." },
  { id: 2, userId: "u2", name: "David Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David", rating: 4, date: "3 weeks ago", text: "Great content and projects. Some of the setup instructions were a bit outdated, but overall very valuable." },
  { id: 3, userId: "u3", name: "Emily Rodriguez", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily", rating: 5, date: "1 month ago", text: "The depth of this course is unmatched. Highly recommended for anyone serious about this field." },
];

export default function CourseReviews({ courseId }) {
  const [reviews, setReviews] = useState(MOCK_REVIEWS);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;

    const review = {
      id: Date.now(),
      userId: "u999",
      name: "Guest User",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Guest",
      rating,
      date: "Just now",
      text: newReview
    };

    setReviews([review, ...reviews]);
    setNewReview("");
    setRating(5);
  };

  const averageRating = (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="course-reviews-container">
      <div className="reviews-header">
        <h2>Student Feedback</h2>
        <div className="reviews-summary">
          <div className="summary-rating">
            <span className="big-rating">{averageRating}</span>
            <div className="star-display">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`star ${star <= Math.round(averageRating) ? 'filled' : ''}`}>★</span>
              ))}
            </div>
            <span className="rating-count">Course Rating</span>
          </div>
        </div>
        </div>

      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-avatar">
              <img src={review.avatar} alt={review.name} />
            </div>
            <div className="review-content">
              <div className="review-meta">
                <span className="review-author">{review.name}</span>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="star-display small">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={`star ${star <= review.rating ? 'filled' : ''}`}>★</span>
                ))}
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
