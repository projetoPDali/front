import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdBike from "../Components/Perfil/AdBike";
import MainNavbar from "../Components/Navbar/Navbar";
import CardUsuario from "../Components/Perfil/CardUsuario";
import UserBikes from "../Components/Perfil/UserBikes";

const Perfil = () => {
  return (
    <div>
      <MainNavbar />
      <Container fluid style={{ padding: "2vw" }}>
        <Row>
          <Col md={6}>
            <CardUsuario
              cardBackgroundColor="white"
              imageColBackgroundColor="primary"
              textColor="black"
            />
          </Col>

          <Col md={6}>
            <AdBike />
            <UserBikes />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Perfil;
