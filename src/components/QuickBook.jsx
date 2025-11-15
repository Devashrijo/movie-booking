import { useState } from "react";
import "./QuickBook.css";

function QuickBook() {
  const [selectedType, setSelectedType] = useState("Movie");
  const [formData, setFormData] = useState({
    movie: "",
    date: "",
    cinema: "",
    timing: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleBook = () => {
    alert(
      `Booking ${selectedType} with details:\n${JSON.stringify(
        formData,
        null,
        2
      )}`
    );
  };

  return (
    <div className="quick-book">
      <div className="type-select">
        <button
          className={selectedType === "Movie" ? "active" : ""}
          onClick={() => setSelectedType("Movie")}
        >
          Movie
        </button>
        <button
          className={selectedType === "Cinema" ? "active" : ""}
          onClick={() => setSelectedType("Cinema")}
        >
          Cinema
        </button>
      </div>

      <input
        type="text"
        name="movie"
        placeholder="Select Movie"
        value={formData.movie}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cinema"
        placeholder="Select Cinema"
        value={formData.cinema}
        onChange={handleChange}
      />
      <input
        type="time"
        name="timing"
        value={formData.timing}
        onChange={handleChange}
      />

      <button className="book-btn" onClick={handleBook}>
        Book
      </button>
    </div>
  );
}

export default QuickBook;
