import { CSSProperties } from 'react';
import COLORS from '../../constant/colors';

export const navbarStyle: CSSProperties = {
  backgroundColor: COLORS.primary,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  paddingBottom:0,
  paddingTop:0
};

export const navLinkStyle: CSSProperties = {
  color: COLORS.white,
  fontSize: 20,
  paddingRight: 50
};

export const navBrand: CSSProperties = { height: "100%", paddingBottom: 0, paddingTop: 0 };


export const buttonStyle: CSSProperties = {
    color: COLORS.primary,   // Cor do texto do botão
    fontFamily: "sans-serif",
    fontWeight: "bold",
    height: '45px',
    width: '90px',
    borderRadius: 10,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
    
   

  };
