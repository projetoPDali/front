import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { CSSProperties } from "react";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import COLORS from "../../constant/colors";
import { useNavigate } from "react-router-dom";

interface Bike {
  id: number;
  description: string;
  hourlyvalue: string;
  dailyvalue: string;
  photos: { filename: string }[];
  brand: { name: string };
  address: { city: string; state: string };
}

const UserBikes: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [userBikes, setUserBikes] = useState<Bike[]>([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3001/bike/user/${user.id}`)
        .then((response) => {
          setUserBikes(response.data);
        })
        .catch((error) => {
          console.error("Erro ao carregar bicicletas do usuário:", error);
        });
    }
  }, [user]);

  const cardStyle: CSSProperties = {
    backgroundColor: COLORS.primary,
    borderRadius: 0,
    paddingLeft: "1vw",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
    marginBottom: "1vw",
  };

  const imageColStyle: CSSProperties = {
    backgroundColor: COLORS.white,
    padding: 0,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
    
    height: "180px", // Altura máxima desejada
    overflow: "hidden"
  };

  const handleCardClick = (bike: Bike) => {
    // Navegar para a página detalhes-vagas com os dados da bike
    navigate("/detalhes-bike", { state: { bike } });
  };

  return (
    <div>
      {userBikes.map((bike) => (
        <Card
          key={bike.id}
          style={cardStyle}
          onClick={() => handleCardClick(bike)}
        >
          <Card.Body>
            <Row>
              <Col xs={12} md={4} style={imageColStyle}>
                {bike.photos.length > 0 && (
                  <img
                    src={`http://localhost:3001/foto/public/${bike.photos[0].filename}`}
                    alt={`Bike ${bike.id}`}
                    className="img-fluid"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </Col>
              <Col xs={12} md={8}>
                <div style={{ color: COLORS.white, marginTop: "1vw" }}>
                  <Card.Title  style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3, // Limit to 4 lines
                     
                    }}>{bike.description}</Card.Title>
                  <Card.Text style={{ margin: 0 }}>
                    {bike.address.city}, {bike.address.state}
                  </Card.Text>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default UserBikes;