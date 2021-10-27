import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/atoms/Footer";
import { Header } from "./components/atoms/Header";
import { Router } from "./routes/Router";

import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("app-auth");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
