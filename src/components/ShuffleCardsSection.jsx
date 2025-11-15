import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./ShuffleCardSection.css";

function ShuffleCardSection({ title, items, leftDecoration, rightDecoration }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const leftIndex = (currentIndex - 1 + items.length) % items.length;
  const rightIndex = (currentIndex + 1) % items.length;

  const handleLeftClick = () => setCurrentIndex(leftIndex);
  const handleRightClick = () => setCurrentIndex(rightIndex);

  const handleBuyNow = (item) => {
    navigate("/payment", { state: { item } });
  };

  const cardPositions = [
    { x: -180, scale: 0.9, rotateY: 15, zIndex: 1, opacity: 0.7 },
    { x: 0, scale: 1.15, rotateY: 0, zIndex: 3, opacity: 1 },
    { x: 180, scale: 0.9, rotateY: -15, zIndex: 1, opacity: 0.7 },
  ];

  return (
    <div className="shuffle-section">
      <h2 className="shuffle-title">{title}</h2>

      {leftDecoration && (
        <img src={leftDecoration} alt="left" className="popcorn-left" />
      )}
      {rightDecoration && (
        <img src={rightDecoration} alt="right" className="popcorn-right" />
      )}

      <div className="carousel">
        {[leftIndex, currentIndex, rightIndex].map((index, pos) => (
          <motion.div
            key={items[index].id}
            className="card"
            onClick={
              pos === 0 ? handleLeftClick : pos === 2 ? handleRightClick : null
            }
            animate={cardPositions[pos]}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <img src={items[index].image} alt={items[index].name} />
            <div className="card-info">
              <h3>{items[index].name}</h3>
              <p className="price">{items[index].price}</p>
              <p className="offer">{items[index].offer}</p>
              {pos === 1 && (
                <button
                  className="buy-btn"
                  onClick={() => handleBuyNow(items[index])}
                >
                  Buy Now
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <p className="shuffle-note">Click left or right image to shuffle.</p>
    </div>
  );
}

export default ShuffleCardSection;
