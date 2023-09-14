// Header.js
import React from "react";
import Container from "react-bootstrap/Container";
import COLORS from "../../constant/colors";

const Header = () => {
  return (
    <div style={{ backgroundColor: COLORS.lightGreen, height:300, marginTop: 60, color: "white",  }}>
      <Container>
        <h1 style={{fontSize: 90, paddingTop: 20, color: COLORS.secondary}}><b>PDALI</b>.com</h1>
        <p style={{fontSize: 41.5, position:"absolute", top: 160, color: COLORS.secondary}}>CONECTANDO LUGARES</p>
      </Container>
    </div>
  );
};

export default Header;
