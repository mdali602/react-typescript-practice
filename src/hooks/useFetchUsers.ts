import { useCallback, useEffect, useState } from "react";
import useUserContext from "./useUserContext";
import { User } from "../types/User.types";
import { makeFetch } from "../utils/makeFetch";


export default function useFetchUsers(endPoint: string) {
  const { users = [], setUsers } = useUserContext();

  const [errorMsg, setErrorMsg] = useState<string>("");

  const fetchData = useCallback(async () => {
    try {
      const users = await makeFetch<User>(endPoint);
      // const users = await response.json()
      if (Array.isArray(users)) {
        setUsers(users);
        setErrorMsg("");
      } else {
        setErrorMsg("Something went wrong. Please try after sometime.");
      }
    } catch (err) {
      console.log(err);
      setErrorMsg("Something went wrong. Please try after sometime.");
    }
  }, [endPoint, setUsers]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { users, errorMsg, fetchData };
}
