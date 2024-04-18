import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./Components/HOME/Home";
import Manager from "./Components/Manager/Manager";
import Sales from "./Components/Sales/Sales";
import Mproducts from "./Components/Manager/Mproducts";
import Checkout from './Components/HOME/Checkout';
import Productsales from "./Components/Sales/Productsales";
const  App=()=> {
  return (
    <BrowserRouter>
      <Routes> 
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
       
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Manage" element={<Manager />} />
        <Route exact path="/Sales" element={<Sales />} />
        <Route exact path="/Product" element={<Mproducts />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route exact path="/Productsales" element={<Productsales />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;