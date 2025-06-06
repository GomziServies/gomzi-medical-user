import React from "react";
import { Route, Routes } from "react-router-dom";

//User Account
import Home from "./pages/home";
import AddToCart from "./pages/add-to-cart";
import NotFoundPage from "./pages/404";
import ScrollRestoration from "./components/scroll-restoration";
import MedicineCheckOut from "./pages/medicine-check-out";
import RequireMedicineCheckOut from "./pages/require-medicine-check-out";
import ThankYouPage from "./pages/thank-you";
import RequirementThankYouPage from "./pages/thank-you-requirement";
import Product from "./pages/product";
import AnabolicCycle from "./pages/anabolic-cycle";
import BeginnersAnabolicCycle from "./pages/Beginners-Anabolic-Cycle";
import MediumAnabolicCycle from "./pages/Medium-Anabolic-Cycle";
import AdvanceAnabolicCycle from "./pages/Advance-Anabolic-Cycle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/add-to-cart" element={<AddToCart />} /> */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/anaboliccycle" element={<AnabolicCycle />} />
        <Route path="/beginners-to-anabolic-cycle" element={<BeginnersAnabolicCycle />} />
        <Route path="/fat-loss-to-anabolic-cycle" element={<MediumAnabolicCycle />} />
        <Route path="/advance-to-anabolic-cycle" element={<AdvanceAnabolicCycle />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/requirement-thank-you" element={<RequirementThankYouPage />} />
        {/* <Route path="/aas-check-out" element={<MedicineCheckOut />} /> */}
        <Route
          path="/require-medicine-check-out"
          element={<RequireMedicineCheckOut />}
        />
      </Routes>
      <ScrollRestoration />
    </>
  );
}

export default App;
