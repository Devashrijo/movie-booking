import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import PaymentCard from "../components/PaymentCard";
import Footer from "../components/Footer.jsx";

function Payment() {
  const location = useLocation();
  const { movie, selectedSeats, subtotal, gst, total, item } =
    location.state || {};

  const itemSubtotal = item
    ? Number(item.price.replace(/[^\d.]/g, ""))
    : subtotal || 0;
  const itemGst = gst || itemSubtotal * 0.18;
  const itemTotal = total || itemSubtotal + itemGst;

  return (
    <>
      <Header />
      <PaymentCard
        userId={1} // Replace with logged-in user ID
        movie={movie}
        selectedSeats={selectedSeats || []}
        subtotal={itemSubtotal}
        gst={itemGst}
        total={itemTotal}
        item={item}
      />
      <Footer />
    </>
  );
}

export default Payment;
