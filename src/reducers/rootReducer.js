import likeReducer from "./likeReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import darkReducer from "./darkReducer";
const rootReducer = combineReducers({
  isLiked: likeReducer,
  isLoggedIn: authReducer,
  isDarkMode: darkReducer
});
export default rootReducer;
