// styles.tsx
import { CSSProperties } from "react";
import COLORS from "../../constant/colors";

export const headerContainerStyle: CSSProperties = {
  backgroundColor: COLORS.lightGreen,
  height: "30vw",
  paddingTop: "3vw",
  color: "white",
  display: "flex",
  flexDirection: "column",
};

export const titleStyle: CSSProperties = {
  color: COLORS.secondary,
  fontSize: "8vw",
  padding: "0vw",
  margin: "0vw",
  height: "7vw",
};

export const sloganStyle: CSSProperties = {
  color: COLORS.secondary,
  fontSize: "3.7vw",
  padding: "0vw",
  margin: "0vw",
  height: "4vw",
};
