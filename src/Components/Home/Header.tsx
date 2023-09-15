import React from "react";
import GreenBotton from "./GreenBotton";
import * as styles from "./styles"; // Importe os estilos

const Header = () => {
  return (
    <div style={styles.headerContainerStyle}>
      <div style={{ paddingInline: "1.5vw" }}>
        <h1 style={styles.titleStyle}>
          <b>PDALI</b>.com
        </h1>
        <p style={styles.sloganStyle}>CONECTANDO LUGARES</p>
      </div>
    <GreenBotton/>
    </div>
  );
};

export default Header;
