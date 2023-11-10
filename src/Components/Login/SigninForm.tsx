import React, { FormEvent, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { inputStyle } from "./styles";

import YellowButton from "../Buttons/YellowBotton";
import { GoogleLogin } from "@react-oauth/google";

import { fazerLogin } from "../../api/fazerLogin";
import { jwtDecode, JwtPayload } from "jwt-decode";

const SigninForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const mail = formData.get("mail") as string;
    const password = formData.get("password") as string;

    try {
      const errorMessage = await fazerLogin({ mail, password });

      if (errorMessage) {
        setError(errorMessage);
        setShowAlert(true);
      } else {
        // Usuário autenticado com sucesso, redirecione ou faça outras ações necessárias
        setError(null);
        setShowAlert(false);
      }
    } catch (error) {
      console.error("Erro desconhecido:", error);
      setError("Erro desconhecido");
      setShowAlert(true);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

 
  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        {showAlert && (
          <Alert variant="danger" onClose={handleAlertClose} dismissible>
            {error}
          </Alert>
        )}

        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="mail"
            placeholder="Email"
            name="mail"
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="password">
          <Form.Control
            type="password"
            placeholder="Senha"
            name="password"
            style={inputStyle}
          />
        </Form.Group>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <YellowButton type="submit" content="Login" />

          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const token: any = credentialResponse.credential;
              const decoded = jwtDecode<JwtPayload>(token);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </Form>
    </div>
  );
};

export default SigninForm;
