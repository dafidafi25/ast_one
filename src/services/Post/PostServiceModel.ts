import { IPostCommentModel, IPostModel } from "@/models/Post";

export type PostResponse = IPostModel[];
export type PostCommentsRequest = number;
export type PostCommentsResponse = IPostCommentModel[];
export type PostByIdRequest = number;
export type PostByIdResponse = IPostModel;
