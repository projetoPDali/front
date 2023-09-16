import React from "react";
import MainNavbar from "../Components/Navbar/Navbar";
import Header from "../Components/Home/Header"; // Import the Header component
import Busca from "../Components/Home/Busca";

const Home = () => {
  return (
    <div>
      <MainNavbar />
        <Header />
        <Busca/>
    </div>
  );
};

export default Home;
