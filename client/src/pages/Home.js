import React from "react";
import Nav from "../components/Nav/index";
import Video from "../components/Video/index";
import CarList from "../components/CarList";
import Order from "../components/Order";

const Home = () => {
  return (
    <div className="container">
      <Nav />
      <Video />
      <CarList />
      <Order />

    </div>
  );
};

export default Home;
