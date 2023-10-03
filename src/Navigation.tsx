import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';  
import Perfil from './Screens/Perfil'; 
import CadastroBike from './Screens/CadastroBike';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cadastro-bike" element={<CadastroBike/>} />
        <Route path="/login" element={<CadastroBike/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
