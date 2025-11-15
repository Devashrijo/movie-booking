import "./Bill.css";
import { useNavigate } from "react-router-dom";

const gstRate = 0.18; // 18%

function Bill({ selectedSeats, movie, time }) {
  const navigate = useNavigate();

  const subtotal = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  const gst = subtotal * gstRate;
  const total = subtotal + gst;

  const handleProceed = () => {
    navigate("/payment", {
      state: {
        movie,
        time,
        selectedSeats,
        subtotal,
        gst,
        total,
      },
    });
  };

  return (
    <div className="bill-container">
      {movie ? (
        <div className="bill-movie-info">
          <img
            src={movie.poster_url}
            alt={movie.title}
            className="bill-movie-poster"
          />
          <div>
            <h2 className="bill-movie-name">{movie.title}</h2>
            <p className="bill-location">{movie.language}</p>
            {time && <p className="bill-time">Show Time: {time}</p>}
          </div>
        </div>
      ) : (
        <p>No movie selected</p>
      )}

      <hr className="bill-divider" />

      <h3>Booking Summary</h3>

      {selectedSeats.length > 0 ? (
        <>
          <ul className="seat-list">
            {selectedSeats.map((seat) => (
              <li key={seat.id}>
                {seat.label} – {seat.type} (₹{seat.price.toFixed(2)})
              </li>
            ))}
          </ul>

          <div className="price-breakdown">
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>GST (18%): ₹{gst.toFixed(2)}</p>
            <h3>Grand Total: ₹{total.toFixed(2)}</h3>
          </div>

          <button className="proceed-btn" onClick={handleProceed}>
            Proceed to Pay
          </button>
        </>
      ) : (
        <p>No seats selected yet.</p>
      )}
    </div>
  );
}

export default Bill;
