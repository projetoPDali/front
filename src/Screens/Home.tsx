import React from "react";
import MainNavbar from "../Components/Navbar/Navbar";
import Header from "../Components/Home/Header";
import CardBike from "../Components/Home/CardBike";
import Search from "../Components/Home/Search";
import { useAuth } from "../Context/AuthContext"; // Import useAuth
import { Container } from "react-bootstrap";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <MainNavbar />
      <Header />
      <Container fluid><Search /></Container>
      <CardBike />

     
    </div>
  );
};

export default Home;
