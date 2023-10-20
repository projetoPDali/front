import { Container, Row, Col } from "react-bootstrap";
import FormBike from "../Components/CadastroBike/Form";
import Imagem from "../assets/ciclista-amarelo.png";
import COLORS from "../constant/colors";
import MainNavbar from "../Components/Navbar/Navbar";

const CadastroBike = () => {
  return (
    <div>
      <MainNavbar />
      <Container fluid>
        <Row>
          <Col
            md={5}
            className="d-none d-md-block"
            style={{ backgroundColor: COLORS.primary, position: "sticky", top: 0, height: "100vh" }}
          >
            <img
              src={Imagem}
              className="img-fluid align-center h-100"
              alt="Ciclista amarelo"
            />
          </Col>

          <Col xs={12} md={7} style={{ backgroundColor: COLORS.lightGray, overflowY: "scroll", height: "100vh" }}>
            <FormBike />
            <FormBike />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CadastroBike;
