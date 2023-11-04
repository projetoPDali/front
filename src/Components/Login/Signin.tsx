import { Container, Row, Col } from "react-bootstrap";

import { styleCol, styleText } from "./styles";
import SigninForm from "./SigninForm";


const Signin = () => {
  return (
    <Container>
      <Row
        className="align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Col xs={12} md={6} style={styleCol}>
          <h1 style={styleText}>LOGIN</h1>

          <div style={{ paddingRight: 10, paddingLeft: 10 }}>
            <SigninForm />
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

export default Signin;
