import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  token: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setInitialState: () => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(loginAdmin.fulfilled, (state, { payload }) => {});
  },
});

export const { setInitialState } = AuthSlice.actions;

export {};
export default AuthSlice.reducer;
