import * as Types from "../types";

const reducerInitialState = {
  isLoggedIn: false,
};

const tokenuser = {
  token: localStorage.getItem("token"),
};

const authUser = (state = reducerInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };

    case Types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

const authLogin = (state = tokenuser, action) => {
  switch (action.type) {
    case Types.LOGIN:
      localStorage.setItem("token", JSON.stringify(action.payload));

      return {
        ...state,
        ...action.payload,
      };

    case Types.LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export { authUser, authLogin };
