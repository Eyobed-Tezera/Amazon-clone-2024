import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import Landing from "./Landing/Landing";
import Payment from "./Payment/Payment";
import Signin from "./Auth/Signin";
import Orders from "./Orders/Orders";
import Reaults from "./Results/Reaults";
import ProductDetail from "./ProductDetail/ProductDetail";
import Product from "../components/Product/product";
function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signin />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Reaults />} />
        <Route path="/products/:productId" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routering;
