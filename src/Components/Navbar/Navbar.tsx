import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navbarStyle, buttonStyle, navLinkStyle, navBrand } from "./styles";
import logo from "../../assets/logo-simples.png";
import Button from "react-bootstrap/Button";
import {useNavigate } from "react-router-dom";


const MainNavbar = () => {
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" style={navbarStyle} variant="dark">
      <Container>
        <Navbar.Brand href="/" style={navBrand}>
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="Pdali logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav" style={{ paddingBottom: 7 }}>
          <Nav className="ml-auto mx-auto justify-content-between">
            <Nav.Link style={navLinkStyle} href="/">
              Inicio
            </Nav.Link>
            <Nav.Link style={navLinkStyle} href="">
              Bicicletas
            </Nav.Link>

            <Nav.Link style={navLinkStyle} href="#pricing">
              Fale Conosco
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {/* Alinha o botão à direita */}
            <Button
              variant="light"
              style={buttonStyle}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
