import React, { MouseEvent, ReactNode } from "react";
import { Button } from "react-bootstrap";
import COLORS from "../../constant/colors";
import { useNavigate } from "react-router-dom";

interface YellowButtonProps {
  content: ReactNode; // Conteúdo do botão (pode ser texto, imagem, etc.)
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // Função de clique personalizada (opcional)
}

const YellowButton: React.FC<YellowButtonProps> = ({ content, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    } else {
      navigate("/Login");
    }
  };

  return (
    <Button  className="fixed-button-size"
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
