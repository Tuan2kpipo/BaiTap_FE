import { combineReducers } from "redux";
import * as users from "./Auth";
import reducer from "./Product";
import user from "./User";

const rootReducer = combineReducers({
  infoRd: reducer,
  infoUS: user,
  infoLg: users.authUser,
  infoLgSuccess: users.authLogin,
});

export default rootReducer;
