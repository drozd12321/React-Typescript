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
  isFavorite: boolean;
  id: number;
}
export interface PriceState {
  favoritesPizza: PizzaItemProps[];
  totalPrice: number;
}
export interface ContextTypee {
  favorite: boolean;
  setFavorite: Function;
}
export interface PizzaState {
  pizza: PizzaItemProps[];
  isLoading: boolean;
}
