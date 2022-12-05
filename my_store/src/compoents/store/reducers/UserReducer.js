import * as Types from "../Types";

const reducerInitialState = {
  allUsers: null,
  user: null,
  loading: null,
  getUserFalse: null,
};

const user = (state = reducerInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_USER_REQUEST:
    case Types.DELETE_USER_REQUEST:
    case Types.UPDATE_PRODUCT_REQUEST:
    case Types.GET_SING_USER_REQUEST:
    case Types.ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_ALL_USER:
    case Types.GET_USER_SUCCESS:
      return { ...state, allUsers: payload, loading: false };

    case Types.GET_USER_FALSE:
    case Types.DELETE_PRODUCT_FALSE:
    case Types.UPDATE_PRODUCT_FALSE:
    case Types.GET_SING_USER_FALSE:
    case Types.ADD_USER_FALSE:
      return {
        ...state,
        loading: false,
        getUserFalse: payload,
      };

    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        allUsers: [...state.allUsers, payload],
        loading: false,
      };

    case Types.GET_SING_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };

    case Types.DELETE_USER_SUCCESS:
      return {
        ...state,
        allUsers: state.allUsers.filter((e) => e.id !== action.payload),
        loading: false,
      };

    case Types.UPDATE_USER_SUCCESS:
      let listUser = [...state.allUsers].map((e) => {
        var newObj;
        if (e.id === action.payload.id) {
          newObj = action.payload;
          return newObj;
        } else {
          return e;
        }
      });

      return {
        ...state,
        allUsers: listUser,
        loading: false,
      };

    case Types.SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };

    case Types.HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default user;
