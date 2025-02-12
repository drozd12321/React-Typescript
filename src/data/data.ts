import { CSSProperties } from "react";

export const category: string[] = [
  "Все",
  "Мясные",
  "Вегатариански",
  "Гриль",
  "Острые",
  "Закрытые",
];
export const sorting: string[] = ["Популярности", "Цене", "Алфафиту"];
export const TYPE: string[] = ["тонкая", "традиционная"];
export type TypeValues = (typeof TYPE)[number];

export const styleModal = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Полупрозрачный фон
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};
export const styleImg = {
  borderRadius: "10px",
  width: "100%",
  height: "100%",
};
export const stylecontainerPizza: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "auto",
  height: "auto",
  padding: "10px",
  cursor: "pointer",

  backgroundColor: "rgb(245, 245, 244)",
  borderRadius: "10px",
};
export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    // y: "100vh",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: "55%",
    transition: {
      duration: 0.4,
      easy: "easyInOut",
    },
  },
  exit: {
    opacity: 0,
    y: "100vh",
    transition: {
      duration: 0.4,
      easy: "easyInOut",
    },
  },
};

// Стили контента
export const contentStyles = {
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  maxWidth: "80%",
  maxHeight: "80%",
  overflow: "auto",
};
