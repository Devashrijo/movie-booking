import React, { useState } from "react";
import "./OfferCard.css";

function OfferCard({ image, description, validDate, code }) {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="offer-card">
      <img src={image} alt={description} className="offer-image" />
      <p className="offer-description">{description}</p>
      <p className="offer-validDate">Valid till: {validDate}</p>

      {/* ✅ Popup trigger button */}
      <button className="offer-link" onClick={() => setShowPopup(true)}>
        View Offer
      </button>

      {/* ✅ Popup modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h3>🎟️ Special Offer Code</h3>
            <p>Use this code at checkout to get your discount:</p>
            <div className="code-box">
              <span>{code}</span>
              <button onClick={handleCopy} className="copy-btn">
                {copied ? "✅ Copied!" : "Copy"}
              </button>
            </div>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OfferCard;
