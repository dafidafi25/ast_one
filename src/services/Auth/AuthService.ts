import { IUserModel } from "@/models/User";
import { ApiResponse } from "apisauce";
import { api } from "../main";

class AuthService {
  static async getUserList(): Promise<ApiResponse<IUserModel[]>> {
    const response = await api.post<IUserModel[]>("/users");
    if (!response.ok) return Promise.reject(response);
    return response;
  }
}

export default AuthService;
