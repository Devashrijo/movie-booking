import "./SeatSection.css";

function SeatSection({
  title,
  rows = [],
  seatsPerRow,
  color,
  seatPrice,
  selectedSeats,
  onSeatSelect,
}) {
  return (
    <div className="seats-container">
      <h3 className="section-title">
        {title} (₹{seatPrice.toFixed(2)} + GST)
      </h3>

      <div className="seat-grid">
        {rows.map((row) => (
          <div key={row} className="seat-row">
            <span className="row-label left">{row}</span>

            <div className="seat-row-inner">
              {Array.from({ length: seatsPerRow }).map((_, i) => {
                const seatId = `${row}${i + 1}`;
                const isSelected = selectedSeats.some((s) => s.id === seatId);

                return (
                  <div
                    key={seatId}
                    className={`seat ${isSelected ? "selected" : ""}`}
                    style={{
                      backgroundColor: isSelected ? "#e50914" : color,
                    }}
                    onClick={() =>
                      onSeatSelect({
                        id: seatId,
                        type: title,
                        price: seatPrice,
                      })
                    }
                  >
                    {seatId}
                  </div>
                );
              })}
            </div>

            <span className="row-label right">{row}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatSection;
