import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookShow.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BookShow() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  const handleTimeClick = (movie, time) => {
    navigate("/theater-blueprint", { state: { movie, time } });
  };

  return (
    <>
      <Header />
      <div className="bookshow-container">
        {movies.map((movie) => (
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
