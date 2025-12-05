import FilmioHeroSection from "../components/FilmioHeroSection";
import FilmioTopRecommendation from "../components/FilmioTopRecommendation";
import Header from "../components/Header";
import ShuffleCardSection from "../components/ShuffleCardsSection";
import "./../App.css";
import Footer from "../components/Footer";
import axios from "axios";

const teaAndCoffee = [
  {
    id: 1,
    image: "/images/food1.jpg",
    name: "Americano Coffee (L)",
    price: "Rs.149",
    offer: "Get 20% off today!",
  },
  {
    id: 2,
    image: "/images/food2.jpg",
    name: "Masal Chai",
    price: "Rs.69",
    offer: "Combo Offer: Chai + Vada Pav ₹99",
  },
  {
    id: 3,
    image: "/images/food3.jpg",
    name: "Cold Coffee",
    price: "Rs.62",
    offer: "Add a Vada Pav & Save ₹10",
  },
  {
    id: 4,
    image: "/images/food6.jpg",
    name: "Lemon Tea",
    price: "Rs.45",
    offer: "10% off on buying burger",
  },
];

const topPicks = [
  {
    id: 5,
    image: "/images/food5.jpg",
    name: "Coffee Mocha",
    price: "Rs.150(L)",
    offer: "Buy 1 Get 1 Free",
  },
  {
    id: 6,
    image: "/images/food7.jpg",
    name: "Ginger Tea",
    price: "Rs.50",
    offer: "20% off for today",
  },
  {
    id: 7,
    image: "/images/food4.jpg",
    name: "Capicunnio",
    price: "Rs.99",
    offer: "Free Drink with Combo",
  },
];

const topRecommendations = [
  {
    id: 1,
    image: "/images/topr1.jpg",
    name: "Cappuccino",
    price: "Rs.150",
    offer: "Get 10% off on HDFC Debit Card!",
  },
  {
    id: 2,
    image: "/images/topr2.jpg",
    name: "Hot&Spicy Burger",
    price: "Rs.70",
    offer: "Get 15% off just for today!",
  },
  {
    id: 3,
    image: "/images/topr3.jfif",
    name: "Cheese Popcorn",
    price: "Rs.110 (Large)",
    offer: "Get 5% off for today!",
  },
  {
    id: 4,
    image: "/images/topr4.jfif",
    name: "FlavourFull Samosa",
    price: "Rs.40 (1)",
    offer: "Get 1% off just for today!",
  },
  {
    id: 5,
    image: "/images/topr5.jfif",
    name: "Cheese & Tandoori Fries",
    price: "Rs.200",
    offer: "Get 6% off on your Kotak Debit Card",
  },
];

const popcorns = [
  {
    id: 1,
    image: "/images/masalapopcorn.jfif",
    name: "Masala Popcorn (L)",
    price: "Rs.150",
    offer: "Get 6% off on your Kotak Debit Card",
  },
  {
    id: 2,
    image: "/images/saltedpopcorn.jfif",
    name: "Salted Popcorn",
    price: "Rs.70",
    offer: "Get 6% off on your Kotak Debit Card",
  },
  {
    id: 3,
    image: "/images/cheddarpopcorn.jpg",
    name: " Cheddar Cheese Popcorn",
    price: "Rs.110 (Large)",
    offer: "Get 5% off for today!",
  },
  {
    id: 4,
    image: "/images/saltedcaremelpopcorn.webp",
    name: "Salted Caramel Popcorn",
    price: "Rs.100(1)",
    offer: "Get 1% off just for today!",
  },
  {
    id: 5,
    image: "/images/tandoripopcorn.webp",
    name: "Tandori Popcorn",
    price: "Rs.200",
    offer: "Get 6% off on your Kotak Debit Card",
  },
];

