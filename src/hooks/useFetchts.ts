import { useCallback, useEffect, useState } from "react";
import useUserContext from "./useUserContext";
import { User } from "../types/User.types";
import { makeFetch } from "../utils/makeFetch";

const BASE_URL = "https://jsonplaceholder.typicode.com";


export default async function useFetchUsers<T>(endPoint: string) {
  const { users, setUsers } = useUserContext();

  const [errorMsg, setErrorMsg] = useState<string>("");

  const fetchData = useCallback(async () => {
    try {
      // const response = await fetch(`${BASE_URL}/${endPoint}`);
      const users = await makeFetch<User>(`${BASE_URL}/${endPoint}`);
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

/* 


async function fetchApi<T>(url: string): Promise<T | T[]> {
  const res = await fetch(url);
  return await res.json();
}

type User = {
  name: string;
}

fetchApi<User>('/api/endpoint')


const makeFetch = <TData>(url: string): Promise<TData> => {
  return fetch(url).then((res) => res.json());
};

type Employee = {
  firstName: string;
  lastName: string;
  age: number;
};
// makeFetch<{ firstName: string; lastName: string; agee: number }>(
//   "/api/endpoint"
// ).then(
makeFetch<Employee>("/api/endpoint").then((res) => {
  console.log(res);
});


*/
