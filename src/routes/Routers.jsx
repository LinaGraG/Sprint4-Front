import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import Favorites from "../pages/Favorites";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Shipment from "../pages/Shipment";
import Dashboard from "../pages/admin/Dashboard";
import ProductsList from "../pages/admin/ProductList";
import NewProduct from "../pages/admin/NewProduct";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shipment" element={<Shipment />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/productlist" element={<ProductsList />} />
      <Route path="/newproduct" element={<NewProduct />} />
      <Route path="/search/:keyword" element={<AllProducts />} />
    </Routes>
  );
};

export default Routers;
