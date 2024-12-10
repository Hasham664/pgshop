import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterSlice,
  },
});
