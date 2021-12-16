import FetchContentDB from "./FetchContentDB";
import { InitContent } from "../redux/BlogContent";

const initiateContentData = async (dispatch) => {
  const newArr = await FetchContentDB();
  dispatch(InitContent(newArr));
};
export default initiateContentData;
