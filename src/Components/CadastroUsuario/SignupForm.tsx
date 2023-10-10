import React, { FormEvent } from "react";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import { cadastrarUser } from "../../api/cadastrarUser";
import { inputStyle } from "./styles";
import google from "../../assets/google.png";
import YellowButton from "../Buttons/YellowBotton";

const SignupForm = () => {
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
      console.log("User registered:", registeredUser);

      // Show success notification
      toast.success("User registered successfully!", {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Handle success or redirection to another page
    } catch (error) {
      console.error("Error registering user:", error);

      // Show error notification
      toast.error("Error registering user. Please try again later.", {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Handle error, show an error message, etc.
    }
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
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
          <YellowButton
            content={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={google} alt="Google" width="25vw" height="25vw" />
              </div>
            }
            onClick={() => {
              // Custom logic for Button 2
              console.log("Botão 2 Clicado");
            }}
          />
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
