import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PaymentCard.css";

function PaymentCard({
  userId = 1,
  movie,
  selectedSeats = [],
  subtotal,
  gst,
  total,
  item,
}) {
  const [method, setMethod] = useState("digital");
  const [showQR, setShowQR] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const cleanPrice = (price) => {
    if (!price) return 0;
    const numeric = parseFloat(String(price).replace(/[^\d.]/g, ""));
    return isNaN(numeric) ? 0 : numeric;
  };

  const safeSubtotal = subtotal ?? cleanPrice(item?.price);
  const safeGst = gst ?? safeSubtotal * 0.18;
  const safeTotal = total ?? safeSubtotal + safeGst;

  const subtotalFixed = Number.isFinite(safeSubtotal) ? safeSubtotal : 0;
  const gstFixed = Number.isFinite(safeGst) ? safeGst : 0;
  const totalFixed = Number.isFinite(safeTotal) ? safeTotal : 0;

  const applyCoupon = () => {
    if (coupon === "MOVIE50") {
      const newTotal = totalFixed * 0.5;
      setDiscount(totalFixed * 0.5);
      setFinalTotal(newTotal);
      alert("🎉 50% Discount Applied!");
    } else if (coupon === "MOVIE20") {
      const newTotal = totalFixed * 0.8;
      setDiscount(totalFixed * 0.2);
      setFinalTotal(newTotal);
      alert("🎉 20% Discount Applied!");
    } else {
      alert("❌ Invalid Coupon Code!");
      setDiscount(0);
      setFinalTotal(totalFixed);
    }
  };

  const handlePayment = async () => {
    const paymentData = {
      name,
      cardNumber,
      expiry,
      cvv,
      amount: finalTotal || totalFixed,
    };

    try {
      // Send payment request
      const paymentRes = await axios.post(
        "http://localhost:8081/api/payments",
        paymentData
      );

      if (paymentRes.data.success) {
        // Insert booking
        const bookingData = {
          user_id: userId,
          show_id: movie?.id || item?.id,
          seat_numbers: selectedSeats.join(",") || "N/A",
          total_amount: finalTotal || totalFixed,
          payment_status: "paid",
        };

        const bookingRes = await axios.post(
          "http://localhost:8081/api/bookings",
          bookingData
        );

        alert(
          `✅ Payment & Booking successful! Booking ID: ${bookingRes.data.booking_id}`
        );
        setIsPaid(true);
      } else {
        alert("❌ Payment failed: " + paymentRes.data.message);
      }
    } catch (error) {
      console.error("❌ Payment/Booking Error:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    setFinalTotal(totalFixed);
  }, [totalFixed]);

  return (
    <div className="payment-card">
      <div className="bill-section">
        <h2>Booking Summary</h2>
        {movie ? (
          <>
            <p>
              <b>Movie:</b> {movie.name || movie.title}
            </p>
            {movie.location && (
              <p>
                <b>Location:</b> {movie.location}
              </p>
            )}
          </>
        ) : item ? (
          <>
            <p>
              <b>Item:</b> {item.name}
            </p>
            <p>
              <b>Price:</b> ₹{cleanPrice(item.price).toFixed(2)}
            </p>
          </>
        ) : null}

        <div className="bill-item">
          <span>Subtotal:</span>
          <span>₹{subtotalFixed.toFixed(2)}</span>
        </div>
        <div className="bill-item">
          <span>GST (18%):</span>
          <span>₹{gstFixed.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="bill-item">
            <span>Discount:</span>
            <span>-₹{discount.toFixed(2)}</span>
          </div>
        )}
        <div className="bill-item total">
          <span>Grand Total:</span>
          <span>₹{(finalTotal || totalFixed).toFixed(2)}</span>
        </div>

        <div className="coupon-section">
          <h3>Have a Coupon Code?</h3>
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value.toUpperCase())}
            placeholder="Enter offer code (e.g. MOVIE50)"
          />
          <button onClick={applyCoupon}>Apply</button>
        </div>

        {isPaid && (
          <div className="paid-popup">✅ Payment & Booking Successful 🎬</div>
        )}
      </div>

      <div className="payment-section">
        <h2>Select Payment Method</h2>
        <div className="method-buttons">
          <button
            className={method === "digital" ? "active" : ""}
            onClick={() => setMethod("digital")}
          >
            Digital
          </button>
          <button
            className={method === "card" ? "active" : ""}
            onClick={() => setMethod("card")}
          >
            Card
          </button>
        </div>

        {method === "digital" && (
          <div className="digital-section">
            <button className="qr-toggle" onClick={() => setShowQR(!showQR)}>
              {showQR ? "Hide QR" : "Show QR Code"}
            </button>
            {showQR && (
              <div className="qr-box">
                <img src="/images/qr-sample.png" alt="QR" />
                <p>Scan to Pay via UPI</p>
              </div>
            )}
            <div className="upi-box">
              <h3>Pay using UPI ID</h3>
              <input
                type="text"
                placeholder="Enter UPI ID (e.g. name@upi)"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <button
                className="pay-btn"
                onClick={handlePayment}
                disabled={isPaid}
              >
                Pay ₹{(finalTotal || totalFixed).toFixed(2)}
              </button>
            </div>
          </div>
        )}

        {method === "card" && (
          <div className="card-section">
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name on Card"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="two-inputs">
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <button
              className="pay-btn"
              onClick={handlePayment}
              disabled={isPaid}
            >
              Pay ₹{(finalTotal || totalFixed).toFixed(2)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentCard;
