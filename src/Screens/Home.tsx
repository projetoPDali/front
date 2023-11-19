import React, { useState } from "react";
import MainNavbar from "../Components/Navbar/Navbar";
import Header from "../Components/Home/Header";
import CardBike from "../Components/Home/CardBike";
import Search from "../Components/Home/Search";
import { useAuth } from "../Context/AuthContext";
import { Container } from "react-bootstrap";

const Home = () => {
  const { user } = useAuth();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (newSelectedFilters: string[]) => {
    setSelectedFilters(newSelectedFilters);
    console.log("Selected Filters in Home:", newSelectedFilters);
  };

  return (
    <div>
      <MainNavbar />
      <Header />
      <Container fluid>
        <Search onFilterChange={handleFilterChange} />
      </Container>
      <CardBike />
    </div>
  );
};

export default Home;
