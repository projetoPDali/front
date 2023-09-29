import React from "react";
import MainNavbar from "../Components/Navbar/Navbar";

import Header from "../Components/Home/Header"; // Import the Header component


import CardBike from "../Components/Home/CardBike";


const Home = () => {
  return (
    <div>
      <MainNavbar />
      
        <Header />

      
     
        <div style={{display: "flex",
          flexDirection: "row",
          flexWrap: "wrap", alignContent:"center", justifyContent: "center"}}>
        <CardBike/>
        <CardBike/>
        <CardBike/>
        <CardBike/>
        <CardBike/>
        <CardBike/>
        <CardBike/>
        </div>

    </div>
  );
};

export default Home;
