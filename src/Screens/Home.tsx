import React from "react";
import MainNavbar from "../Components/Navbar/Navbar";
import Header from "../Components/Home/Header"; // Import the Header component

const Home = () => {
  return (
    <div>
       <MainNavbar />
      <Header /> {/* Include the Header component here */}
      {/* Other content for your home page */}
    </div>
  );
};

export default Home;
