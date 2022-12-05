import * as Types from "../Types";

const reducerInitialState = {
  isLoggedIn: false,
  loading: null,
  loginFalse: null,
};

const tokenuser = {
  token: localStorage.getItem("token"),
};

const authUser = (state = reducerInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      };

    case Types.LOGIN_FALSE:
      return {
        ...state,
        loginFalse: payload,
        loading: false,
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
    case Types.LOGIN_SUCCESS:
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
