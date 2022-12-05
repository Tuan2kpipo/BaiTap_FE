import axios from "axios";
import * as Types from "../Types";

const BASE_URL = "https://fakestoreapi.com";

// hien loading
export const showLoading = () => ({
  type: Types.SHOW_LOADING,
});
// an loading
export const hideLoading = () => ({
  type: Types.HIDE_LOADING,
});

export const getAll = () => {
  return function (dispatch) {
    dispatch({ type: Types.GET_PRODUCT_REQUEST });
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        dispatch({ type: Types.GET_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: Types.GET_PRODUCT_FALSE, payload: error });
      });
  };
};

// xoa san pham
export const deleteProduct = (id) => {
  return function (dispatch) {
    dispatch({ type: Types.DELETE_PRODUCT_REQUEST });
    axios
      .delete(`${BASE_URL}/products/${id}`)
      .then(() => {
        dispatch({
          type: Types.DELETE_PRODUCT_SUCCESS,
          payload: id,
        });
      })
      .catch((error) => {
        dispatch({ type: Types.DELETE_PRODUCT_FALSE, payload: error });
        console.log("DELETE api error: ", error);
      });
  };
};

// them san pham
export const addProduct = (product) => {
  return function (dispatch) {
    dispatch({ type: Types.ADD_PRODUCT_REQUEST });
    axios
      .post(`${BASE_URL}/products`, product)
      .then((res) => {
        dispatch({
          type: Types.ADD_PRODUCT_SUCCESS,
          payload: { ...res.data, ...product },
        });
      })
      .catch((error) => {
        dispatch({ type: Types.ADD_PRODUCT_FALSE, payload: error });
        console.log("add api error: ", error);
      });
  };
};

// lay 1 du lieu san pham theo id
export const getSingProduct = (id) => {
  return function (dispatch) {
    dispatch({ type: Types.GET_SING_PRODUCT_REQUEST });
    axios
      .get(`${BASE_URL}/products/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch({ type: Types.GET_SING_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: Types.GET_SING_PRODUCT_FALSE, payload: error });
        console.log("get api error: ", error);
      });
  };
};

// cap nhat san pham
export const updateProduct = (product, id) => {
  return function (dispatch) {
    dispatch({ type: Types.UPDATE_PRODUCT_REQUEST });
    axios
      .put(`${BASE_URL}/products/${id}`, product)
      .then((res) => {
        console.log("sua thnah cong", res);
        dispatch({ type: Types.UPDATE_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: Types.UPDATE_PRODUCT_FALSE, payload: error });
        console.log("get api error: ", error);
      });
  };
};

// tim kiem
export const searchProduct = (search) => ({
  type: Types.GET_SEARCH,
  payload: search,
});
