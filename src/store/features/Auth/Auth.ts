import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./Auth.interface";
import { getUser } from "./AuthAction";

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.allIds = [];
      action.payload.forEach((user) => {
        state.byId[user.id] = user;
        state.allIds.push(user.id);
        state.byUsername[user.username] = user;
      });
    });
  },
});

export default auth.reducer;
