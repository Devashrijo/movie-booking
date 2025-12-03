import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookShow.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BookShow() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    fetch("http://localhost:8081/api/movies")
      .then((res) => {
        if (!res.ok) throw new Error("Server error " + res.status);
        return res.json();
      })
      .then((data) => {
        // Ensure movies is always an array
        setMovies(Array.isArray(data) ? data : data.movies || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
        setError("Failed to load movies. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleTimeClick = (movie, time) => {
    navigate("/theater-blueprint", { state: { movie, time } });
  };

  return (
    <>
      <Header />

      <div className="bookshow-container">
        {loading && <p>Loading movies...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && movies.length === 0 && (
          <p>No movies available.</p>
        )}

        {!loading &&
          !error &&
          Array.isArray(movies) &&
          movies.map((movie) => (
            <div className="movie-box" key={movie.id}>
              <div className="poster-section">
                <img src={movie.poster_url} alt={movie.title} />
              </div>
              <div className="info-section">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-location">{movie.language}</p>
                <div className="timings">
                  {["10:00 AM", "1:30 PM", "5:00 PM", "9:00 PM"].map(
                    (time, i) => (
                      <button
                        key={i}
                        className="time-btn"
                        onClick={() => handleTimeClick(movie, time)}
                      >
                        {time}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      <Footer />
    </>
  );
}

export default BookShow;
