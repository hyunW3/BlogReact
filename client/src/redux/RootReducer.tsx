import { combineReducers } from "redux";
import BlogContent from "./BlogContent";

const RootReducer = combineReducers({
  BlogContent,
});

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
export type BlogContentType = ReturnType<typeof BlogContent>;
