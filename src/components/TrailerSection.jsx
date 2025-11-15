import { useState } from "react";
import "./TrailerSection.css";

function TrailerSection() {
  const trailers = [
    {
      id: 1,
      title: "Avengers-The Infinity Saga",
      image: "/images/upcoming1.jpeg",
      link: "https://youtu.be/tlbjBLAfQ8E?si=cKKVRfjCDeMY-en4",
    },
    {
      id: 2,
      title: "KGF Chapter-3",
      image: "/images/upcoming2.avif",
      link: "https://youtu.be/uxQpJG8iM0c?si=byu0X0uMx2u7xcNP",
    },
    {
      id: 3,
      title: "Kantara-Part 2",
      image: "/images/poster2.jpg",
      link: "https://youtu.be/ZYXJKDtjKvo?si=gGwfvrInkEeKpYCl",
    },
    {
      id: 4,
      title: "Conjuring-The Last Rites",
      image: "/images/poster4.jpg",
      link: "https://youtu.be/bMgfsdYoEEo?si=p4P70VouEOMOSW9u",
    },
    {
      id: 5,
      title: "Sunny Sanskari ki Tulsi Kumari",
      image: "/images/poster5.jpg",
      link: "https://youtu.be/9FUd-D4FWjw?si=kbofMj1ThUgCbFMN",
    },
    {
      id: 6,
      title: "Dear Zindagi",
      image: "/images/poster.jpg",
      link: "https://youtu.be/5DkO7ksXY8E?si=gEn4D1B6hmeGEA2i",
    },
    {
      id: 7,
      title: "Zindagi Na Milege Dubara",
      image: "/images/poster6.jfif",
      link: "https://youtu.be/FJrpcDgC3zU?si=o6EuJZIgE2kivmpd",
    },
    {
      id: 8,
      title: "Yeh Jawani Hai Dewaani",
      image: "/images/poster7.jpg",
      link: "https://youtu.be/Rbp2XUSeUNE?si=gEtCViO-fiMqBPCT",
    },
  ];

  const [currentTrailer, setCurrentTrailer] = useState(trailers[0]);

  const handleClick = (trailer) => {
    setCurrentTrailer(trailer);
  };

  const handlePlay = () => {
    window.open(currentTrailer.link, "_blank");
  };

  return (
    <div className="trailer-section">
      <div className="maintrailer">
        <img
          src={currentTrailer.image}
          alt={currentTrailer.title}
          className="main-image"
        />
        <button className="play-button" onClick={handlePlay}>
          ▶
        </button>
      </div>

      <div className="thumbnails-row">
        {trailers.map((trailer) => (
          <div
            key={trailer.id}
            className={`thumbnail ${
              currentTrailer.id === trailer.id ? "active" : ""
            }`}
            onClick={() => handleClick(trailer)}
          >
            <img src={trailer.image} alt={trailer.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrailerSection;
