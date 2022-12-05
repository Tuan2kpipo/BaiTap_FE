import * as Types from "../Types";

const reducerInitialState = {
  allProducts: null,
  product: null,
  getSearch: null,
  loading: null,
  getProductFalse: null,
};

const reducer = (state = reducerInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_PRODUCT_REQUEST:
    case Types.DELETE_PRODUCT_REQUEST:
    case Types.ADD_PRODUCT_REQUEST:
    case Types.GET_SING_PRODUCT_REQUEST:
    case Types.UPDATE_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case Types.GET_ALL:
    case Types.GET_PRODUCT_SUCCESS:
      return { ...state, allProducts: payload, loading: false };

    case Types.GET_PRODUCT_FALSE:
    case Types.DELETE_PRODUCT_FALSE:
    case Types.ADD_PRODUCT_FALSE:
    case Types.GET_SING_PRODUCT_FALSE:
    case Types.UPDATE_PRODUCT_FALSE:
      return {
        ...state,
        getProductFalse: payload,
        loading: false,
      };

    case Types.GET_SING_PRODUCT_SUCCESS:
      return { ...state, product: action.payload, loading: false };

    case Types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: state.allProducts.filter((e) => e.id !== action.payload),
        loading: false,
      };
    case Types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
        loading: false,
      };

    case Types.UPDATE_PRODUCT_SUCCESS:
      let listProducts = [...state.allProducts].map((item) => {
        var newObj;
        if (item.id === action.payload.id) {
          newObj = action.payload;
          return newObj;
        } else {
          return item;
        }
      });
      return {
        ...state,
        allProducts: listProducts,
        loading: false,
      };

    case Types.GET_SEARCH:
      return {
        ...state,
        getSearch: payload,
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

export default reducer;