const burgers = [
  {
    id: 1,
    image: "/images/alootikki.jfif",
    name: "Aloo Tikki",
    price: "Rs.50",
    offer: "Get 20% off today!",
  },
  {
    id: 2,
    image: "/images/cheese burger4.jfif",
    name: "Cheese Burger",
    price: "Rs.170",
    offer: "Combo Offer: Fries + Burger:250",
  },
  {
    id: 3,
    image: "/images/maharajaburger.jpg",
    name: "Maharaja Burger",
    price: "Rs.162",
    offer: "15% off on HDFC Card",
  },
  {
    id: 4,
    image: "/images/tandoriburger.jfif",
    name: "Tandori Burger",
    price: "Rs.145",
    offer: "10% off on Kotak Card",
  },
];

const fries = [
  {
    id: 1,
    image: "/images/periperifries.jfif",
    name: "Peri Peri Fries",
    price: "Rs.150",
    offer: "Get 6% off on your Kotak Debit Card",
  },
  {
    id: 2,
    image: "/images/cheesefries.webp",
    name: "Cheese Fries",
    price: "Rs.120",
    offer: "Get 6% off on your Kotak Debit Card",
  },
  {
    id: 3,
    image: "/images/saledfries.jfif",
    name: "Saled Fries",
    price: "Rs.110 (Large)",
    offer: "Get 5% off for today!",
  },
  {
    id: 4,
    image: "/images/saltedfries.webp",
    name: "Salted Fries",
    price: "Rs.100",
    offer: "Get 1% off just for today!",
  },
  {
    id: 5,
    image: "/images/tandorifries.jpg",
    name: "Tandori fries",
    price: "Rs.150",
    offer: "Get 6% off on your Kotak Debit Card",
  },
];

const desi = [
  {
    id: 1,
    image: "/images/vadapv.jpg",
    name: "Vada Pav",
    price: "Rs.50",
    offer: "Get 20% off today!",
  },
  {
    id: 2,
    image: "/images/samosa.jfif",
    name: "Samosa",
    price: "Rs.80(2)",
    offer: "10%  off for today ",
  },
  {
    id: 3,
    image: "/images/breadpakoda.jfif",
    name: "Bread Pakoda",
    price: "Rs.80(2)",
    offer: "15% off on HDFC Card",
  },
  {
    id: 4,
    image: "/images/kandabhaji.webp",
    name: "Kanda Bhaji",
    price: "Rs.145",
    offer: "10% off on Kotak Card",
  },
];

function FilmioCafe() {
  // ✅ Test function to check backend connection
  const testOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/filmioCafe/order",
        {
          itemName: "Masala Chai",
          price: 69,
          image: "/images/food2.jpg",
          gst: 12.42,
          total: 81.42,
        }
      );
      alert("✅ " + response.data.message);
    } catch (err) {
      alert("❌ Error: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <>
      <Header />
      <FilmioHeroSection />
      <FilmioTopRecommendation
        title="Top Recommendations"
        items={topRecommendations}
      />
      <ShuffleCardSection
        title="Tea & Coffee"
        items={teaAndCoffee}
        leftDecoration="/images/spilledpopcorn.jfif"
        rightDecoration="/images/spilledcoffee.webp"
      />
      <FilmioTopRecommendation title="Popcorns" items={popcorns} />
      <ShuffleCardSection
        title="Burgers"
        items={burgers}
        leftDecoration="/images/spilledburger1.webp"
        rightDecoration="/images/spilledfries.png"
      />
      <FilmioTopRecommendation title="Fries" items={fries} />
      <ShuffleCardSection
        title="Desi Snack"
        items={desi}
        leftDecoration="/images/spilledvadapav.png"
        rightDecoration="/images/spilledchutney.jpg"
      />

      {/* ✅ Temporary test button */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button
          onClick={testOrder}
          style={{
            backgroundColor: "#ff4757",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Test Order API
        </button>
      </div>

      <Footer />
    </>
  );
}

export default FilmioCafe;
