import { BASE_URL } from "../constants";

export function makeFetch<T>(endPoint: string): Promise<T | T[]> {
  const url = `${BASE_URL}/${endPoint}`;
  return fetch(url).then((res) => res.json());
}
