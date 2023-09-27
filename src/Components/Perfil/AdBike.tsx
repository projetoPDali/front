import COLORS from "../../constant/colors";
import { Link } from "react-router-dom";

const AdBike = () => {
  return (
    <Link
      to="/cadastro-bike"
      style={{ textDecoration: "none", color: COLORS.black }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: "0.2vw solid " + COLORS.black,
          marginBottom: "8vw",
          marginTop: "2vw"
        }}
      >
        <h1 style={{ fontFamily: "sans-serif", fontSize: 24 }}>
          Adicionar Bicicleta
        </h1>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          +
        </div>
      </div>
    </Link>
  );
};

export default AdBike;
