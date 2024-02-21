import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Fixed/Navbar";
import RoutingPage from "./PageRoutes/RoutingPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
     <RoutingPage />
     </BrowserRouter>
    </>
  );
}

export default App;
