import { IPostCommentModel } from "@/models/Post";
import { IUserModel } from "@/models/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./Post.interface";
import { getPostList } from "./PostAction";

export const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPostPage: (state, action: PayloadAction<number>) => {
      state.pagination = [];
      let idx = 0;
      for (let id of state.allIds) {
        if (
          idx >= (action.payload - 1) * state.per_page &&
          idx < action.payload * state.per_page
        ) {
          state.pagination.push(id);
        }
        idx++;
      }
      state.page = action.payload;
    },
    addCommentsToState: (
      state,
      action: PayloadAction<{
        PostId: number;
        CommentData: IPostCommentModel[];
      }>
    ) => {
      state.commentsById[action.payload.PostId] = [];
      for (let comment of action.payload.CommentData) {
        state.commentsById[action.payload.PostId].push(comment);
      }
    },
    setFilterPage: (state, action: PayloadAction<string>) => {
      const text = action.payload;
      const filteredIds = Object.keys(state.byId).filter((id) => {
        const post = state.byId[parseInt(id)];
        return (
          post.title.toLowerCase().includes(text.toLowerCase()) ||
          post.body.toLowerCase().includes(text.toLowerCase())
        );
      });

      state.allIds = filteredIds.map((id) => parseInt(id));
      state.page = 1;
      state.last_page = Math.ceil(state.allIds.length / state.per_page);

      state.pagination = [];
      let idx = 0;
      for (let id of state.allIds) {
        if (idx >= (1 - 1) * state.per_page && idx < 1 * state.per_page) {
          state.pagination.push(id);
        }
        idx++;
      }
      state.page = 1;

      console.log(state.allIds);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostList.fulfilled, (state, action) => {
      state.allIds = [];
      state.pagination = [];
      let idx = 0;
      for (let post of action.payload) {
        state.allIds.push(post.id);
        state.byId[post.id] = post;

        if (idx < state.per_page) {
          state.pagination.push(post.id);
          idx++;
        }
      }

      state.last_page = Math.ceil(state.allIds.length / state.per_page);
    });
  },
});

export const { addCommentsToState, getPostPage, setFilterPage } = post.actions;

export default post.reducer;
