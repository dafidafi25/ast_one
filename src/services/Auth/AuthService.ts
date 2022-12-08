import { IUserModel } from "@/models/User";
import { ApiResponse } from "apisauce";
import { api } from "../main";
import { UserResponse } from "./AuthServiceModel";

class AuthService {
  static async getUserList(): Promise<ApiResponse<UserResponse>> {
    const response = await api.get<UserResponse>("/users");
    if (!response.ok) return Promise.reject(response);
    return response;
  }
}

export default AuthService;
