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
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "30%",
    height: "50vh",
    borderRadius: "10px",
    transform: "translate(-50%, -50%)",
  },
};
export const styleImg = {
  borderRadius: "10px",
  width: "auto",
  height: "auto",
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
