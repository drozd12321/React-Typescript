import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PizzaItemProps, PriceState } from "../components/interfaces/interface";
import { RootState } from "@reduxjs/toolkit/query";
import store from "./store";
const initialState: PriceState = {
  favoritesPizza: [],
  price: [],
  totalPrice: 0,
  totalCount: 0,
};
const priceSlice = createSlice({
  name: "priceSlice",
  initialState,
  reducers: {
    setPriceTotal(state, action: PayloadAction<number>) {
      state.totalPrice += action.payload;
    },
    setFavoritesPizza(state, action) {
      const pz = state.favoritesPizza.findIndex((item) => {
        return (
          item.id === action.payload.id && item.sizes === action.payload.sizes
        );
      });
      if (pz !== -1) {
        return {
          ...state,
          favoritesPizza: state.favoritesPizza.map((item, ind) =>
            ind === pz
              ? {
                  ...item,
                  count: item.count + 1,
                  price: action.payload.sizes * (item.count + 1),
                }
              : item
          ),
        };
      } else {
        state.favoritesPizza.push({
          ...action.payload,
          count: 1,
          price: action.payload.sizes,
        });
      }
    },
    setTotal(state) {
      return {
        ...state,
        totalCount: state.favoritesPizza.reduce(
          (sum, item) => sum + item.count,
          0
        ),
      };
    },
    setDeleteFavoritPizza(state, action) {
      const pz = state.favoritesPizza.findIndex((item) => {
        return (
          item.id === action.payload.id && item.sizes === action.payload.sizes
        );
      });
      if (pz !== -1) {
        return {
          ...state,
          favoritesPizza: state.favoritesPizza.map((item, ind) =>
            ind === pz
              ? {
                  ...item,
                  count: 0,
                  price: action.payload.sizes * 0,
                }
              : item
          ),
          totalPrice:
            state.totalPrice - action.payload.sizes * action.payload.count,
        };
      }
    },
    setMinus(state, action) {
      const pz = state.favoritesPizza.findIndex((item) => {
        return (
          item.id === action.payload.id && item.sizes === action.payload.sizes
        );
      });
      if (pz != -1) {
        return {
          ...state,
          favoritesPizza: state.favoritesPizza.map((item, ind) =>
            ind === pz
              ? {
                  ...item,
                  count: item.count - 1,
                  price: action.payload.sizes * (item.count - 1),
                }
              : item
          ),
          totalPrice: state.totalPrice - action.payload.sizes,
        };
      }
    },
  },
});
export default priceSlice.reducer;
export const {
  setPriceTotal,
  setFavoritesPizza,
  setDeleteFavoritPizza,
  setTotal,
  setMinus,
} = priceSlice.actions;
export type RootStateу = ReturnType<typeof store.getState>;
export const selectedPrice = (state: RootStateу) => state.favorite.totalPrice;
export const selectPrice = (state: RootStateу) => state.favorite.price;
export const selectPizzaFav = (state: RootStateу) =>
  state.favorite.favoritesPizza;
