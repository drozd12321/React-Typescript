import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CountArray } from "../components/interfaces/interface";
import { RootStateу } from "./priceSlice";

const initialState: CountArray = {
  countPizza: [],
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setCCount(state, action) {
      const existingItem = state.countPizza.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.countPizza.push({ count: +1, id: action.payload });
      }
    },
  },
});
export default countSlice.reducer;
export const { setCCount } = countSlice.actions;
export const selectedCount = (state: RootStateу) => state.count.countPizza;
