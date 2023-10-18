import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import COLORS from "../../constant/colors";

interface BikeData {
  title: string;
  brand: string;
  rim: string;
  frameSize: string;
  material: string;
  suspension: string;
  gear: string;
  gender: string;
  description: string;
  hourlyvalue: string;
  dailyvalue: string;
}

interface FormBikeProps {
  bikeData: BikeData;
  setBikeData: React.Dispatch<React.SetStateAction<BikeData>>;
}

const FormBike: React.FC<FormBikeProps> = ({ bikeData, setBikeData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBikeData({ ...bikeData, [name]: value });
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
        <h1 style={{ textAlign: "center" }}>ADICIONAR BICICLETA</h1>
        <div style={lineStyle}></div>
      </div>
      <Form style={{ padding: 20 }}>
        <Row>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              name="title"
              placeholder="Titulo"
              style={inputStyle}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
            <Form.Control
              type="text"
              name="brand"
              placeholder="Marca"
              style={inputStyle}
              onChange={handleChange}
            />
          </Form.Group>
          <Col xs={5}>
            <Form.Group className="mb-4" controlId="aro">
              <Form.Control
                type="text"
                name="rim"
                placeholder="Aro"
                style={inputStyle}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={7}>
            <Form.Group className="mb-4" controlId="tamanhoQuadro">
              <Form.Control
                type="text"
                name="frameSize"
                placeholder="Tamanho do quadro"
                style={inputStyle}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
            <Form.Control
              type="text"
              name="material"
              placeholder="Material"
              style={inputStyle}
              onChange={handleChange}
            />
          </Form.Group>
          <Col xs={5}>
            <Form.Group className="mb-4" controlId="marca">
              <Form.Control
                type="text"
                name="suspension"
                placeholder="Suspensão"
                style={inputStyle}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={7}>
            <Form.Group className="mb-4" controlId="marcha">
              <Form.Control
                type="text"
                name="gear"
                placeholder="Marcha"
                style={inputStyle}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">
            <Form.Control
              type="text"
              name="gender"
              placeholder="Gênero"
              style={inputStyle}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-4" controlId="descricao">
          <Form.Label>Descrição:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            style={inputStyle}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormBike;
