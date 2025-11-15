import React from "react";
import OfferCard from "./OfferCard";
import "./OfferSection.css";

const offers = [
  {
    id: 1,
    image: "/images/offer1.jpg",
    description: "Buy 1 Get 1 Movie Ticket Free",
    validDate: "31 Oct 2025",
    code: "MOVIEBOGO",
  },
  {
    id: 2,
    image: "/images/offer2.jpg",
    description: "Buy Tickets Using Axis Cards - Get 15% Off",
    validDate: "15 Nov 2025",
    code: "AXIS15",
  },
  {
    id: 3,
    image: "/images/offer3.jpg",
    description: "Free Refills from Friday to Sunday",
    validDate: "10 Dec 2025",
    code: "REFILL100",
  },
  {
    id: 4,
    image: "/images/offer4.avif",
    description: "Use Kotak Cards for Unlimited Offers",
    validDate: "31 Dec 2025",
    code: "KOTAK20",
  },
];

function OfferSection() {
  return (
    <div className="offer-section">
      <div className="offer-cards-row">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            image={offer.image}
            description={offer.description}
            validDate={offer.validDate}
            code={offer.code}
          />
        ))}
      </div>
    </div>
  );
}

export default OfferSection;
