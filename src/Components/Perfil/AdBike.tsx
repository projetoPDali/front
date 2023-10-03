import { Link } from "react-router-dom";
import { alinharDiv, enfeite, styleLink, styleText } from "./styles";

const AdBike = () => {
  return (
    <Link to="/cadastro-bike" style={styleLink}>
      <div style={alinharDiv}>
        <h1 style={styleText}>Adicionar Bicicleta</h1>
        <div style={enfeite}>+</div>
      </div>
    </Link>
  );
};

export default AdBike;
