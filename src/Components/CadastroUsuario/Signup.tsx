import { Container, Row, Col } from "react-bootstrap";
import SignupForm from "../../Components/CadastroUsuario/SignupForm";
import YellowButton from "../Buttons/YellowBotton";
import { styleCol, styleText } from "./styles";
import google from "../../assets/google.png";

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
            <YellowButton
              content="Cadastrar"
              onClick={() => {
                console.log("Botão 1 Clicado");
              }}
            />
            <YellowButton
              content={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={google} alt="Google" width="30vw" height="30vw" />
                </div>
              }
              onClick={() => {
                // Lógica personalizada para o Botão 2
                console.log("Botão 2 Clicado");
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
