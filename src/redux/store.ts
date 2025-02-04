import { configureStore } from "@reduxjs/toolkit";
import priseSlice from "./priceSlice.ts";

const store = configureStore({
  reducer: {
    favorite: priseSlice,
  },
});
export default store;
