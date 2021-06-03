import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context";
import { login, logout } from "../reducer";

export default function Login() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const clickLogin = () => {
    dispatch(login());
    history.push("/app");
  }

  const clicklogOut = () => {
    dispatch(logout());
  }

  return(
    <>
      <button onClick={clickLogin}>Login</button>
      <button onClick={clicklogOut}>Logout</button>
    </>
  )
}