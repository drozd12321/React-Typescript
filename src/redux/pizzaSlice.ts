import { RootState } from "@reduxjs/toolkit/query";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { RootStateу } from "./priceSlice";
import store from "./store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PizzaItemProps, PizzaState } from "../components/interfaces/interface";
function createPizza(pizza: PizzaItemProps) {
  return {
    ...pizza,
    isFavorite: false,
    id: uuidv4(),
    count: 0,
  };
}

export const fetchData = createAsyncThunk("pizza/fetchData", async () => {
  try {
    const response = await axios.get(
      "https://e44567109e5642cf.mokky.dev/items"
    );
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});

const initialState: PizzaState = {
  pizza: [],
  pizzaCat: [],
  selectCategory: "Все",
  isLoading: false,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizza(state, action) {
      const pz = action.payload.map(createPizza);
      state.pizza = pz;
    },
    setCategory(state, action) {
      return { ...state, selectCategory: action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      const pizas = action.payload.map(createPizza);
      state.pizza.push(...pizas);
    });
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.isLoading = true;
    });
  },
});
export default pizzaSlice.reducer;
export const selectPizza = (state: RootStateу) => state.pizza.pizza;
export type AppDispach = typeof store.dispatch;
export const selectPizzaFavoriters = (state: RootStateу) => state.pizza;
export const selectLoading = (state: RootStateу) => state.pizza.isLoading;
export const { setPizza, setCategory } = pizzaSlice.actions;
export const selectCategory = (state: RootStateу) => state.pizza.selectCategory;
