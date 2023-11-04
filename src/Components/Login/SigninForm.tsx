import React, { FormEvent, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { inputStyle } from "./styles";
import google from "../../assets/google.png";
import YellowButton from "../Buttons/YellowBotton";
import GoogleLogin from "react-google-login";
import COLORS from "../../constant/colors";
import { fazerLogin } from "../../api/fazerLogin"; // Importe a função fazerLogin

const SigninForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState<string | null>(null);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const mail = formData.get("mail") as string;
    const password = formData.get("password") as string;
  
    console.log('Email fornecido no frontend:', mail); // Adicione esta linha
  
    try {
      const userData = await fazerLogin({ mail, password });
  
      // Se a função fazerLogin não lançou uma exceção, o login foi bem-sucedido
      console.log("Login bem-sucedido:", userData);
      // Faça o redirecionamento ou ação apropriada após o login bem-sucedido, se necessário.
    } catch (error) {
      setError("Credenciais inválidas");
      setAlertVariant("danger");
      setShowAlert(true);
    }
  };

  const responseGoogle = (response: any) => {
    // Implemente a lógica aqui para lidar com a resposta do Google Login
    console.log(response);
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
            clientId="977680160090-qgos9d3eqrsu68ptnbl5q096cq8pvopj.apps.googleusercontent.com"
            buttonText="Continuar com o Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <button
                style={{
                  backgroundColor: COLORS.secondary,
                  borderColor: COLORS.secondary,
                  borderWidth: 0,
                  fontWeight: "bold",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                  minWidth: "151px",
                  minHeight: "41px",
                  color: COLORS.white,
                  borderRadius: 7,
                }}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="YellowButton"
              >
                <img src={google} alt="logo google" width={30} height={30} />
              </button>
            )}
          />
        </div>
      </Form>
    </div>
  );
};

export default SigninForm;
