import { createContext } from "react";
import { User } from "../types/User.types";

export type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export default createContext({} as UserContextType);
