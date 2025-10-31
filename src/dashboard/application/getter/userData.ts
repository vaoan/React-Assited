
import { UsersResponse } from "../types/UserResponse";

const getUserData = async (): Promise<UsersResponse | undefined> => {
  const r = await fetch("https://dummyjson.com/users");
  return r.json();
};


export default getUserData;