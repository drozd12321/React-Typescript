import { configureStore } from "@reduxjs/toolkit";
import priseSlice from "./priceSlice.ts";
import pizzaSlice from "./pizzaSlice.ts";
import countSlice from "./countSlice.ts";
import profilSlice from "./profil.ts";
const store = configureStore({
  reducer: {
    favorite: priseSlice,
    pizza: pizzaSlice,
    count: countSlice,
    profil: profilSlice,
  },
});
export default store;
