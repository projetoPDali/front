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
            style={{ backgroundColor: COLORS.primary, }}
          >
            <img
              src={Imagem}
              className="img-fluid align-center h-100"
              alt="Ciclista amarelo"
            />
          </Col>

          <Col xs={12} md={7} style={{backgroundColor: COLORS.lightGray}}>
            
            <FormBike />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CadastroBike;
