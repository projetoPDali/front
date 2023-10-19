import React, { FormEvent, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { cadastrarUser } from "../../api/cadastrarUser";
import { inputStyle } from "./styles";
import google from "../../assets/google.png";
import YellowButton from "../Buttons/YellowBotton";
import GoogleLogin from 'react-google-login';

const SignupForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState<string | null>(null);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const mail = formData.get("mail") as string;
    const name = formData.get("name") as string;
    const alias = formData.get("alias") as string;
    const phone = formData.get("phone") as string;

    const userData = {
      mail,
      name,
      alias,
      phone,
    };

    try {
      const registeredUser = await cadastrarUser(userData);

      if (registeredUser !== null) {
        console.log("User registered:", registeredUser);
        setError("Usuário cadastrado com sucesso");
        setAlertVariant("success"); // Define a classe de sucesso
        setShowAlert(true);
      } else {
        setError("Erro ao registrar o usuário");
        setAlertVariant("danger"); // Define a classe de erro
        setShowAlert(true);
      }
    } catch (error: any) {
      console.error("Error registering user:", error);
      setError(error.message);
      setAlertVariant("danger"); // Define a classe de erro
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
          <Form.Control type="text" placeholder="Email" name="mail" style={inputStyle} />
        </Form.Group>

        <Form.Group className="mb-4" controlId="name">
          <Form.Control type="text" placeholder="Nome" name="name" style={inputStyle} />
        </Form.Group>

        <Form.Group className="mb-4" controlId="alias">
          <Form.Control type="text" placeholder="Nome de Usuário" name="alias" style={inputStyle} />
        </Form.Group>

        <Form.Group className="mb-4" controlId="phone">
          <Form.Control type="text" placeholder="Telefone" name="phone" style={inputStyle} />
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
  cookiePolicy={'single_host_origin'}
  render={renderProps => (
    <button
      onClick={renderProps.onClick}
      disabled={renderProps.disabled}
      className="YellowButton" // Adicione a classe de estilo que você deseja
    >
      Personalizado
    </button>
  )}
/>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
