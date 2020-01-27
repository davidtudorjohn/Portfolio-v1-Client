import likeReducer from "./likeReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  isLiked: likeReducer,
  isLoggedIn: authReducer
});
export default rootReducer;
