import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const createSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems;
    },
  },
});
