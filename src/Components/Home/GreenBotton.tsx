import Button from "react-bootstrap/Button";
import COLORS from "../../constant/colors";

const GreenBotton = () => {
  return (
    <>
      <Button
        style={{
          width: "22vw",
          height: "6.5vw",
          backgroundColor: COLORS.primary,
          borderColor: COLORS.primary,
          fontSize: "3vw",
          fontWeight: "bold",
          padding: "0.9vw",
          marginTop: "3vw",
          marginLeft: "8vw",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
        }}
        
      >
        CADASTRE-SE
      </Button>{" "}
    </>
  );
};

export default GreenBotton;
