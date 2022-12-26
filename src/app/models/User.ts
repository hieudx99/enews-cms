import { Role } from './Role';
export class User {
  id!: number;
  username!: string;
  password!: string;
  fullName!: string;
  status!: number;
  email!: string;
  msisdn!: string;
  createdDate!: string;
  gender!: number;
  province!: string;
  role!: Role;
}
