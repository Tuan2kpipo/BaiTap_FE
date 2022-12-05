import axios from "axios";
import * as Types from "../Types";

const BASE_URL = "https://fakestoreapi.com";

// dang nhap
export const login = (data) => {
  return function (dispatch) {
    dispatch({ type: Types.LOGIN_REQUEST });
    axios
      .post(`${BASE_URL}/auth/login`, data)
      .then((res) => {
        console.log("dang nhap cong", res);
        localStorage.setItem("token", res.data.token);
        dispatch({ type: Types.LOGIN_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: Types.LOGIN_FALSE, payload: error });
        console.log("get api error: ", error);
      });
  };
};

// dang xuat
export const logout = () => ({
  type: Types.LOGOUT,
});
