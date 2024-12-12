import { Address } from './address';
export class User{
  userId: Number = 0;
  email: String = "";
  password: String = "";
  firstname: String = "";
  lastname: String = "";
  address: Address = new Address();
  contactNumber: String = "";
  status: String = "";
}
