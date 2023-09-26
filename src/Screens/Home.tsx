import React from "react";
import MainNavbar from "../Components/Navbar/Navbar";
<<<<<<< Updated upstream
import Header from "../Components/Home/Header"; // Import the Header component
=======
import Header from "../Components/Home/Header"; 
import Busca from "../Components/Home/Busca";
import CardBike from "../Components/Home/CardBike";
>>>>>>> Stashed changes

const Home = () => {
  return (
    <div>
      <MainNavbar />
      
        <Header />
<<<<<<< Updated upstream
        
=======
        <Busca/>
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
>>>>>>> Stashed changes
    </div>
  );
};

export default Home;
