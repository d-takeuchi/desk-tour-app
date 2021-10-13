import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/atoms/Footer";
import { Header } from "./components/atoms/Header";
import { Router } from "./routes/Router";

import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `http://localhost:3001/graphql`,
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
