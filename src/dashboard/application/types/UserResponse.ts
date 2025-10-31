import { User } from "./User";

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
