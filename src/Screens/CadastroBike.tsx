import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormBike from "../Components/CadastroBike/Form";
import FormAddress from "../Components/CadastroBike/AddressForm";
import Imagem from "../assets/ciclista-amarelo.png";
import COLORS from "../constant/colors";
import MainNavbar from "../Components/Navbar/Navbar";
import { cadastrarBike } from "../api/cadastrarBike"; // Importe a função de envio para o backend

interface BikeData {
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

interface AddressData {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
}

const CadastroBike: React.FC = () => {
  const [bikeData, setBikeData] = useState<BikeData>({
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

  const [addressData, setAddressData] = useState<AddressData>({
    cep: "",
    state: "",
    city: "",
    neighborhood: "",
    street: "",
    number: "",
  });

  const handleSaveBikeData = (formData: BikeData) => {
    setBikeData(formData);
  };

  const handleSaveAddressData = (formData: AddressData) => {
    setAddressData(formData);
  };

  const handleSaveData = () => {
    const userData = {
      size: bikeData.size,
      gender: bikeData.gender,
      gear: bikeData.gear,
      rim: bikeData.rim,
      suspension: bikeData.suspension,
      description: bikeData.description,
      hourlyvalue: bikeData.hourlyvalue,
      dailyvalue: bikeData.dailyvalue,
      user: 1, // Você pode definir o valor do usuário aqui
      brand: bikeData.brand,
      material: bikeData.material,
      address: addressData,
    };

    // Chame a função de envio para o backend
    cadastrarBike(userData)
      .then((responseData) => {
        // Lida com a resposta do backend, se necessário
      })
      .catch((error) => {
        // Lida com erros, se necessário
      });
  };

  return (
    <div>
      <MainNavbar />
      <Container fluid>
        <Row>
          <Col
            md={5}
            className="d-none d-md-block"
            style={{ backgroundColor: COLORS.primary, position: "sticky", top: 0, height: "100vh" }}
          >
            <img
              src={Imagem}
              className="img-fluid align-center h-100"
              alt="Ciclista amarelo"
            />
          </Col>

          <Col xs={12} md={7} style={{ backgroundColor: COLORS.lightGray, overflowY: "scroll", height: "100vh" }}>
            <FormBike onSaveData={handleSaveBikeData} />
            <FormAddress onSaveAddress={handleSaveAddressData} />
            <Button onClick={handleSaveData}>Salvar</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CadastroBike;
