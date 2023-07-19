import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './utils/GlobalState';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleCar from './pages/SingleCar';
import Profile from './pages/Profile';
import CarForm from './pages/CarForm';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NoMatch from './pages/NoMatch';
import OrderHistory from './pages/OrderHistory';
import FAQ from "./components/FAQ/index";
import CarListPage from './pages/CarList';
import ContactForm from './pages/ContactForm';
import AboutUs from './pages/AboutUs';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

document.title = 'Voltwheels';

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <StoreProvider>
            <Nav />
            <div className="app-container">
            <div className="main-content">
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/carlist"
                  element={<CarListPage />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/signup"
                  element={<Signup />}
                />
                <Route
                  path="/carform"
                  element={<CarForm />}
                />
                <Route
                  path="/orderhistory"
                  element={<OrderHistory />}
                />
                <Route
                  path="/me"
                  element={<Profile />}
                />
                <Route
                  path="/profiles/:username"
                  element={<Profile />}
                />
                <Route
                  path="/cars/:carId"
                  element={<SingleCar />}
                />
                <Route
                  path="/faq"
                  element={<FAQ />}
                />
                <Route
                  path="/contactform"
                  element={<ContactForm />}
                />
                <Route
                  path="/aboutus"
                  element={<AboutUs />}
                />
                <Route
                  path="*"
                  element={<NoMatch />}
                />
              </Routes>
            </div>
            <Footer />
            </div>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// //Importing pages:
// import Home from "./pages/Home"
// // import Nav from "./components/Nav/index";
// import Profile from "./pages/Profile";
// import SingleCar from "./pages/SingleCar";
// import Header from "./components/Header";
// import Footer from './components/Footer';
// // import FAQ from "./pages/FAQ";
// import CarForm from "./pages/CarForm";
// // import Success from "./pages/Success";
// // import OrderHistory from "./pages/OrderHistory";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// // import { StoreProvider } from "./utils/GlobalState";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// export default function App() {
//   return (
//     <ApolloProvider client={client}>
//     <Router>
//       <div className="flex-column justify-flex-start min-100-vh">
//         <Header />
//         <div className="container">
//           <Routes>
//             <Route
//               path="/"
//               element={<Home />}
//             />
//             <Route
//               path="/login"
//               element={<Login />}
//             />
//             <Route
//               path="/signup"
//               element={<Signup />}
//             />
//             <Route
//               path="/me"
//               element={<Profile />}
//             />
//             <Route
//               path="/profiles/:username"
//               element={<Profile />}
//             />
//             <Route
//               path="/carform"
//               element={<CarForm />}
//             />
//             <Route
//               path="/cars/:carId"
//               element={<SingleCar />}
//             />
//             {/* <Route
//               path="/orderhistory"
//               element={<OrderHistory />}
//             /> */}
//             {/* <Route
//               path="/faq"
//               element={<FAQ />}
//             /> */}
//             {/* <Route
//               path="/success"
//               element={<Success />}
//             /> */}
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   </ApolloProvider>
//   );
// }
