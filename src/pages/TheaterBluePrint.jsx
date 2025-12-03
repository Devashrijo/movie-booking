import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./TheaterBluePrint.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Screen from "../components/Screen";
import SeatSection from "../components/SeatSection";
import Bill from "../components/Bill"; // 🔥 ADDED

function TheaterBluePrint() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movie, time } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatPrices = {
    Classic: 87.62,
    Prime: 126.26,
    Recliner: 253.38,
  };

  const handleSeatSelect = (seat) => {
    setSelectedSeats((prev) =>
      prev.some((s) => s.id === seat.id)
        ? prev.filter((s) => s.id !== seat.id)
        : [...prev, seat]
    );
  };

  return (
    <>
      <Header />
      <div className="theater-container">
        <div className="left-section">
          <Screen />

          <SeatSection
            title="Classic"
            rows={["A", "B"]}
            seatsPerRow={17}
            color="#d3d3d3"
            seatPrice={seatPrices.Classic}
            selectedSeats={selectedSeats}
            onSeatSelect={handleSeatSelect}
          />

          <SeatSection
            title="Prime"
            rows={["C", "D", "E", "F", "G", "H", "I", "J", "K"]}
            seatsPerRow={17}
            color="#cfe8ff"
            seatPrice={seatPrices.Prime}
            selectedSeats={selectedSeats}
            onSeatSelect={handleSeatSelect}
          />

          <SeatSection
            title="Recliner"
            rows={["L", "M"]}
            seatsPerRow={17}
            color="#e0d1ff"
            seatPrice={seatPrices.Recliner}
            selectedSeats={selectedSeats}
            onSeatSelect={handleSeatSelect}
          />
        </div>

        {/* 🔥 BILL SECTION FIXED */}
        <div className="right-section">
          <Bill selectedSeats={selectedSeats} movie={movie} time={time} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TheaterBluePrint;
