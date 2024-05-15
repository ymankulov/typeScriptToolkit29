import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Product />
    </div>
  );
}

export default App;
