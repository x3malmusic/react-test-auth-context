const auth = "123";

export const setToken = () => localStorage.setItem("auth", auth);

export const getToken = () => localStorage.getItem("auth");

export const deleteToken = () => localStorage.removeItem("auth");