import { deleteToken, getToken, setToken } from "./utils";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = () => ({
  type: LOGIN,
})

export const logout = () => ({
  type: LOGOUT,
})

export const initialState = {
  auth: getToken(),
};

export const authReducer = (state, action) => {
  switch(action.type) {
    case LOGIN:
      setToken()
      return {
        ...state,
        auth: true
      };
    case LOGOUT:
      deleteToken();
      return {
        ...state,
        auth: false
      };
    default:
      return state
  }
};