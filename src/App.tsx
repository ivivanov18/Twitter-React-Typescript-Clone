import React from "react";
import AuthApp from "./components/AuthApp";
import UnAuthApp from "./components/UnAuthApp";
import { useAuthUser } from "./context/auth-context";

function App() {
  const authUser = useAuthUser();

  if (authUser) {
    return <AuthApp />;
  } else {
    return <UnAuthApp />;
  }
}

export default App;
