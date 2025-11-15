import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OfferSection from "../components/OfferSection";
import FilterBox from "../components/FilterBox";

const bankOffers = [
  {
    id: 1,
    image: "/images/bankoffer1.jpg",
    description: "10% off with HDFC Cards",
    validDate: "31 Oct 2025",
    viewLink: "#",
  },
  {
    id: 2,
    image: "/images/bankoffer2.jfif",
    description: "15% off using Axis Bank Cards",
    validDate: "15 Nov 2025",
    viewLink: "#",
  },
  {
    id: 3,
    image: "/images/bankoffer3.jfif",
    description: "₹100 Cashback via Paytm Wallet",
    validDate: "10 Dec 2025",
    viewLink: "#",
  },
  {
    id: 4,
    image: "/images/bankoffer4.jfif",
    description: "Buy 1 Get 1 with Kotak Platinum Card",
    validDate: "31 Dec 2025",
    viewLink: "#",
  },
];

const cafeOffers = [
  {
    id: 1,
    image: "/images/fcoffer1.jfif",
    description: "Buy 2 Get 1 Cappuccino Free",
    validDate: "30 Nov 2025",
    viewLink: "#",
  },
  {
    id: 2,
    image: "/images/fcoffer2.jfif",
    description: "Free Popcorn Combo on Weekends",
    validDate: "25 Dec 2025",
    viewLink: "#",
  },
  {
    id: 3,
    image: "/images/fcoffer3.jfif",
    description: "Buy 2 Get 1 Cappuccino Free",
    validDate: "30 Nov 2025",
    viewLink: "#",
  },
  {
    id: 4,
    image: "/images/fcoffer4.jpeg",
    description: "Free Popcorn Combo on Weekends",
    validDate: "25 Dec 2025",
    viewLink: "#",
  },
];

const specialOffers = [
  {
    id: 1,
    image: "/images/soffer1.jfif",
    description: "Early Bird Offer: 25% Off on Tickets",
    validDate: "15 Nov 2025",
    viewLink: "#",
  },
  {
    id: 2,
    image: "/images/soffer2.jfif",
    description: "Student Discount: ₹50 Off",
    validDate: "20 Dec 2025",
    viewLink: "#",
  },
  {
    id: 3,
    image: "/images/soffer3.jfif",
    description: "Student Discount: ₹50 Off",
    validDate: "20 Dec 2025",
    viewLink: "#",
  },
  {
    id: 4,
    image: "/images/soffer4.jfif",
    description: "Student Discount: ₹50 Off",
    validDate: "20 Dec 2025",
    viewLink: "#",
  },
];

const membershipOffers = [
  {
    id: 1,
    image: "/images/moffer1.jpg",
    description: "Filmio Plus: Free Ticket Every Month",
    validDate: "Ongoing",
    viewLink: "#",
  },
  {
    id: 2,
    image: "/images/moffer2.jfif",
    description: "Premium Access to Early Bookings",
    validDate: "Ongoing",
    viewLink: "#",
  },
  {
    id: 2,
    image: "/images/moffer3.jpg",
    description: "Premium Access to Early Bookings",
    validDate: "Ongoing",
    viewLink: "#",
  },
];

function Offer() {
  return (
    <div className="offer-page">
      <Header />
      <FilterBox title=" Bank Offers" showFilters={false} />
      <OfferSection offers={bankOffers} />
      <FilterBox title=" Filmio Cafe Offers" showFilters={false} />
      <OfferSection offers={cafeOffers} />
      <FilterBox title=" Special Offers" showFilters={false} />
      <OfferSection offers={specialOffers} />
      <FilterBox title="Membership Offers" showFilters={false} />
      <OfferSection offers={membershipOffers} />
      <Footer />
    </div>
  );
}

export default Offer;
