import axios from "axios";
import * as Types from "../types";

const BASE_URL = "https://fakestoreapi.com";

// dang nhap
export const login = (data) => {
  return function (dispatch) {
    axios
      .post(`${BASE_URL}/auth/login`, data)
      .then((res) => {
        console.log("dang nhap cong", res);
        localStorage.setItem("token", res.data.token);
        dispatch({ type: Types.LOGIN, payload: res.data });
      })
      .catch((error) => console.log("error", error));
  };
};

// dang xuat
export const logout = () => ({
  type: Types.LOGOUT,
});
