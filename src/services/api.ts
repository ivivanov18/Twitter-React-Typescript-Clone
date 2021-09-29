import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: "https://twitter-react-clone-backend.herokuapp.com",
});

export async function authenticate() {
  return await client.get("/auth/login").then((res) => res.data.user);
}
