import * as Types from "../Types";

const reducerInitialState = {
  allProducts: null,
  product: null,
  getSearch: null,

  loading: false,
  loadingAdd: false,
  loadingUpdate: false,
  loadingDelete: false,
  loadingGetSing: false,

  getProductFalse: null,
  addProductFalse: null,
  updateProductFalse: null,
  deleteProductFalse: null,
  getSingProductFalse: null,
};

const reducer = (state = reducerInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // laoding request
    case Types.GET_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case Types.DELETE_PRODUCT_REQUEST:
      return { ...state, loadingDelete: true };

    case Types.ADD_PRODUCT_REQUEST:
      return { ...state, loadingAdd: true };

    case Types.GET_SING_PRODUCT_REQUEST:
      return { ...state, loadingGetSing: true };

    case Types.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loadingUpdate: true,
      };

    //loading false
    case Types.GET_PRODUCT_FALSE:
      return {
        ...state,
        getProductFalse: payload,
        loading: false,
      };

    case Types.DELETE_PRODUCT_FALSE:
      return {
        ...state,
        deleteProductFalse: payload,
        loadingDelete: false,
      };

    case Types.ADD_PRODUCT_FALSE:
      return {
        ...state,
        addProductFalse: payload,
        loadingAdd: false,
      };

    case Types.GET_SING_PRODUCT_FALSE:
      return {
        ...state,
        getSingProductFalse: payload,
        loadingGetSing: false,
      };

    case Types.UPDATE_PRODUCT_FALSE:
      return {
        ...state,
        updateProductFalse: payload,
        loadingUpdate: false,
      };

    // loading success
    case Types.GET_ALL:
    case Types.GET_PRODUCT_SUCCESS:
      return { ...state, allProducts: payload, loading: false };

    case Types.GET_SING_PRODUCT_SUCCESS:
      return { ...state, product: action.payload, loadingGetSing: false };

    case Types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: state.allProducts.filter((e) => e.id !== action.payload),
        loadingDelete: false,
      };
    case Types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
        loadingAdd: false,
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
        loadingUpdate: false,
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
