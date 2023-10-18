import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import COLORS from "../../constant/colors";

interface AddressData {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
}

interface FormAddressProps {
  addressData: AddressData;
  setAddressData: React.Dispatch<React.SetStateAction<AddressData>>;
}

const FormAddress: React.FC<FormAddressProps> = ({ addressData, setAddressData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

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
              onChange={handleChange}
            />
          </Form.Group>
          <Col xs={5}>
            <Form.Group className="mb-4" controlId="estado">
              <Form.Control
                type="text"
                name="state"
                placeholder="Estado"
                style={inputStyle}
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
            <Form.Control
              type="text"
              name="neighborhood"
              placeholder="Bairro"
              style={inputStyle}
              onChange={handleChange}
            />
          </Form.Group>
          <Col xs={8}>
            <Form.Group className="mb-4" controlId="rua">
              <Form.Control
                type="text"
                name="street"
                placeholder="Rua"
                style={inputStyle}
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormAddress;
