import axios, { AxiosInstance } from "axios";
import { LoginData, RegisterData } from "./types";

const client: AxiosInstance = axios.create({
  // baseURL: "https://twitter-react-clone-backend.herokuapp.com",
});

export async function authenticate() {
  return await client.get("/auth/login").then((res) => res.data.user);
}

export async function register(payload: RegisterData) {
  await client.post("auth/signup", payload);
}

export async function login(payload: LoginData) {
  await client.post("auth/login", payload);
}
