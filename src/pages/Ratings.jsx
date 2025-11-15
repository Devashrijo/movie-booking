import React from "react";
import RatingsCard from "../components/RatingsCard.jsx";
import "../components/RatingsCard.css";
import "../components/Header.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import FilterBox from "../components/FilterBox";
const movies = [
  {
    name: "Sunny Sanskari ki Tulsi Kumari",
    poster: "./images/rating1.webp",
    comments: [
      {
        user: "Aarav",
        text: "Mind-blowing movie!",
        avatar: "/images/user1.webp",
      },
      {
        user: "Riya",
        text: "One of Nolan’s best works.",
        avatar: "/images/user2.webp",
      },
    ],
  },
  {
    name: "Conjuring-The Last Rites",
    poster: "/images/rating2.jfif",
    comments: [
      {
        user: "Raj",
        text: "Loved the visuals!",
        avatar: "/images/user3.jfif",
      },
      {
        user: "Neha",
        text: "Not that horror",
        avatar: "/images/user4.jfif",
      },
    ],
  },
  {
    name: "Jolly LLB-3",
    poster: "/images/rating3.jpg",
    comments: [
      {
        user: "Mohit",
        text: "Not Good to be watched for 3 hours",
        avatar: "/images/user5.jfif",
      },
    ],
  },
];

const Ratings = () => {
  return (
    <>
      <Header />
      <div className="ratings-page">
        <FilterBox title="Ratings" showFilters={false} />
        <div className="ratings-container">
          {movies.map((movie, index) => (
            <RatingsCard key={index} movie={movie} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Ratings;
