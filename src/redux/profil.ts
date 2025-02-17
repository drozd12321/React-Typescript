import { createSlice } from "@reduxjs/toolkit";
import { IProfil } from "../components/interfaces/interface";
import { RootStateу } from "./priceSlice";
const initialState: IProfil = {
  email: "",
  password: "",
};
const profilSlice = createSlice({
  name: "profil",
  initialState,
  reducers: {
    setData(state, action) {
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    },
  },
});
export default profilSlice.reducer;
export const { setData } = profilSlice.actions;
export const selectData = (state: RootStateу) => state.profil;
