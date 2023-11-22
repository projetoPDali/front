import React from "react";
import image from "../../assets/image-header.png";
import { Button, Card, Container } from "react-bootstrap";
import COLORS from "../../constant/colors";

const CardText = {
  margin: 0,
};

const ImagemBike = () => {
  return (
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
          src={image}
          height={"100%"}
          style={{ objectFit: "cover", padding: 0 }}
        />
      </Card>
      <Card className="col-11"
        style={{
          borderRadius: 0,
          color: COLORS.black,
          borderWidth: 0,
        }}
      >
        <Card.Body
          style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)", marginTop: 30, marginBottom: 30 }}
        >
          <Card.Header style={{ backgroundColor: "white", paddingLeft: 0 }}>
            {" "}
            <Card.Title>Sobre o Locador</Card.Title>
          </Card.Header>
          <Card.Text style={CardText}>Nome:</Card.Text>
          <Card.Text style={CardText}>Email:</Card.Text>
          <Card.Text style={CardText}>Telefone:</Card.Text>
        </Card.Body>
      </Card>
      
    </Container>
  );
};

export default ImagemBike;
