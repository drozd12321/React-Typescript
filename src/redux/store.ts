import { configureStore } from "@reduxjs/toolkit";
import priseSlice from "./priceSlice.ts";
import pizzaSlice from "./pizzaSlice.ts";
const store = configureStore({
  reducer: {
    favorite: priseSlice,
    pizza: pizzaSlice,
  },
});
export default store;
