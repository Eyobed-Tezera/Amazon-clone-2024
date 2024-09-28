import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart";
import Landing from "./Landing/Landing";
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import Reaults from "./Results/Reaults";
import ProductDetail from "./ProductDetail/ProductDetail";
import Product from "../components/Product/product";
import Auth from "./Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51Q3byDGHKfd5AkHtnXbux4OPRcx8RArOAh5mbxb3UwuY2G9V0wgHmRvXC6rWv7rJMipQDJ7A0273pbH0pnUD3cDi00EFcdzzS1"
);

function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Reaults />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routering;
