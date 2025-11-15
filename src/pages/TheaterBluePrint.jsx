import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Bill from "../components/Bill";
import Header from "../components/Header";
import Screen from "../components/Screen";
import SeatSection from "../components/SeatSection";
import Footer from "../components/Footer";
import "./TheaterBluePrint.css";

function TheaterBluePrint() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const location = useLocation();
  const { movie, time } = location.state || {};

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

  const handleBooking = async () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat before booking.");
      return;
    }

    try {
      const totalAmount = selectedSeats.reduce(
        (acc, seat) => acc + (seatPrices[seat.type] || 250),
        0
      );

      await axios.post("http://localhost:8081/api/bookings", {
        user_id: 1, // temporary
        show_id: movie?.id || 1,
        seat_numbers: selectedSeats.map((s) => s.label).join(", "),
        total_amount: totalAmount,
        payment_status: "pending",
      });

      alert("🎉 Booking successful!");
      setSelectedSeats([]);
    } catch (err) {
      console.error(err);
      alert("Booking failed, please try again.");
    }
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

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={handleBooking}
              style={{
                backgroundColor: "#ff3b30",
                color: "#fff",
                border: "none",
                padding: "12px 30px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Confirm Booking
            </button>
          </div>
        </div>

        <div className="right-section">
          <Bill selectedSeats={selectedSeats} movie={movie} time={time} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TheaterBluePrint;
