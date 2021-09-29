import React from "react";
import { useQuery } from "react-query";
import Splash from "src/components/Splash";
import { AuthContext } from "./auth-context";
import { authenticate } from "src/services/api";

type AuthProviderProps = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const { data, isLoading } = useQuery("AuthProvider", authenticate);

  if (isLoading) {
    return <Splash />;
  }

  const authUser = data ?? null;

  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
}
