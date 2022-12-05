import axios from "axios";
import * as Types from "../Types";

const BASE_URL_USER = "https://fakestoreapi.com";

// hien loading
export const showLoading = () => ({
  type: Types.SHOW_LOADING,
});
// an loading
export const hideLoading = () => ({
  type: Types.HIDE_LOADING,
});

// lay tat ca user
export const getAllUser = () => {
  return function (dispatch) {
    dispatch({ type: Types.GET_USER_REQUEST });
    axios
      .get(`${BASE_URL_USER}/users`)
      .then((res) => {
        dispatch({ type: Types.GET_USER_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: Types.GET_USER_FALSE, payload: error });
        console.log("get api error: ", error);
      });
  };
};

// xoa user
export const deleteUser = (id) => {
  return function (dispatch) {
    dispatch({ type: Types.DELETE_USER_REQUEST });
    axios
      .delete(`${BASE_URL_USER}/users/${id}`)
      .then(() => {
        dispatch({ type: Types.DELETE_USER_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({ type: Types.DELETE_USER_FALSE, payload: error });
        console.log("get api error: ", error);
      });
  };
};

// cap nhat user
export const updateUser = (user, id) => {
  return function (dispatch) {
    dispatch({ type: Types.UPDATE_USER_REQUEST });
    axios
      .put(`${BASE_URL_USER}/users/${id}`, user)
      .then((res) => {
        console.log("sua thnah cong", res.data);

        console.log("lay ra thong tin 1 user", { ...res.data, id });

        dispatch({
          type: Types.UPDATE_USER_SUCCESS,
          payload: { ...res.data, id },
        });
      })
      .catch((error) => {
        dispatch({ type: Types.UPDATE_USER_FALSE, payload: error });
        console.log("get api error: ", error);
      });
  };
};

// lay dl 1 ng dung theo id
export const getSingUser = (id) => {
  return function (dispatch) {
    dispatch({ type: Types.GET_SING_USER_REQUEST });
    axios
      .get(`${BASE_URL_USER}/users/${id}`)
      .then((res) => {
        console.log("lay ra thong tin 1 user", res);
        dispatch({ type: Types.GET_SING_USER_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: Types.GET_SING_USER_FALSE, payload: error });
        console.log("get api error: ", error);
      });
  };
};

// them user
export const addUser = (user) => {
  return function (dispatch) {
    dispatch({ type: Types.ADD_USER_REQUEST });
    axios
      .post(`${BASE_URL_USER}/users`, user)
      .then((res) => {
        console.log("them thanh cong api user", { ...res.data, ...user });
        dispatch({
          type: Types.ADD_USER_SUCCESS,
          payload: { ...res.data, ...user },
        });
        dispatch(hideLoading());
      })
      .catch((error) => {
        dispatch(hideLoading());
        dispatch({ type: Types.ADD_USER_FALSE, payload: error });
      });
  };
};
