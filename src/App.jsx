import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookShow from "./pages/BookShow";
import TheaterBluePrint from "./pages/TheaterBluePrint";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Ratings from "./pages/Ratings";
import FilmioCafe from "./pages/FilmioCafe";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FilmioCafeOrders from "./pages/FilmioCafeOrders";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/bookshow" element={<BookShow />} />
      <Route path="/theater-blueprint" element={<TheaterBluePrint />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/ratings" element={<Ratings />} />
      <Route path="/filmiocafe" element={<FilmioCafe />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/filmio-cafe-orders" element={<FilmioCafeOrders />} />
    </Routes>
  );
}

export default App;
