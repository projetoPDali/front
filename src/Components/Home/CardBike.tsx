import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";
import COLORS from "../../constant/colors";
import { Link, useNavigate } from "react-router-dom";

const MAX_TEXT_LINES = 5;

interface Bike {
  id: number;
  description: string;
  hourlyvalue: string;
  dailyvalue: string;
  photos: { filename: string }[];
  brand: { name: string };
  rim: string;
  size: string;
  material: { name: string };
  suspension: boolean;
  gear: string;
  gender: { name: string };
  user: { id: number; name: string; mail: string; phone: string };
  address: {
    street: string;
    city: string;
    neighborhood: string;
    state: string;
    cep: number;
    number: number;
  };
}

interface CardBikeProps {
  filters: string[];
}

const CardBike: React.FC<CardBikeProps> = ({ filters }) => {
  const navigate = useNavigate();
  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {
    // Extract material and brand filters
    const materialFilter = filters.find((filter) =>
      filter.startsWith("Material-")
    );
    const brandFilter = filters.find((filter) => filter.startsWith("Marca-"));

    // Build query parameters
    const queryParams = [];
    if (materialFilter) {
      const materialName = materialFilter
        .replace("Material-", "")
        .toLowerCase();
      queryParams.push(`materialName=${encodeURIComponent(materialName)}`);
      console.log("Material Filter:", materialName);
    }
    if (brandFilter) {
      const brandName = brandFilter.replace("Marca-", "").toLowerCase();
      queryParams.push(`brandName=${encodeURIComponent(brandName)}`);
      console.log("Brand Filter:", brandName);
    }

    const url = `http://localhost:3001/bike/filter?${queryParams.join("&")}`;
    console.log("Formed URL:", url);

    // Make the filtered API request
    axios
      .get(url)
      .then((response) => {
        setBikes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar bicicletas:", error);
      });
  }, [filters]);

  return (
    <div className="container" style={{ marginTop: 30 }}>
      <Row>
        {bikes.map((bike) => (
          <Col
            key={bike.id}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            className="d-flex justify-content-center"
            style={{ marginBottom: 10 }}
          >
            <div
              onClick={() => navigate("/detalhes-bike", { state: { bike } })}
            >
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
                <Card.Body
                  style={{
                    backgroundColor: COLORS.lightyellow,
                    padding: "1vw",
                  }}
                >
                  <Card.Text
                    style={{
                      maxHeight: "6em",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {bike.description}
                  </Card.Text>
                  <Card.Text style={{ marginBottom: 0 }}>
                    Valor hora: {bike.hourlyvalue}
                  </Card.Text>
                  <Card.Text>Valor dia: {bike.dailyvalue}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardBike;
