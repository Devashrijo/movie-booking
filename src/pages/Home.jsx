import React, { useRef } from "react";
import FilterBox from "../components/FilterBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import OfferSection from "../components/OfferSection";
import QuickBook from "../components/QuickBook";
import Tabs from "../components/Tabs";
import TrailerSection from "../components/TrailerSection";
import "./../App.css";

function Home() {
  // Refs for sections
  const nowShowingRef = useRef(null);
  const upcomingRef = useRef(null);
  const trailersRef = useRef(null);
  const offersRef = useRef(null);

  // Function to scroll to section
  const scrollToSection = (section) => {
    if (section === "NowShowing" && nowShowingRef.current) {
      nowShowingRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Upcoming" && upcomingRef.current) {
      upcomingRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Trailers" && trailersRef.current) {
      trailersRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Offers" && offersRef.current) {
      offersRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const movieData = [
    {
      status: "Re-release",
      title: "Dear Zindagi",
      certificate: "UA 16+",
      duration: "2h 49m",
      releaseDate: "Thursday, Nov 29, 2025",
      genre: "Drama, Comedy",
      language: "Hindi, Kannada, English",
      description:
        "A young, ambitious cinematographer struggling with relationship problems and emotional turmoil...",
      poster: "/images/poster.jpg",
      bg: "/images/poster.jpg",
    },
    {
      status: "New Release",
      title: "Kantara 2",
      certificate: "UA 18+",
      duration: "2h 25m",
      releaseDate: "Friday, Nov 30, 2025",
      genre: "Mythological, Action",
      language: "Hindi, English, Telugu, Marathi",
      description:
        "During the reign of Kadamba’s, the first dynasty of Karnataka, Bangra, a fictional feudatory ruled by King Vijayendra...",
      poster: "/images/poster2.jpg",
      bg: "/images/poster2.jpg",
    },
    {
      status: "Upcoming",
      title: "Avatar",
      certificate: "UA 18+",
      duration: "1h 25m",
      releaseDate: "Friday, Dec 6, 2025",
      genre: "Thriller, Action",
      language: "Hindi, English, Telugu, Marathi",
      description:
        "During the reign of Kadamba’s, the first dynasty of Karnataka, Bangra, a fictional feudatory ruled by King Vijayendra...",
      poster: "/images/poster3.jpg",
      bg: "/images/poster3.jpg",
    },
  ];

  const movies = [
    {
      id: 1,
      name: "Kantara Part2",
      poster: "/images/poster2.jpg",
      language: "Hindi , English ,Telgue",
      genre: "Mythological,Drama",
    },
    {
      id: 2,
      name: "Conjuring-The Last Rites",
      poster: "/images/poster4.jpg",
      language: "Hindi , English",
      genre: "Horror,Drama",
    },
    {
      id: 3,
      name: "Dear Zindagi",
      poster: "/images/poster.jpg",
      language: "Hindi , English ,Telgue",
      genre: "Mythological,Drama",
    },
    {
      id: 4,
      name: "Sunny Sanskari ki Tulsi Kumari",
      poster: "/images/poster5.jpg",
      language: "Hindi",
      genre: "Drama,Romance",
    },
    {
      id: 5,
      name: "Zindagi Na milege Dubara",
      poster: "/images/poster6.jfif",
      language: "Hindi",
      genre: "Romance,Drama",
    },
    {
      id: 6,
      name: "Yeh jawani hai dewaani",
      poster: "/images/poster7.jpg",
      language: "Hindi",
      genre: "Romance,Drama",
    },
    {
      id: 7,
      name: "DDLJ",
      poster: "/images/poster8.jfif",
      language: "Hindi",
      genre: "Romance,Drama",
    },
    {
      id: 8,
      name: "Mumbai Pune Mumbai",
      poster: "/images/poster9.jfif",
      language: "Marathi",
      genre: "Romance,Drama",
    },
  ];

  const upcomingMovies = [
    {
      id: 101,
      name: "Avengers: Secret Wars",
      poster: "/images/upcoming1.jpeg",
      language: "English, Hindi",
      genre: "Action, Sci-Fi",
    },
    {
      id: 102,
      name: "KGF Chapter 3",
      poster: "/images/upcoming2.avif",
      language: "Kannada, Hindi, English",
      genre: "Action, Drama",
    },
    {
      id: 103,
      name: "War 2",
      poster: "/images/upcoming3.jfif",
      language: "Hindi",
      genre: "Action, Thriller",
    },
  ];

  return (
    <>
      <Header />
      <Hero movies={movieData} />
      {/* <QuickBook /> */}
      <Tabs scrollToSection={scrollToSection} />
      <div ref={nowShowingRef}>
        <FilterBox title="Now Showing" showFilters={false} />
        <div className="movie-list">
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </div>
      <div ref={upcomingRef} className="upcoming-section">
        <FilterBox title="Upcoming Movies" showFilters={false} />
        <div className="movie-list">
          {upcomingMovies.map((m) => (
            <MovieCard key={m.id} movie={m} showBookButton={false} />
          ))}
        </div>
      </div>

      <div ref={trailersRef}>
        <FilterBox title="Trailers" showFilters={false} />
        <TrailerSection />
      </div>
      <div ref={offersRef}>
        <FilterBox title="Offers" showFilters={false} />
        <OfferSection />
      </div>
      <Footer />
    </>
  );
}

export default Home;
