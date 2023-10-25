import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import COLORS from "../../constant/colors";

const MAX_TEXT_LINES = 5;

interface Bike {
  id: number;
  description: string;
  hourlyvalue: string;
  dailyvalue: string;
  photos: { filename: string }[];
  brand: number;
}

const CardBike = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/bike")
      .then((response) => {
        setBikes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar bicicletas:", error);
      });
  }, []);

  return (
    <div className="container" style={{ marginTop: 30 }}>
      <Row>
        {bikes.map((bike) => (
          <Col key={bike.id} xs={12} sm={6} md={4} lg={4} xl={4} className="d-flex justify-content-center" style={{ marginBottom: 10 }}>
            <Card style={{ width: "18rem" }}>
              {bike.photos.length > 0 && (
                <div
                  style={{
                    width: "100%",
                    height: "200px", // Altura máxima desejada
                    overflow: "hidden",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={`http://localhost:3001/foto/public/${bike.photos[0].filename}`}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                </div>
              )}
              <Card.Body style={{ backgroundColor: COLORS.lightyellow, padding: "1vw" }}>
                <Card.Text style={{ maxHeight: "6em", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {bike.description}
                </Card.Text>
                <Card.Text style={{ marginBottom: 0 }}>Valor hora: {bike.hourlyvalue}</Card.Text>
                <Card.Text>Valor dia: {bike.dailyvalue}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardBike;
