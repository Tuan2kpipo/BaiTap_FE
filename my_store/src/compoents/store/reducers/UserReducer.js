import * as Types from "../Types";

const reducerInitialState = {
  allUsers: null,
  user: null,

  loading: false,
  loadingUser: false,
  loadingUpdate: false,
  loadingDelete: false,
  loadingGetSing: false,

  getUserFalse: null,
  addUserFalse: null,
  updateUserFalse: null,
  deleteUserFalse: null,
  getSingUserFalse: null,
};

const user = (state = reducerInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // loading request
    case Types.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case Types.ADD_USER_REQUEST:
      return {
        ...state,
        loadingAdd: true,
      };

    case Types.UPDATE_USER_REQUEST:
      return {
        ...state,
        loadingUpdate: true,
      };

    case Types.GET_SING_USER_REQUEST:
      return {
        ...state,
        loadingGetSing: true,
      };

    case Types.DELETE_USER_REQUEST:
      return {
        ...state,
        loadingDelete: true,
      };

    // loading false
    case Types.GET_USER_FALSE:
      return {
        ...state,
        loading: false,
        getUserFalse: payload,
      };

    case Types.DELETE_PRODUCT_FALSE:
      return {
        ...state,
        loadingDelete: false,
        deleteUserFalse: payload,
      };

    case Types.UPDATE_PRODUCT_FALSE:
      return {
        ...state,
        loadingUpdate: false,
        updateUserFalse: payload,
      };

    case Types.GET_SING_USER_FALSE:
      return {
        ...state,
        loadingGetSing: false,
        getSingUserFalse: payload,
      };

    case Types.ADD_USER_FALSE:
      return {
        ...state,
        loadingAdd: false,
        addUserFalse: payload,
      };

    // laoding success
    case Types.GET_ALL_USER:
    case Types.GET_USER_SUCCESS:
      return { ...state, allUsers: payload, loading: false };

    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        allUsers: [...state.allUsers, payload],
        loadingAdd: false,
      };

    case Types.GET_SING_USER_SUCCESS:
      return { ...state, user: action.payload, loadingGetSing: false };

    case Types.DELETE_USER_SUCCESS:
      return {
        ...state,
        allUsers: state.allUsers.filter((e) => e.id !== action.payload),
        loadingDelete: false,
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
        loadingUpdate: false,
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
