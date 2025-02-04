import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PizzaItemProps, PriceState } from "../components/interfaces/interface";
import { RootState } from "@reduxjs/toolkit/query";
import store from "./store";
const initialState: PriceState = {
  favoritesPizza: [],
  totalPrice: 0,
};
const priceSlice = createSlice({
  name: "priceSlice",
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<PizzaItemProps>) {
      state.favoritesPizza.push(action.payload);
    },
    setPrice(state, action: PayloadAction<number>) {
      state.totalPrice += action.payload;
    },
  },
});
export default priceSlice.reducer;
export const { setPrice, setFavorites } = priceSlice.actions;
export type RootStateу = ReturnType<typeof store.getState>;
export const selectedPrice = (state: RootStateу) => state.favorite.totalPrice;
