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
  count: number;
  category: string;
  rating: number;
}
export interface FavorPizza {
  name: string;
  image_url: string;
  ingredients: string[];
  sizes: number;
  types: number[];
  id: number;
  price: number;
  count: number;
  category: string;
  rating: number;
}
export interface PriceState {
  favoritesPizza: FavorPizza[];
  price: number[];
  totalPrice: number;
  totalCount: number;
}
export interface ContextTypee {
  favorite: boolean;
  setFavorite: Function;
}
export interface PizzaState {
  pizza: PizzaItemProps[];
  pizzaCat: PizzaItemProps[];
  selectCategory: string;
  isLoading: boolean;
  dataLoader: boolean;
  isActive: boolean;
}
export interface Count {
  count: number;
  id: number;
}
export interface CountArray {
  countPizza: Count[];
}
export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export interface IProfil {
  email: string;
  password: string;
}
