import React from "react";
import CarList from "../components/CarList";
import CategoryMenu from "../components/CategoryMenu";
import Order from "../components/Order";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <CarList />
      <Order />
    </div>
  );
};

export default Home;
