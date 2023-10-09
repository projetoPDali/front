import React from "react";
import GreenBotton from "./GreenBotton";
import * as styles from "./styles"; // Importe os estilos
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const buttonsData = [
  { label: "Material", actions: ["Carbono", "Alumínio"] },
  { label: "Marca", actions: ["Action 2"] },
  { label: "Modelo", actions: ["Action 3"] },
  { label: "Marcha", actions: ["Carbono", "Alumínio"] },
  { label: "Quadro", actions: ["Action 2"] },
  { label: "Aro", actions: ["Action 3"] },
  { label: "Valor Hora", actions: ["Carbono", "Alumínio"] },
  { label: "Valor Dia", actions: ["Action 2"] },
  { label: "Suspenção", actions: ["sim", "não"] },
  { label: "Genero", actions: ["Carbono", "Alumínio"] },

  // Adicione mais botões com seus valores aqui
];

const Search = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {buttonsData.map((button, index) => (
        <DropdownButton
          as={ButtonGroup}
          key={index}
          id={`dropdown-variants-${button.label}`}
          variant={button.label.toLowerCase()}
          title={button.label}
        >
          {button.actions.map((action, actionIndex) => (
            <Dropdown.Item key={actionIndex} eventKey={actionIndex + 1}>
              {action}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      ))}
    </div>
  );
};

export default Search;
