// CardUsuario.tsx

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { CSSProperties } from "react";
import imageHeader from "../../assets/image-header.png";
import COLORS from "../../constant/colors";
import { useAuth } from "../../Context/AuthContext";

interface CardUsuarioProps {
  cardBackgroundColor: keyof typeof COLORS;
  imageColBackgroundColor: keyof typeof COLORS;
  textColor: keyof typeof COLORS;
}

const CardUsuario: React.FC<CardUsuarioProps> = ({
  cardBackgroundColor,
  imageColBackgroundColor,
  textColor,
}) => {
  const { user } = useAuth(); // Access user data from context

  const cardStyle: CSSProperties = {
    backgroundColor: COLORS[cardBackgroundColor],
    borderRadius: 0,
    paddingLeft: "1vw",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
  };

  const imageColStyle: CSSProperties = {
    backgroundColor: COLORS[imageColBackgroundColor],
    padding: 0,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
  };

  return (
    <Card style={cardStyle} className="mb-3">
      <Card.Body>
        <Row>
          <Col xs={12} md={4} style={imageColStyle}>
            <img
              src={imageHeader}
              alt="Sua imagem"
              className="img-fluid"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col xs={12} md={8} className="text-center">
            <Card.Title style={{ paddingTop: "1vw", color: COLORS[textColor] }}>
              {user?.name}
            </Card.Title>
            <div style={{ textAlign: "left", marginLeft: 10 }}>
              <Card.Text style={{margin: 0}}>{user?.alias}</Card.Text>
              <Card.Text style={{margin: 0}}>{user?.mail}</Card.Text>
              <Card.Text style={{margin: 0}}>{user?.phone}</Card.Text>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardUsuario;
