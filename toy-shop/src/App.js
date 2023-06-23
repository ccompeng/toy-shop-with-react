import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ScrollRestoration from "./functions/ScrollRestoration";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="toys" element={<Products />} />
        <Route path="/toy/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;