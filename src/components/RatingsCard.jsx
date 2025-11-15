import React, { useState } from "react";
import "./RatingsCard.css";
import { FaStar, FaRegCommentDots } from "react-icons/fa";

const RatingsCard = ({ movie }) => {
  const [showComments, setShowComments] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRating = (value) => setRating(value);
  const toggleComments = () => setShowComments(!showComments);

  return (
    <div className="ratings-container">
      <div className="rating-card">
        {/* Movie Title */}
        <h2 className="movie-title">{movie.name}</h2>

        {/* Movie Poster */}
        <img src={movie.poster} alt={movie.name} className="movie-poster" />

        {/* Movie Name Below Poster */}
        <h3 className="movie-name-below">{movie.name}</h3>

        {/* Star Rating Section */}
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              onClick={() => handleRating(star)}
              className={star <= rating ? "star active" : "star"}
            />
          ))}
        </div>

        {/* Comment Button (below stars) */}
        <button className="comment-btn" onClick={toggleComments}>
          <FaRegCommentDots className="comment-icon-inline" />
          Comments
        </button>

        {/* Book Now Button */}
        <button className="ratings-btn">Book Now</button>

        {/* Comments Dropdown */}
        {showComments && (
          <div className="comments-dropdown">
            {movie.comments.map((comment, index) => (
              <div key={index} className="comment-item">
                <img
                  src={comment.avatar}
                  alt={comment.user}
                  className="comment-avatar"
                />
                <div className="comment-details">
                  <p className="comment-user">{comment.user}</p>
                  <p className="comment-text">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingsCard;
