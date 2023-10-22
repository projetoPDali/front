import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FormBike from "../Components/CadastroBike/Form";
import FormAddress from "../Components/CadastroBike/AddressForm";
import Imagem from "../assets/ciclista-amarelo.png";
import COLORS from "../constant/colors";
import MainNavbar from "../Components/Navbar/Navbar";
import { cadastrarBike } from "../api/cadastrarBike"; // Importe a função de envio para o backend
import BotaoUplaod from "../Components/CadastroBike/BotaoUpload";
import FileUploadComponent from "../Components/CadastroBike/BotaoUpload";

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

  const [mostrarBotaoUpload, setMostrarBotaoUpload] = useState(false);


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
      user: 1,
      brand: bikeData.brand,
      material: bikeData.material,
      address: addressData,
    };
    console.log(userData);

    cadastrarBike(userData)
    cadastrarBike(userData)
    .then((responseData) => {
      // Cadastro bem-sucedido, agora defina mostrarBotaoUpload como verdadeiro e role até o BotaoUpload
      setMostrarBotaoUpload(true);

      const botaoUploadElement = document.getElementById("BotaoUpload");
      if (botaoUploadElement) {
        botaoUploadElement.scrollIntoView({ behavior: "smooth" });
      }
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
            style={{
              backgroundColor: COLORS.primary,
              position: "sticky",
              top: 0,
              height: "100vh",
            }}
          >
            <img
              src={Imagem}
              className="img-fluid align-center h-100"
              alt="Ciclista amarelo"
            />
          </Col>

          <Col xs={12} md={7} style={{ backgroundColor: COLORS.lightGray, overflowY: "scroll", height: "100vh" }}>
            <FileUploadComponent/>
          <FormBike onSaveData={handleSaveBikeData} />
          <FormAddress onSaveAddress={handleSaveAddressData} />
          <Button
            style={{
              backgroundColor: COLORS.primary,
              borderColor: COLORS.primary,
              fontWeight: "bold",
              marginBottom: 30
            }}
            className="col-3 mx-auto d-block"
            onClick={handleSaveData}
          >
            Salvar
          </Button>
          
          {mostrarBotaoUpload && (
            <div id="BotaoUpload">
              <BotaoUplaod />
            </div>
          )}

        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CadastroBike;
