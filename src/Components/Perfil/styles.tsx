import { CSSProperties } from "react";
import COLORS from "../../constant/colors";

export const alinharDiv: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  borderBottom: "0.2vw solid " + COLORS.black,
  marginBottom: "8vw",
  marginTop: "2vw",
};

export const styleLink: CSSProperties = {
  textDecoration: "none",
  color: COLORS.black,
};

export const styleText: CSSProperties = {
  fontFamily: "sans-serif",
  fontSize: 24,
};

export const enfeite: CSSProperties = {
    fontFamily: "sans-serif",
    fontSize: 24,
    fontWeight: "bold",
  };
