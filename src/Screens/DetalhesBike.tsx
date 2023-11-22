import { Col, Container, Row, Card, Button } from "react-bootstrap";
import React, { useState } from "react";
import MainNavbar from "../Components/Navbar/Navbar";
import image from "../assets/image-header.png";
import COLORS from "../constant/colors";
import { useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import BasicModal from "../Components/DetalhesBike/Modal";
import Box from "@mui/material/Box";
import { useAuth } from "../Context/AuthContext";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CardText = {
  margin: 0,
};

const DetalhesBike = () => {
  const location = useLocation();
  const { bike } = location.state || {};
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const { user } = useAuth();
  const [value, setValue] = React.useState<number | null>(2);

  const handleAluguelClick = async () => {
    try {
      // Exibe os dados que estão sendo enviados
      console.log("Dados enviados:", {
        idowner: bike.user.id,
        idclient: user?.id,
        date: new Date().toISOString(),
        ownervaluation: 1,
        bike: {
          id: bike.id,
        },
      });

      // Faz a requisição POST para http://localhost:3001/locacao
      const response = await fetch("http://localhost:3001/locacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idowner: bike.user.id,
          idclient: user?.id,
          date: new Date().toISOString(),
          ownervaluation: 1,
          bike: {
            id: bike.id,
          },
        }),
      });

      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        // Exibe o modal
        setModalOpen(true);
      } else {
        console.error("Erro ao realizar a locação");
        // Lide com o erro de acordo com sua lógica
      }
    } catch (error) {
      console.error("Erro ao realizar a locação", error);
      // Lide com o erro de acordo com sua lógica
    }
  };

  const handleFirstModalClose = () => {
    // Fecha o primeiro modal
    setModalOpen(false);
    // Exibe o segundo modal
    setSecondModalOpen(true);
  };

  const handleSecondModalClose = () => {
    // Fecha o segundo modal
    setSecondModalOpen(false);
  };

  const handleAvaliacaoClick = async () => {
    try {
      const response = await fetch(`http://localhost:3001/locacao`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: bike.user.id,
          ownervaluation: value,
        }),
      });

      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        // Fecha o segundo modal
        setSecondModalOpen(false);
        // Aqui você pode adicionar qualquer lógica adicional que precisa ser executada após a avaliação
      } else {
        console.error("Erro ao realizar a avaliação");
        // Lide com o erro de acordo com sua lógica
      }
    } catch (error) {
      console.error("Erro ao realizar a avaliação", error);
      // Lide com o erro de acordo com sua lógica
    }
  };

  return (
    <div>
      <MainNavbar />
      <Container style={{ marginTop: 40 }}>
        <Row>
          <Col xs={12} md={7}>
            <Container fluid style={{ padding: 0 }}>
              <Card
                style={{
                  height: 390,
                  borderRadius: 0,
                  borderWidth: 2,
                  borderColor: COLORS.black,
                  padding: 0,
                }}
              >
                <Card.Img
                  variant="top"
                  src={`http://localhost:3001/foto/public/${bike.photos[0].filename}`}
                  height={"100%"}
                  style={{ objectFit: "cover", padding: 0, borderRadius: 0 }}
                />
              </Card>
              <Card
                className="col-12 col-md-11"
                style={{
                  borderRadius: 0,
                  color: COLORS.black,
                  borderWidth: 0,
                  marginTop: 20,
                }}
              >
                <Card.Body
                  style={{
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                    marginBottom: 30,
                  }}
                >
                  <Card.Header
                    style={{ backgroundColor: "white", paddingLeft: 0 }}
                  >
                    <Card.Title>
                      <strong>Endereço</strong>
                    </Card.Title>
                  </Card.Header>
                  <Card.Text style={CardText}>
                    <strong>Estado:</strong> {bike?.address.state}
                  </Card.Text>
                  <Card.Text style={CardText}>
                    <strong>Cidade:</strong> {bike?.address.city}
                  </Card.Text>
                  <Card.Text style={CardText}>
                    <strong>Bairro:</strong>{" "}
                    {bike?.address.neighborhood || "Não informado"}
                  </Card.Text>

                  <Card.Text style={CardText}>
                    <strong>Numero:</strong> {bike?.address.number}
                  </Card.Text>
                  <Card.Text style={CardText}>
                    <strong>CEP:</strong> {bike?.address.cep}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
          <Col xs={12} md={5}>
            <Container fluid>
              <Card
                style={{
                  borderRadius: 0,
                  color: COLORS.black,
                  borderWidth: 0,
                }}
              >
                <Card.Body
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)" }}
                >
                  <Card.Header
                    style={{ backgroundColor: "white", paddingLeft: 0 }}
                  >
                    <Card.Title>
                      <strong>Informações da Bicicleta</strong>
                    </Card.Title>
                  </Card.Header>
                  <Card.Text style={CardText}>
                    <strong>Marca:</strong> {bike?.brand.name}
                  </Card.Text>
                  <Card.Text style={CardText}>
                    <strong>Aro:</strong> {bike?.rim}
                  </Card.Text>
                  <Card.Text style={CardText}>
                    <strong>Tamanho:</strong> {bike?.size}
                  </Card.Text>
                  <Card.Text style={CardText}>
                    <strong>Material:</strong> {bike?.material.name}
                  </Card.Text>
                  <Card.Text style={CardText}>
                    <strong>Suspensão:</strong>{" "}
                    {bike?.suspension ? "Sim" : "Não"}
                  </Card.Text>
                  <Card.Text style={CardText}>
                    <strong>Marcha:</strong> {bike?.gear}{" "}
                  </Card.Text>
                  <Card.Text style={CardText}>
                    <strong>Gênero:</strong> {bike?.gender.name}
                  </Card.Text>
                </Card.Body>
              </Card>
              <h3 style={{ marginTop: 30 }}>
                <strong>Descrição</strong>
              </h3>
              <p style={{ color: COLORS.gray }}>{bike?.description}</p>
              <Button
                className="col-5 mx-auto d-block"
                style={{
                  backgroundColor: COLORS.primary,
                  borderColor: COLORS.primary,
                  fontWeight: "bold",
                  marginTop: "4vw",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={handleAluguelClick}
              >
                <strong>Alugar</strong>
              </Button>
              <Modal
                open={isModalOpen}
                onClose={handleFirstModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Entre em Contato com o Locador
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {bike?.user.mail}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {bike?.user.phone}
                  </Typography>
                </Box>
              </Modal>
              <Modal
                open={isSecondModalOpen}
                onClose={handleSecondModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Agora o Avalie
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleAvaliacaoClick}
                    style={{ marginTop: "20px" }}
                  >
                    Avaliar
                  </Button>
                </Box>
              </Modal>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetalhesBike;
