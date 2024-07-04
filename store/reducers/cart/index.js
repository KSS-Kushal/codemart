import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ref: {}
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setInitialState: () => {
      return initialState;
    },
    setCartRef: (state, {payload}) => {
      state.ref = payload;
    },
    toggleCart: (state, {payload}) => {
      if (state.ref.current.classList.contains("translate-x-full")) {
        state.ref.current.classList.remove("translate-x-full");
        state.ref.current.classList.add("translate-x-0");
      } else if (!state.ref.current.classList.contains("translate-x-full")) {
        state.ref.current.classList.remove("translate-x-0");
        state.ref.current.classList.add("translate-x-full");
      }
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(loginAdmin.fulfilled, (state, { state.ref }) => {});
  },
});

export const { setInitialState, setCartRef, toggleCart } = CartSlice.actions;

export {};
export default CartSlice.reducer;
