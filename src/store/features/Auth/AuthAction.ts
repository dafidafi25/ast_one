import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { IUserModel } from "@/models/User";
import AuthService from "@/services/Auth/AuthService";
import { UserResponse } from "@/services/Auth/AuthServiceModel";

export const getUser = createAsyncThunk<
  UserResponse,
  void,
  {
    state: RootState;
    rejectValue: any;
  }
>("auth/getUserList", async (_: void, thunkAPI) => {
  try {
    const response = await AuthService.getUserList();
    return response.data as UserResponse;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.data);
  }
});
