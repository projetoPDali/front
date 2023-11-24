import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { navbarStyle, buttonStyle, navLinkStyle, navBrand } from "./styles";
import logo from "../../assets/logo-simples.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import COLORS from "../../constant/colors";

const MainNavbar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const { user, logout } = useAuth();
  const logado = user?.id == null ? true : false;

  const handleProfileClick = () => {
    navigate("/perfil");
  };

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home or another page after logout
  };

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
            <Nav.Link style={navLinkStyle} href="#pricing">
              Fale Conosco
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {/* Conditionally render either the "Login" button or the dropdown with user alias */}
            {logado ? (
              <Button
                variant="light"
                style={buttonStyle}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            ) : (
              <Dropdown>
                <Dropdown.Toggle
                  variant="light"
                  style={{ ...buttonStyle, whiteSpace: "nowrap" }} // Evita que o texto seja quebrado
                  id="dropdown-basic"
                >
                  Olá, {user?.alias}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={handleProfileClick}
                    style={{
                      backgroundColor:
                        activeItem === "perfil"
                          ? COLORS.primary
                          : "transparent",
                      color:
                        activeItem === "perfil" ? COLORS.white : COLORS.black,
                    }}
                  >
                    Perfil
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={handleLogout}
                    style={{
                      backgroundColor:
                        activeItem === "logout"
                          ? COLORS.primary
                          : "transparent",
                      color:
                        activeItem === "logout" ? COLORS.white : COLORS.black,
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
