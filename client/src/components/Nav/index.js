import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import "./style.css";
import logo from './logo.png';


function Nav({ currentPage, handlePageChange }) {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row navBarSpacing">
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
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="mx-1">
            <Link to="/contactform">Contact Us</Link>
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
        <ul className="flex-row">
          <li className="mx-1 .navbar-nav navBarSpacing">
            <Link to="/signup ">Signup</Link>
          </li>
          <li className="mx-1 .navbar-nav navBarSpacing">
            <Link to="/login">Login</Link>
          </li>
          <li className="mx-1 .navbar-nav navBarSpacing">
            <Link to="/Faq">FAQs</Link>
          </li>
          <li className="mx-1  .navbar-nav navBarSpacing">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="mx-1  .navbar-nav navBarSpacing">
            <Link to="/contactform">Contact Us</Link>
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


// import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
// import "./style.css";

// function Nav({ currentPage, handlePageChange }) {
//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/OrderHistory">Order History</Link>
//           </li>
//           <li>
//             Add A Car
//             <Link to="/Ads">Car Ads</Link>
//           </li>
//           <li>
//             BookMarks
//             <Link to="/SaleForm">Add Car</Link>
//           </li>
//           <li className="mx-1">
//             {/* this is not using the Link component to logout or user and then refresh the application to the start */}
//             <a href="/" onClick={() => Auth.logout()}>
//               Logout
//             </a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/signup">Signup</Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   return (
//     <header className="flex-row px-1">
//       <h1>
//         <Link to="/">
//           <span role="img" aria-label="lighting bolt">
//             ⚡
//           </span>
//           VoltWheels
//         </Link>
//       </h1>

//       <nav>{showNavigation()}</nav>
//     </header>
//   );
// }

// export default Nav;
