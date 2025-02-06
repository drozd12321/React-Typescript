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
  }
});

const initialState: PizzaState = {
  pizza: [],
  isLoading: false,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setFavorites(state, action) {
      return {
        ...state,
        pizza: state.pizza.map((item) => {
          if (item.id === action.payload) {
            return { ...item, isFavorite: true };
          } else {
            return item;
          }
        }),
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const pizas = action.payload.map(createPizza);
      state.pizza.push(...pizas);
    });
  },
});
export default pizzaSlice.reducer;
export const { setFavorites } = pizzaSlice.actions;
export const selectPizza = (state: RootStateу) => state.pizza.pizza;
export type AppDispach = typeof store.dispatch;
export const selectPizzaFavoriters = (state: RootStateу) => state.pizza;
