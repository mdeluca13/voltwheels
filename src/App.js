import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Nav";

// import Login from "./Login";
// import SignUp from "./Signup";
import Ads from "./Ads";
import Car from "./Car";
import FAQ from "./FAQ";

import SaleForm from "./SaleForm";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// import { StoreProvider } from "./utils/GlobalState";
import Success from "./pages/Success";
import OrderHistory from "./pages/OrderHistory";

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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="" element={<Ads />}></Route>
          <Route path="" element={<Car />}></Route>
          <Route path="" element={<FAQ />}></Route>
          <Route path="" element={<OrderHistory />}></Route>
          <Route path="" element={<Success />}></Route>
          <Route path="" element={<SaleForm />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
