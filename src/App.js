import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "normalize.css";
import ProductList from "./components/product-list/ProductList";
import "./components/product-list/ProductList.css";
import AboutUs from "./components/about-us/AboutUs";
import "./App.css";
import ProductDetails from "./components/product-details/ProductDetails";

function App() {
  return (
    <>
      <div className="header">
        <Link className="header-link" to="/">
          Products
        </Link>
        <Link className="header-link" to="/aboutus">
          About Us
        </Link>
      </div>
      <div className="content-container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
