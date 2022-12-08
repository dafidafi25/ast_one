import { IUserModel } from "@/models/User";

export interface AuthState {
  allIds: number[];
  byId: Record<number, IUserModel>;
  byUsername: Record<string, IUserModel>;
}

export const initialState: AuthState = {
  allIds: [],
  byId: {},
  byUsername: {},
};
