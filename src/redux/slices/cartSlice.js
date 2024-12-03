import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      console.log("Added to cart:", action.payload); // Log the item added to cart
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
