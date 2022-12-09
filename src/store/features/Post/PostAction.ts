import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { PostResponse } from "@/services/Post/PostServiceModel";
import PostService from "@/services/Post/PostService";

export const getPostList = createAsyncThunk<
  PostResponse,
  void,
  {
    state: RootState;
    rejectValue: any;
  }
>("post/getPostList", async (_: void, thunkAPI) => {
  try {
    const response = await PostService.getPostList();
    return response.data as PostResponse;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.data);
  }
});
