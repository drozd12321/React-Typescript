import { createContext } from "react";
interface ContextType {
  data: any[];
}
export const MyContext = createContext<ContextType | null>(null);
