import React, { useState } from "react";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Home";
// import Login from "./Login";
// import SignUp from "./Signup";
import Ads from "./Ads";
import Car from "./Car";
import FAQ from "./FAQ";
import OrderHistory from "./OrderHistory";
import Success from "./Success";
import SaleForm from "./SaleForm";

export function AppContainer() {
  //Conditional Rendering
  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Nav />;
    }
    if (currentPage === "Ads") {
      return <Ads />;
    }
    if (currentPage === "Car") {
      return <Car />;
    }
    if (currentPage === "FAQ") {
      return <FAQ />;
    }
    if (currentPage === "OrderHistory") {
      return <OrderHistory />;
    }
    if (currentPage === "SaleForm") {
      return <SaleForm />;
    }
    if (currentPage === "Success") {
      return <Success />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
export default AppContainer;
