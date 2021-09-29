import React from "react";

export const AuthContext = React.createContext(null);

export function useAuthUser() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthUser must be used with the AuthProvider component");
  }
  return context;
}
