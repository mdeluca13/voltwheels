import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import React from "react";
import SaleForm from "../components/SaleForm";
import Ads from "../pages/Ads";
import Car from "../pages/Car";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OrderHistory from "../pages/OrderHistory";
import SignUp from "../pages/Signup";
import Success from "../pages/Success";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
