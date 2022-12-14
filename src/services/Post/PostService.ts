import { ApiResponse } from "apisauce";
import { api } from "../main";
import {
  PostByIdRequest,
  PostByIdResponse,
  PostCommentsRequest,
  PostCommentsResponse,
  PostResponse,
} from "./PostServiceModel";

class PostService {
  static async getPostList(): Promise<ApiResponse<PostResponse>> {
    const response = await api.get<PostResponse>("/posts");
    if (!response.ok) return Promise.reject(response);
    return response;
  }
  static async getPostTotalComment(
    params: PostCommentsRequest
  ): Promise<ApiResponse<PostCommentsResponse>> {
    const response = await api.get<PostCommentsResponse>(
      `/posts/${params}/comments`
    );
    if (!response.ok) return Promise.reject(response);
    return response;
  }
  static async getPostById(
    params: PostByIdRequest
  ): Promise<ApiResponse<PostByIdResponse>> {
    const response = await api.get<PostByIdResponse>(`/posts/${params}`);
    if (!response.ok) return Promise.reject(response);
    return response;
  }
}

export default PostService;
