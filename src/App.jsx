import React from "react";
import { Route, Routes } from "react-router-dom";

//User Account
import Home from "./pages/home";
import AddToCart from "./pages/add-to-cart";
import NotFoundPage from "./pages/404";
import ScrollRestoration from "./components/scroll-restoration";
import MedicineCheckOut from "./pages/medicine-check-out";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/aas-check-out" element={<MedicineCheckOut />} />
      </Routes>
      <ScrollRestoration />
    </>
  );
}

export default App;
