import { Container, Row, Col } from "react-bootstrap";
import SignupForm from "../../Components/CadastroUsuario/SignupForm";
import { styleCol, styleText } from "./styles";


const Signup = () => {
  return (
    <Container>
      <Row
        className="align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Col xs={12} md={6} style={styleCol}>
          <h1 style={styleText}>CADASTRE-SE</h1>

          <div style={{ paddingRight: 10, paddingLeft: 10 }}>
            <SignupForm />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
