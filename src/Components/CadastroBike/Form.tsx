import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import COLORS from "../../constant/colors";

interface FormData {
  title: string;
  brand: { name: string };
  rim: string;
  size: string;
  material: { name: string };
  suspension: boolean;
  gear: string;
  gender: { name: string };
  hourlyvalue: string;
  dailyvalue: string;
  description: string;
}

interface FormBikeProps {
  onSaveData: (formData: FormData) => void;
}

const FormBike: React.FC<FormBikeProps> = ({ onSaveData }) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    brand: { name: "" },
    rim: "",
    size: "",
    material: { name: "" },
    suspension: false,
    gear: "",
    gender: { name: "" },
    hourlyvalue: "",
    dailyvalue: "",
    description: "",
  });

  const inputStyle: React.CSSProperties = {
    borderColor: COLORS.gray,
  };

  const lineStyle: React.CSSProperties = {
    backgroundColor: COLORS.primary,
    height: "2px",
    width: "4vw",
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "suspension") {
      const isSuspension = value === "sim";
      setFormData({
        ...formData,
        suspension: isSuspension,
      });
    } else if (name === "gender") {
      const genderValue =
        value === "feminino"
          ? { name: "feminino" }
          : value === "masculino"
          ? { name: "masculino" }
          : { name: "unissex" };
      setFormData({
        ...formData,
        gender: genderValue,
      });
    } else if (name === "brand" || name === "material") {
      const nameValue = { name: value };
      setFormData({
        ...formData,
        [name]: nameValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Envie os dados sempre que houver uma alteração
    onSaveData(formData);
  };

  return (
    <div className="col-10 mx-auto d-block">
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
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              name="title"
              placeholder="Título"
              style={inputStyle}
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              name="brand"
              placeholder="Marca"
              style={inputStyle}
              value={formData.brand.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Col xs={5}>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                name="rim"
                placeholder="Aro"
                style={inputStyle}
                value={formData.rim}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={7}>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                name="size"
                placeholder="Tamanho do quadro"
                style={inputStyle}
                value={formData.size}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
            <Form.Control
              as="select"
              name="material"
              style={inputStyle}
              value={formData.material.name}
              onChange={handleChange}
            >
              <option value="">Selecione o Material</option>
              <option value="aço">Aço</option>
              <option value="fibra de carbono">Fibra de carbono</option>
              <option value="alumínio">Alumínio</option>
              <option value="outro">Outro</option>
            </Form.Control>
          </Form.Group>
          <Col xs={5}>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput4">
              <Form.Control
                as="select"
                name="suspension"
                style={inputStyle}
                value={formData.suspension ? "sim" : "nao"}
                onChange={handleChange}
              >
                <option value="nao">Não tem Suspensão</option>
                <option value="sim">Tem Suspensão</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col xs={7}>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                name="gear"
                placeholder="Marcha"
                style={inputStyle}
                value={formData.gear}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Form.Group className="mb-4">
            <Form.Control
              as="select"
              name="gender"
              style={inputStyle}
              value={formData.gender.name}
              onChange={handleChange}
            >
              <option value="">Selecione o Gênero</option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
              <option value="unissex">Unissex</option>
            </Form.Control>
            <p style={{ margin: 0 }}>Referente ao formato do banco</p>
          </Form.Group>
          <Col xs={6}>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                name="hourlyvalue"
                placeholder="Preço por Hora"
                style={inputStyle}
                value={formData.hourlyvalue}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-4">
              <Form.Control
                type="text"
                name="dailyvalue"
                placeholder="Preço por dia"
                style={inputStyle}
                value={formData.dailyvalue}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Form.Group className="mb-4" controlId="descricao">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              style={inputStyle}
              value={formData.description}
              onChange={handleChange}
              onBlur={handleChange} // Adicione o evento onBlur
            />
          </Form.Group>
          
        </Row>
      </Form>
    </div>
  );
};

export default FormBike;
