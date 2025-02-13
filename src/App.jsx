import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/Home";
// import ECommerceComponent from "./components/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wishes from "./pages/Wishes";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Navbar onSearch={handleSearch} /> */}
     
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishes" element={<Wishes />} />
      </Routes>
    </Router>
  );
}

export default App;
