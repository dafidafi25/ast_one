import { IUserModel } from "@/models/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./Profile.interface";

export const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<IUserModel>) => {
      state.user = action.payload;
    },
  },
});

export const { saveUser } = profile.actions;

export default profile.reducer;
