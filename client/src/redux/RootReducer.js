import { combineReducers } from "redux";
import ReduxStarter from "./ReduxStarter";
import BlogContent from "./BlogContent";

const RootReducer = combineReducers({
  ReduxStarter,
  BlogContent,
});

export default RootReducer;
