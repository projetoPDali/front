import React from "react";
import MainNavbar from "../Components/Navbar/Navbar";

import Header from "../Components/Home/Header"; // Import the Header component
import CardBike from "../Components/Home/CardBike";
import Search from "../Components/Home/Search";

const Home = () => {
  return (
    <div>
      <MainNavbar />
      <Header />
      <Search />
      <CardBike />
    </div>
  );
};

export default Home;
