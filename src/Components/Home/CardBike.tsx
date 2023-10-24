import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import COLORS from "../../constant/colors";

interface Bike {
  id: number;
  description: string;
  hourlyvalue: string;
  dailyvalue: string;
  photos: string;
}

const CardBike = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {
    // Aqui, você fará uma solicitação para o endpoint da API que lista todas as bicicletas
    axios.get("http://localhost:3001/bike")
      .then((response) => {
        setBikes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar bicicletas:", error);
      });
  }, []);

  return (
    <div>
      {bikes.map((bike) => (
        <Card key={bike.id} style={{ width: "18rem", margin: 10 }}>
          <Card.Img variant="top" src={`http://localhost:3001/foto/public/1697951661538-35889342.png`} /> {/* Certifique-se de usar a propriedade de imagem correta */}
          <Card.Body style={{ backgroundColor: COLORS.lightyellow, padding: "1vw" }}>
            <Card.Text>{bike.description}</Card.Text>
            <Card.Text style={{ marginBottom: 0 }}>Valor hora: {bike.hourlyvalue}</Card.Text>
            <Card.Text>Valor dia: {bike.dailyvalue}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardBike;
