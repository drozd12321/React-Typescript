import { TypeValues } from "../../data/data";

export type sizes = {
  [key: string]: string;
};
export interface PizzaItemProps {
  name: string;
  image_url: string;
  ingredients: string[];
  sizes: sizes;
  types: number[];
}
