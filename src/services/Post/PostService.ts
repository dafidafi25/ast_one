import { ApiResponse } from "apisauce";
import { api } from "../main";
import { PostCommentsRequest, PostResponse } from "./PostServiceModel";

class PostService {
  static async getPostList(): Promise<ApiResponse<PostResponse>> {
    const response = await api.get<PostResponse>("/posts");
    if (!response.ok) return Promise.reject(response);
    return response;
  }
  static async getPostTotalComment(
    params: PostCommentsRequest
  ): Promise<ApiResponse<PostResponse>> {
    const response = await api.get<PostResponse>(`/posts/${params}/comments`);
    if (!response.ok) return Promise.reject(response);
    return response;
  }
}

export default PostService;
