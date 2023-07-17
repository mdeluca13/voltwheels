import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//Importing pages:

import Nav from "./components/Nav/index";
import Video from "./components/Video/index";
// import Ads from "./pages/Ads";
import Car from "./pages/Car";
import SaleForm from "./pages/SaleForm";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";
import { LOGIN } from "./utils/mutations";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// import { StoreProvider } from "./utils/GlobalState";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Video />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          {/* <Route path="./Ads" element={<Ads />}></Route> */}
          <Route path="/Car" element={<Car />}></Route>
          <Route path="/OrderHistory" element={<OrderHistory />}></Route>
          <Route path="/Success" element={<Success />}></Route>
          <Route path="/SaleForm" element={<SaleForm />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
