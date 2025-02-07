import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PizzaItemProps, PriceState } from "../components/interfaces/interface";
import { RootState } from "@reduxjs/toolkit/query";
import store from "./store";
const initialState: PriceState = {
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
  },
});
export default priceSlice.reducer;
export const { setPriceTotal, setPrice } = priceSlice.actions;
export type RootStateу = ReturnType<typeof store.getState>;
export const selectedPrice = (state: RootStateу) => state.favorite.totalPrice;
export const selectPrice = (state: RootStateу) => state.favorite.price;
