import React, { FormEvent, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { inputStyle } from "./styles";

import YellowButton from "../Buttons/YellowBotton";
import { GoogleLogin } from "@react-oauth/google";

import { fazerLogin } from "../../api/fazerLogin";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  email: string;
  sub: string; // Se password corresponde a 'jti'
}

const SigninForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [googleLoginSuccess, setGoogleLoginSuccess] = useState(false);

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

  const handleGoogleLoginSuccess = async (credentialResponse: any) => {
    try {
      const token: any = credentialResponse.credential;
      const decoded = jwtDecode<CustomJwtPayload>(token);

      // Realize o login com os dados obtidos do Google
      const errorMessage = await fazerLogin({
        mail: decoded.email,
        password: decoded.sub, // Usando 'sub' como senha
      });

      if (errorMessage) {
        setError(errorMessage);
        setShowAlert(true);
      } else {
        // Usuário autenticado com sucesso, redirecione ou faça outras ações necessárias
        setError(null);
        setShowAlert(false);
        setGoogleLoginSuccess(true);
      }

      // Imprima os dados decodificados no console.log
      console.log("Dados decodificados do Google:", decoded);
    } catch (error) {
      console.error("Erro durante o login com o Google:", error);
      setError("Erro durante o login com o Google");
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

        {googleLoginSuccess && (
          <Alert variant="success" onClose={() => setGoogleLoginSuccess(false)} dismissible>
            Login com o Google bem-sucedido!
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
            onSuccess={handleGoogleLoginSuccess}
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