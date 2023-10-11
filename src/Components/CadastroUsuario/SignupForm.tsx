import React, { FormEvent, useState } from "react";
import { Form, Button } from "react-bootstrap";
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

    console.log("User data:", userData);

    try {
      const registeredUser = await cadastrarUser(userData); // Call the function from userApi
      console.log("User registered:", registeredUser);
      // Handle success or redirection to another page
    } catch (error) {
      console.error("Error registering user:", error);
      // Handle error, show an error message, etc.
    }
  };

  const handleCadastrarButtonClick = () => {
    // Log that the button was clicked
    console.log("Cadastrar button clicked");

    // Trigger the form submission when the "Cadastrar" button is clicked
    const form = document.getElementById("signupForm") as HTMLFormElement;
    form && form.dispatchEvent(new Event("submit"));
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
           <YellowButton type="submit" content="Cadastrar" onClick={handleCadastrarButtonClick} /> 
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
              // Lógica personalizada para o Botão 2
              console.log("Botão 2 Clicado");
            }}
          />
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;