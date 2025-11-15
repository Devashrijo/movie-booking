import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import
import "./Hero.css";

function Hero({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const currentMovie = movies[currentIndex];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [movies.length, isPaused]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${currentMovie.bg})`,
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <div className="hero-info">
          <button
            className={`status-badge ${currentMovie.status
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            {currentMovie.status}
          </button>

          <h1>{currentMovie.title}</h1>
          <p>{currentMovie.description}</p>

          <div className="hero-details">
            <span>{currentMovie.certificate}</span> •{" "}
            <span>{currentMovie.duration}</span> •{" "}
            <span>{currentMovie.releaseDate}</span> •{" "}
            <span>{currentMovie.genre}</span>
          </div>

          <p>{currentMovie.language}</p>

          {/* ✅ Navigate to BookShow on click */}
          <button className="book-btn" onClick={() => navigate("/bookShow")}>
            Book
          </button>
        </div>

        <div className="hero-poster">
          <img src={currentMovie.poster} alt={currentMovie.title} />
        </div>
      </div>

      <div className="dots-container">
        {movies.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
