import FetchContent from "./FetchContent";
import { InitContent } from "../redux/BlogContent";

const initiateContentData = async (dispatch) => {
  const newArr = await FetchContent();
  dispatch(InitContent(newArr));
};
export default initiateContentData;
