import React, { MouseEvent, ReactNode } from "react";
import { Alert, Button } from "react-bootstrap";
import COLORS from "../../constant/colors";

interface YellowButtonProps {
  content: ReactNode; // Conteúdo do botão (pode ser texto, imagem, etc.)
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Função de clique personalizada (opcional)
  type?: "button" | "submit" | "reset"; // Type attribute for the button (optional)
}

const YellowButton: React.FC<YellowButtonProps> = ({ content, onClick, type }) => {

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      type={type || "button"} // Use the provided type or default to "button"
      className="fixed-button-size"
      style={{
        backgroundColor: COLORS.secondary,
        borderColor: COLORS.secondary,
        fontWeight: "bold",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
        minWidth: "150px", // Defina a largura mínima desejada
        minHeight: "40px",
      }}
      onClick={handleClick}
    >
      {content}
    </Button>
  );
};

export default YellowButton;
