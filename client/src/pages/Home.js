import React from "react";
import Header from "../components/Header/index";
import CarList from "../components/CarList";
import Order from "../components/Order";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <CarList />
      <Order />
    </div>
  );
};

export default Home;
