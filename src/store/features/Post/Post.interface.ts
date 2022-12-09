import { IPostCommentModel, IPostModel } from "@/models/Post";

export interface PostState {
  allIds: number[];
  byId: Record<number, IPostModel>;
  pagination: number[];
  per_page: number;
  page: number;
  last_page: number;
  commentsById: Record<number, IPostCommentModel>;
}

export const initialState: PostState = {
  allIds: [],
  byId: {},
  pagination: [],
  per_page: 10,
  page: 1,
  last_page: 0,
  commentsById: {},
};
