import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  favoritesPizza: [],
  totalPrice: 0,
};
const priceSlice = createSlice({
  name: "priceSlice",
  initialState,
  reducers: {
    setPrice(state, action) {
      state.favoritesPizza.push(action.payload);
    },
  },
});
export default priceSlice.reducer;
