import React, { FormEvent, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { cadastrarUser } from "../../api/cadastrarUser";
import { inputStyle } from "./styles";
import google from "../../assets/google.png";
import YellowButton from "../Buttons/YellowBotton";
import { GoogleLogin } from "react-google-login";
import COLORS from "../../constant/colors";

const SignupForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState<string>("danger"); // Valor padrão definido como "danger"
  const [formData, setFormData] = useState({
    mail: "",
    name: "",
    alias: "",
    phone: "",
  });

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Atualiza o estado com os dados do formulário
    const mail = formData.mail;
    const name = formData.name;
    const alias = formData.alias;
    const phone = formData.phone;

    console.log("Mail:", mail);
    console.log("Name:", name);
    console.log("Alias:", alias);
    console.log("Phone:", phone);

    try {
      const registeredUser = await cadastrarUser({
        mail,
        name,
        alias,
        phone,
      });

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
    console.log(response);
  };

  // Função para atualizar o estado do formulário
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        {showAlert && (
          <Alert variant={alertVariant} onClose={handleAlertClose} dismissible>
            {error}
          </Alert>
        )}

        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Email"
            name="mail"
            style={inputStyle}
            value={formData.mail}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="name">
          <Form.Control
            type="text"
            placeholder="Nome"
            name="name"
            style={inputStyle}
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="alias">
          <Form.Control
            type="text"
            placeholder="Nome de Usuário"
            name="alias"
            style={inputStyle}
            value={formData.alias}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="phone">
          <Form.Control
            type="text"
            placeholder="Telefone"
            name="phone"
            style={inputStyle}
            value={formData.phone}
            onChange={handleInputChange}
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
