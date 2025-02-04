import { configureStore } from "@reduxjs/toolkit";
import priseSlice from "./priseSlice";

const store = configureStore({
  reducer: {
    favorite: priseSlice,
  },
});
export default store;
