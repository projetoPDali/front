import { Row, Col, Button, Form } from "react-bootstrap";
import COLORS from "../../constant/colors";

import React, { useState } from "react";
import axios from "axios";

interface BotaoUploadProps {
  bikeId: number; // Defina o tipo da prop bikeId como number
}

const BotaoUpload: React.FC<BotaoUploadProps> = ({ bikeId }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // Defina o tipo do estado

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("idbike", bikeId.toString());
      try {
        console.log("id que esta sendo enviado",bikeId)
        // Replace with your backend API endpoint
        const response = await axios.post(
          "http://localhost:3001/foto",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("File uploaded successfully:", response.data);
        // You can handle success in your UI, e.g., showing a success message
      } catch (error) {
        console.error("File upload failed:", error);
        // Handle errors as needed, e.g., display an error message to the user
      }
    }
  };

  const lineStyle = {
    backgroundColor: COLORS.primary,
    height: "2px",
    width: "4vw",
  };

  const inputStyle = {
    borderColor: COLORS.gray,
  };

  return (
    <div className="col-10 mx-auto d-block">
      <div
        style={{
          marginTop: "3vw",
          marginBottom: "1vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={lineStyle}></div>
        <h1 style={{ textAlign: "center" }}>ADICIONAR FOTOS</h1>
        <div style={lineStyle}></div>
      </div>
      <Form style={{ padding: 20 }}>
        <Row>
          <Col xs={9}>
            <Form.Group className="mb-4" controlId="rua">
              <Form.Control
                type="file"
                name="file" // Use "file" as the name
                style={inputStyle}
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
          <Col xs={3}>
            <Button
              className="col-12"
              style={{
                backgroundColor: COLORS.primary,
                borderColor: COLORS.primary,
              }}
              onClick={handleUpload}
            >
              Upload
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BotaoUpload;
