
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Col, Row } from "react-bootstrap";
import COLORS from "../../constant/colors";

const buttonsData = [
  { label: "Material", actions: ["Fibra de Carbono", "Alumínio", "Aço"] },

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
    <Row style={{ display: "flex", justifyContent: "center" }}>
      {buttonsData.map((button, index) => (
        <Col
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "space-around",
            alignContent: "space-around",
            backgroundColor: COLORS.primary,
          }}
        >
          <DropdownButton
            style={{color: COLORS.white}}
            as={ButtonGroup}
            key={index}
            id={`dropdown-variants-${button.label}`}
            variant={button.label.toLowerCase()}
            title={button.label}
          >
            {button.actions.map((action, actionIndex) => (
              <Dropdown.Item style={{backgroundColor: COLORS.white}}
               key={actionIndex} eventKey={actionIndex + 1}>
                {action}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      ))}
    </Row>
  );
};

export default Search;
