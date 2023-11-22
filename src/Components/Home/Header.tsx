import React from "react";
import GreenBotton from "../Buttons/GreenBotton";
import * as styles from "./styles"; // Importe os estilos
import imageHeader from "../../assets/image-header.png";
import { useAuth } from "../../Context/AuthContext"; // Import useAuth


const Header = () => {
  const { user } = useAuth();
  const logado = user?.id == null ? true : false


  return (
    <div style={styles.headerContainerStyle}>
      <div style={styles.alinhar}>
        <div>
          <h1 style={styles.titleStyle}>
            <b>PDALI</b>.com
          </h1>
          <p style={styles.sloganStyle}>CONECTANDO LUGARES</p>
        </div>
{logado  &&
        <GreenBotton />
}

      </div>
      <img
        style={styles.img}
        src={imageHeader}
        alt="Ciclista verde"
      />
    </div>
  );
};

export default Header;
