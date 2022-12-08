import { IAddressModel } from "./Address";
import { ICompanyModel } from "./Company";

export interface IUserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddressModel;
  phone: string;
  website: string;
  company: ICompanyModel;
}
