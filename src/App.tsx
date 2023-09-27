import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Perfil from "./Screens/Perfil";
import AppRouter from "./Navigation";

function App() {
  return (
    <AppRouter/>
  );
}

export default App;
