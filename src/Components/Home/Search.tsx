import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Col, Row } from "react-bootstrap";
import COLORS from "../../constant/colors";

const buttonsData = [
  { label: "Material", actions: ["Fibra de Carbono", "Alumínio", "Aço"] },

  { label: "Marca", actions: ["Sense", "Caloi", "Oggi", "Trek", "Giant"] },

  { label: "Marcha", actions: ["Sim", "Não"] },
  { label: "Quadro", actions: ["Pequeno", "Médio", "Grande", "Extra Grande"] },
  { label: "Aro", actions: [] },
  { label: "Valor Hora", actions: ["Menos de R$50", "Entre R$50 e R$70"] },
  { label: "Valor Dia", actions: ["Menos de R$100", "Entre R$110 e R$150"] },
  { label: "Suspenção", actions: ["sim", "não"] },
  { label: "Genero", actions: ["Feminino", "Masculino", "Unissex"] },


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
            style={{ color: COLORS.white }}
            as={ButtonGroup}
            key={index}
            id={`dropdown-variants-${button.label}`}
            variant={button.label.toLowerCase()}
            title={button.label}
          >
            {button.actions.map((action, actionIndex) => (
              <Dropdown.Item
                style={{ backgroundColor: COLORS.white }}
                key={actionIndex}
                eventKey={actionIndex + 1}
              >
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
