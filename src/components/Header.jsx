import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);
  const navigate = useNavigate();

  const handleMicClick = async () => {
    try {
      if (!listening) {
        setListening(true);
        await client.initialize();
        await client.startContext();

        client.onSegmentChange((segment) => {
          if (segment.text) {
            setQuery(segment.text);
          }
        });
      } else {
        await client.stopContext();
        setListening(false);
      }
    } catch (error) {
      console.error("Mic error:", error);
      setListening(false);
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="header-container">
      <div className="header-content-box">
        <div className="circle-img">
          <img src="/images/movie-logo.webp" alt="logo" />
        </div>

        <span className="logo-name">Filmio</span>

        <div className="search-bar">
          <img
            src="/images/search-icon.png"
            alt="search"
            onClick={handleSearch}
            className="search-icon"
          />
          <input
            type="text"
            placeholder="Search Your Favorite Movie"
            className="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <img
            src="/images/mic-icon.png"
            alt="mic"
            onClick={handleMicClick}
            className={`mic-icon ${listening ? "listening" : ""}`}
          />
        </div>
      </div>

      <nav className={`header-right-side ${isOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/bookshow">BookShows</Link>
          </li>
          <li>
            <Link to="/ratings">Ratings</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/filmiocafe">FilmioCafe</Link>
          </li>
          <li>
            <Link to="/payment">Pay</Link>
          </li>
          <li>
            <Link to="/login">
              <img
                src="/images/login-icon.jfif"
                alt="login"
                className="login-icon"
              />
            </Link>
          </li>
        </ul>
      </nav>

      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
