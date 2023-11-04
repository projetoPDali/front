import React, { FormEvent, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { cadastrarUser } from "../../api/cadastrarUser";
import { inputStyle } from "./styles";
import google from "../../assets/google.png";
import YellowButton from "../Buttons/YellowBotton";
import GoogleLogin from "react-google-login";
import COLORS from "../../constant/colors";

const SignupForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState<string | null>(null);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      setAlertVariant("danger");
      setShowAlert(true);
      return; // Impede o envio do formulário
    }

    const mail = formData.get("mail") as string;
    const name = formData.get("name") as string;
    const alias = formData.get("alias") as string;
    const phone = formData.get("phone") as string;

    // Validação do formato do email com regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(mail)) {
      setError("Formato de email inválido");
      setAlertVariant("danger");
      setShowAlert(true);
      return; // Impede o envio do formulário
    }

    const userData = {
      mail,
      name,
      alias,
      phone,
      password,
    };

    try {
      const registeredUser = await cadastrarUser(userData);

      if (registeredUser !== null) {
        console.log("User registered:", registeredUser);
        setError("Usuário cadastrado com sucesso");
        setAlertVariant("success");
        setShowAlert(true);
      } else {
        setError("Erro ao registrar o usuário");
        setAlertVariant("danger");
        setShowAlert(true);
      }
    } catch (error: any) {
      console.error("Error registering user:", error);
      setError(error.message);
      setAlertVariant("danger");
      setShowAlert(true);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const responseGoogle = (response: any) => {
    // Implemente a lógica aqui para lidar com a resposta do Google Login
    console.log(response);
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
            type="email" // Define o tipo de entrada como "email"
            placeholder="Email"
            name="mail"
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="name">
          <Form.Control
            type="text"
            placeholder="Nome"
            name="name"
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="alias">
          <Form.Control
            type="text"
            placeholder="Nome de Usuário"
            name="alias"
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="phone">
          <Form.Control
            type="text"
            placeholder="Telefone"
            name="phone"
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="password">
          <Form.Control
            type="password" // Define o tipo de entrada como "password"
            placeholder="Senha"
            name="password"
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="confirmPassword">
          <Form.Control
            type="password" // Define o tipo de entrada como "password"
            placeholder="Confirmar senha"
            name="confirmPassword"
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
          <YellowButton type="submit" content="Cadastrar" />
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

export default SignupForm;
