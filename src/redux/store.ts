import { configureStore } from "@reduxjs/toolkit";
import priseSlice from "./priceSlice.ts";
import pizzaSlice from "./pizzaSlice.ts";
import countSlice from "./countSlice.ts";
const store = configureStore({
  reducer: {
    favorite: priseSlice,
    pizza: pizzaSlice,
    count: countSlice,
  },
});
export default store;
