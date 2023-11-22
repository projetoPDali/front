import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Col, Row } from "react-bootstrap";
import COLORS from "../../constant/colors";

interface Filter {
  label: string;
  actions: string[];
}

const buttonsData: Filter[] = [
  { label: "Material", actions: ["Fibra de Carbono", "Alumínio", "Aço"] },
  { label: "Marca", actions: ["Sense", "Caloi", "Oggi", "Trek", "Giant", "Outra"] },
  { label: "Marcha", actions: ["Sim", "Não"] },
  { label: "Quadro", actions: ["Pequeno", "Médio", "Grande", "Extra Grande"] },
  { label: "Aro", actions: ["26 polegadas", "27,5 polegadas", "29 polegadas", "700c", "24 polegadas", "20 polegadas", "16 polegadas", "Outro"] },
  { label: "Valor Hora", actions: ["Menos de R$50", "Entre R$50 e R$70"] },
  { label: "Valor Dia", actions: ["Menos de R$100", "Entre R$110 e R$150"] },
  { label: "Suspensão", actions: ["Sim", "Não"] },
  { label: "Genero", actions: ["Feminino", "Masculino", "Unissex"] },
  { label: "Limpar Filtros", actions: [] },
];


const Search = ({ onFilterChange }: { onFilterChange: (newSelectedFilters: string[]) => void }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (filterLabel: string, action: string) => {
    const newSelectedFilters: string[] = [...selectedFilters];
    const filterString = `${filterLabel}-${action}`;

    // Check if the filter is already selected
    const filterIndex = newSelectedFilters.indexOf(filterString);

    if (filterIndex !== -1) {
      // If selected, remove it
      newSelectedFilters.splice(filterIndex, 1);
    } else {
      // If not selected, add it
      newSelectedFilters.push(filterString);
    }

    setSelectedFilters(newSelectedFilters);
    onFilterChange(newSelectedFilters);
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    onFilterChange([]);
  };

  const isFilterSelected = (filterLabel: string, action: string) => {
    return selectedFilters.includes(`${filterLabel}-${action}`);
  };

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
          key={index}
        >
          <DropdownButton
            style={{ color: COLORS.white }}
            as={ButtonGroup}
            id={`dropdown-variants-${button.label}`}
            variant={button.label.toLowerCase()}
            title={button.label}
          >
            {button.actions.map((action, actionIndex) => (
              <Dropdown.Item
                style={{
                  backgroundColor: isFilterSelected(button.label, action) ? COLORS.lightGreen : COLORS.white,
                }}
                key={actionIndex}
                onClick={() => handleFilterChange(button.label, action)}
              >
                {action}
              </Dropdown.Item>
            ))}
            {index === buttonsData.length - 1 && (
              <>
                
                <Dropdown.Item onClick={clearAllFilters}>Limpar Filtros</Dropdown.Item>
              </>
            )}
          </DropdownButton>
        </Col>
      ))}
    </Row>
  );
};

export default Search;
