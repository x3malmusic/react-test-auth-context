import { createContext, useReducer } from "react";
import { initialState, authReducer } from "./reducer";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }}>
    {children}
  </ AuthContext.Provider>
}