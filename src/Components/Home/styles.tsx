// styles.tsx
import { CSSProperties } from "react";
import COLORS from "../../constant/colors";

export const headerContainerStyle: CSSProperties = {
  backgroundColor: COLORS.lightGreen,
  height: "30vw",
  color: "white",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
};

export const titleStyle: CSSProperties = {
  color: COLORS.secondary,
  fontSize: "12vw",
  padding: "0vw",
  margin: "0vw",
  height: "10vw",
};

export const sloganStyle: CSSProperties = {
  color: COLORS.secondary,
  fontSize: "5.55vw",
  padding: "0vw",
  margin: "0vw",
  height: "5vw",
};

export const alinhar: CSSProperties = {
  paddingLeft: "2.5vw",
};

export const img: CSSProperties = {
  width: "30%",
  marginLeft: "4vw",
  marginTop: "1vw",
  marginBottom: "1vw",
};
