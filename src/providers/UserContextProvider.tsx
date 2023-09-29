import React, { ReactNode, useState } from "react";
import UserContext from "../context/User.context";
import { User } from "../types/User.types";

type IProps = {
  children: ReactNode;
};

const UserContextProvider: React.FC<IProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  return (
    <>
      <UserContext.Provider value={{ users, setUsers }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
