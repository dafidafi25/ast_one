import { IUserModel } from "@/models/User";

export type ProfileState = { user?: IUserModel };

export const initialState: ProfileState = { user: undefined };
