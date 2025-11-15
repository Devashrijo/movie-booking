import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie, showBookButton = true }) {
  const navigate = useNavigate();

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <h2 className="movie-name">{movie.name}</h2>
      <h5 className="movie-language">{movie.language}</h5>
      <h5 className="movie-genre">{movie.genre}</h5>

      {showBookButton && (
        <button className="book-btn" onClick={() => navigate("/bookshow")}>
          Book Now
        </button>
      )}
    </div>
  );
}

export default MovieCard;
