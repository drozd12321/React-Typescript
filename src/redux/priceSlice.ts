import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PizzaItemProps, PriceState } from "../components/interfaces/interface";
import { RootState } from "@reduxjs/toolkit/query";
import store from "./store";
const initialState: PriceState = {
  favoritesPizza: [],
  price: [],
  totalPrice: 0,
};
const priceSlice = createSlice({
  name: "priceSlice",
  initialState,
  reducers: {
    setPriceTotal(state, action: PayloadAction<number>) {
      state.totalPrice += action.payload;
    },
    setPrice(state, action) {
      state.price.push(action.payload);
    },
    setFavoritesPizza(state, action) {
      state.favoritesPizza.push(action.payload);
    },
    setDeleteFavoritPizza(state, action) {
      return {
        ...state,
        favoritesPizza: state.favoritesPizza.filter((pz) => {
          return !(
            pz.id === action.payload.id && pz.sizes === action.payload.sizes
          );
        }),
      };
    },
  },
});
export default priceSlice.reducer;
export const {
  setPriceTotal,
  setPrice,
  setFavoritesPizza,
  setDeleteFavoritPizza,
} = priceSlice.actions;
export type RootStateу = ReturnType<typeof store.getState>;
export const selectedPrice = (state: RootStateу) => state.favorite.totalPrice;
export const selectPrice = (state: RootStateу) => state.favorite.price;
export const selectPizzaFav = (state: RootStateу) =>
  state.favorite.favoritesPizza;
