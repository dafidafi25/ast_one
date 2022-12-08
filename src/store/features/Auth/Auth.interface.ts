import { IUserModel } from "@/models/User";

export interface AuthState {
  allIds: number[];
  byId: Record<number, IUserModel>;
}

export const initialState: AuthState = {
  allIds: [],
  byId: {},
};
