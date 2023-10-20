import { CSSProperties } from "react";
import COLORS from "../../constant/colors";

export const inputStyle: CSSProperties = {
  borderColor: COLORS.gray,
};

export const styleCol: CSSProperties = {
  backgroundColor: COLORS.primary,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  
  
};

export const styleText: CSSProperties = {
    textAlign: "center",
    color: COLORS.white,
    paddingTop: "4vw",
    paddingBottom: "4vw",
  }
