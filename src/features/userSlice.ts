import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../Types";

const initialState: initialUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
console.log(userSlice);

export default userSlice.reducer;
