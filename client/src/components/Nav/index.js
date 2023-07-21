import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./style.css";
import logo from './logo.png';

// nav display and links
function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row-nav navBarSpacing">
          <li>
              <Link to="/carlist">Cars for Sale</Link>
          </li>
          <li className="mx-1 navBarSpacing">
            <Link to="/orderhistory">{Auth.getProfile().data.username}'s Orders</Link>
          </li>
          <li>
            <Link to="/me">{Auth.getProfile().data.username}'s Car Ads</Link>
          </li>
          <li className="mx-1 navBarSpacing">
            <Link to="/carform">Add Car for Sale</Link>
          </li>
          <li className="mx-1 navBarSpacing">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row-nav">
          <li className="mx-1 .navbar-nav navBarSpacing">
            <Link to="/signup ">Signup</Link>
          </li>
          <li className="mx-1 .navbar-nav navBarSpacing">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row-nav px-1">
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