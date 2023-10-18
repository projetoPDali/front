import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FormBike from "../Components/CadastroBike/Form";
import Imagem from "../assets/ciclista-amarelo.png";
import COLORS from "../constant/colors";
import MainNavbar from "../Components/Navbar/Navbar";
import FormAddress from "../Components/CadastroBike/AddressForm";

interface BikeData {
  title: string;
  brand: string;
  rim: string;
  frameSize: string;
  material: string;
  suspension: string;
  gear: string;
  gender: string;
  description: string;
  hourlyvalue: string;
  dailyvalue: string;
}

interface AddressData {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
}

const transformData = (bikeData: BikeData, addressData: AddressData) => {
  // Transform bikeData into the desired format
  const transformedBikeData = {
    id: 1, // You can set this as needed
    size: "M", // Example value
    gender: { name: bikeData.gender },
    gear: `${bikeData.gear}-speed`,
    rim: parseFloat(bikeData.rim),
    suspension: Boolean(parseInt(bikeData.suspension)),
    description: bikeData.description,
    hourlyvalue: bikeData.hourlyvalue,
    dailyvalue: bikeData.dailyvalue,
    user: {
      id: 1, // You can set this as needed
      alias: "aaa", // Example value
      mail: "a@teste.com", // Example value
      phone: "1290000000", // Example value
    },
    brand: {
      name: bikeData.brand,
    },
    material: {
      name: bikeData.material,
    },
    address: {
      street: addressData.street,
      state: addressData.state,
      cep: parseInt(addressData.cep.replace(/\D/g, "")), // Remove non-numeric characters from the cep
      city: addressData.city,
      number: parseInt(addressData.number),
    },
  };

  return transformedBikeData;
};

const CadastroBike: React.FC = () => {
  const [bikeData, setBikeData] = useState<BikeData>({
    title: "",
    brand: "",
    rim: "",
    frameSize: "",
    material: "",
    suspension: "",
    gear: "",
    gender: "",
    description: "",
    hourlyvalue: "",
    dailyvalue: "",
  });

  const [addressData, setAddressData] = useState<AddressData>({
    cep: "",
    state: "",
    city: "",
    neighborhood: "",
    street: "",
    number: "",
  });

  const handleSave = () => {
    const transformedData = transformData(bikeData, addressData);
    console.log(JSON.stringify(transformedData, null, 2)); // Log the transformed data
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
            <FormBike bikeData={bikeData} setBikeData={setBikeData} />
            <FormAddress addressData={addressData} setAddressData={setAddressData} />
            <Button onClick={handleSave}>Salvar</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CadastroBike;
