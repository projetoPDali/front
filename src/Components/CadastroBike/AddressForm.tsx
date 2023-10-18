import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import COLORS from "../../constant/colors";





const FormAddress = () => {
 

  const inputStyle = {
    borderColor: COLORS.gray,
  };

  const lineStyle = {
    backgroundColor: COLORS.primary,
    height: "2px",
    width: "4vw",
  };

  return (
    <div>
      <div
        style={{
          marginTop: "3vw",
          marginBottom: "1vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={lineStyle}></div>
        <h1 style={{ textAlign: "center" }}>ADICIONAR ENDEREÇO</h1>
        <div style={lineStyle}></div>
      </div>
      <Form style={{ padding: 20 }}>
        <Row>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              name="cep"
              placeholder="Cep"
              style={inputStyle}
             
            />
          </Form.Group>
          <Col xs={5}>
            <Form.Group className="mb-4" controlId="estado">
              <Form.Control
                type="text"
                name="state"
                placeholder="Estado"
                style={inputStyle}
                
              />
            </Form.Group>
          </Col>
          <Col xs={7}>
            <Form.Group className="mb-4" controlId="cidade">
              <Form.Control
                type="text"
                name="city"
                placeholder="Cidade"
                style={inputStyle}
              
              />
            </Form.Group>
          </Col>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
            <Form.Control
              type="text"
              name="neighborhood"
              placeholder="Bairro"
              style={inputStyle}
              
            />
          </Form.Group>
          <Col xs={8}>
            <Form.Group className="mb-4" controlId="rua">
              <Form.Control
                type="text"
                name="street"
                placeholder="Rua"
                style={inputStyle}
                
              />
            </Form.Group>
          </Col>
          <Col xs={4}>
            <Form.Group className="mb-4" controlId="numero">
              <Form.Control
                type="text"
                name="number"
                placeholder="N°"
                style={inputStyle}
              />
              <Button>Mostrar</Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormAddress;
