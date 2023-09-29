import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardLado from "../Components/Perfil/CardLado";
import AdBike from "../Components/Perfil/AdBike";
import MainNavbar from "../Components/Navbar/Navbar";

const Perfil = () => {
  return (
    <div>
      <MainNavbar />
      <Container fluid style={{ padding: "2vw" }}>
        <Row>
          <Col md={6} >
            <CardLado
              cardBackgroundColor="white"
              imageColBackgroundColor="primary"
              textColor="black"
              
            />
          </Col>

          <Col md={6}>
            <AdBike />
            <CardLado
              cardBackgroundColor="primary"
              imageColBackgroundColor="white"
              textColor="white"
            />
            <CardLado
              cardBackgroundColor="primary"
              imageColBackgroundColor="white"
              textColor="white"
            />
          </Col>

          
          
        </Row>
      </Container>
    </div>
  );
};

export default Perfil;
