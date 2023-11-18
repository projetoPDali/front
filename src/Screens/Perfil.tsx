import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardLado from "../Components/Perfil/Cardbike";
import AdBike from "../Components/Perfil/AdBike";
import MainNavbar from "../Components/Navbar/Navbar";
import CardUsuario from "../Components/Perfil/CardUsuario";
import Cardbike from "../Components/Perfil/Cardbike";

const Perfil = () => {
  return (
    <div>
      <MainNavbar />
      <Container fluid style={{ padding: "2vw" }}>
        <Row>
          <Col md={6} >
            <CardUsuario
              cardBackgroundColor="white"
              imageColBackgroundColor="primary"
              textColor="black"
              
            />
          </Col>

          <Col md={6}>
            <AdBike />
            <Cardbike
              cardBackgroundColor="primary"
              imageColBackgroundColor="white"
              textColor="white"
            />
            <Cardbike
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
