import { useState, useEffect } from "react";
import "./FilmioHeroSection.css";

const slides = [
  {
    image: "/images/fimilofood1.jfif",
    title: "Delicious Snacks & Popcorn",
    description:
      "Enjoy your favorite bites while watching the latest blockbusters!",
  },
  {
    image: "/images/fimilofood2.jfif",
    title: "Delightful Burgers",
    description: "You got the right bite and right taste of movie!",
  },
  {
    image: "/images/fimilofood3.jpg",
    title: "Refreshing Coffee",
    description: "A chill and hot sip is all that you need.",
  },
  {
    image: "/images/fimilofood4.jpg",
    title: "Mouth-watering Vada Pav",
    description: "That spicy and authentic taste we got you!",
  },
  {
    image: "/images/fimilofood5.jfif",
    title: "Chai, You, Me, and Our Favourite Movie",
    description: "Brewed with Warmth, Served with Love.",
  },
];

function FilmioHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="filmio-section"
      style={{ backgroundImage: `url(${currentSlide.image})` }}
    >
      <div className="overlay"></div>
      <div className="filmio-content">
        <h1>{currentSlide.title}</h1>
        <h4>{currentSlide.description}</h4>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default FilmioHeroSection;
