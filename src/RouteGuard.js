import React, { useContext } from "react";
import { AuthContext } from "./context";

export const withGuard = (Component) => ({ ...props }) => {
  const { state } = useContext(AuthContext);

  if(!state.auth) return <h1>This is private page you need to login</h1>
  return <Component {...props} />
}