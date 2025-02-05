import { createContext } from "react";
import { ContextTypee } from "../components/interfaces/interface";
export const MyContext = createContext<ContextTypee>({
  favorite: false,
  setFavorite: () => {},
});
