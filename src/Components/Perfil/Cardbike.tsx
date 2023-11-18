import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { CSSProperties } from "react";
import imageHeader from "../../assets/image-header.png";
import COLORS from "../../constant/colors";


interface CardbikeProps {
  cardBackgroundColor: keyof typeof COLORS;
  imageColBackgroundColor: keyof typeof COLORS;
  textColor: keyof typeof COLORS;
}

const Cardbike: React.FC<CardbikeProps> = ({
  cardBackgroundColor,
  imageColBackgroundColor,
  textColor,
}) => {
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
           Bike
            </Card.Title>
            <Card.Text>
            
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Cardbike;
