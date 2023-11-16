import React from "react";
import MainNavbar from "../Components/Navbar/Navbar";
import Header from "../Components/Home/Header";
import CardBike from "../Components/Home/CardBike";
import Search from "../Components/Home/Search";
import { useAuth } from "../Context/AuthContext"; // Import useAuth

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <MainNavbar />
      <Header />
      <Search />
      <CardBike />

      {/* Conditionally display the user's name if logged in */}
      {user && <h1>Welcome, {user.email}!</h1>}
    </div>
  );
};

export default Home;
