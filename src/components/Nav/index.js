import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Signup from "../../pages/Signup";
import OrderHistory from "../../pages/OrderHistory";
import SaleForm from "../SaleForm";
import Login from "../../pages/Login";

function Nav({ currentPage, handlePageChange }) {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/OrderHistory">Order History</Link>
          </li>
          <li>
            Add A Car
            <a
              href="/"
              onClick={() => {
                Auth.loggedIn, handlePageChange("SaleForm");
              }}
              className="mx-1"
            ></a>
          </li>
          <li>
            BookMarks
            <a
              href="/"
              onClick={() => {
                Auth.loggedIn, handlePageChange("BookMarks");
              }}
              className="mx-1"
            ></a>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="lighting bolt">
            ⚡
          </span>
          VoltWheels
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}
export function NavBarContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Ads") {
      return <NavBar />;
    }
    if (currentPage === "Home") {
      return <Login /> && <Signup />;
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
  };
}
const handlePageChange = (page) => setCurrentPage(page);

return (
  <div>
    <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
  </div>
);

export default Nav;
