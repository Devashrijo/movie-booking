import "./filmiotr.css";
import { useNavigate } from "react-router-dom";

function FilmioTopRecommendation({ title, items }) {
  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    // ✅ Convert "Rs.150" → 150
    const numericPrice = Number(item.price.replace(/[^\d]/g, ""));

    // ✅ Calculate bill
    const subtotal = numericPrice;
    const gst = subtotal * 0.18;
    const total = subtotal + gst;

    navigate("/payment", {
      state: {
        item,
        subtotal,
        gst,
        total,
      },
    });
  };

  return (
    <div className="recommendation-section">
      <h2 className="recommendation-title">{title}</h2>

      <div className="recommendation-grid">
        {items.map((item) => (
          <div key={item.id} className="recommendation-card">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3 className="food-name">{item.name}</h3>
            <p className="food-price">{item.price}</p>
            <p className="food-offer">{item.offer}</p>
            <button className="buy-now" onClick={() => handleBuyNow(item)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmioTopRecommendation;
