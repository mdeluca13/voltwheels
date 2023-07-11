import React, { useState } from "react";
import Nav from "./Home";
// import Login from "./Login";
// import SignUp from "./Signup";
import Ads from "./Ads";
import Car from "./Car";
import FAQ from "./FAQ";
import OrderHistory from "./OrderHistory";
import Success from "./Success";
import SaleForm from "./SaleForm";

export function NavBarContainer() {
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
}
const handlePageChange = (page) => setCurrentPage(page);

// return (
//   <div>
//     <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
//     {renderPage()}
//   </div>
// );
