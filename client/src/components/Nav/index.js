import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./style.css";
import logo from './logo.png';


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
            <Link to="/Ads">Car Ads</Link>
          </li>
          <li>
            BookMarks
            <Link to="/SaleForm">Add Car</Link>
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
          <li className="mx-1">
            <Link to="/faq">FAQs</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
        <img src={logo} width={150} height={100} />
        </Link>

      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
