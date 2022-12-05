import { combineReducers } from "redux";
import * as users from "./AuthReducer";
import reducer from "./ProductReducer";
import user from "./UserReducer";

const rootReducer = combineReducers({
  productRd: reducer,
  userRd: user,
  authRd: users.authUser,
  authLogingRd: users.authLogin,
});

export default rootReducer;
