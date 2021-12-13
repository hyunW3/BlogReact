import { useDispatch } from "react-redux";
import FetchContent from "./FetchContent";
import { InitContent } from "../redux/BlogContent";

const initiateData = async () => {
  const dispatch = useDispatch();
  const newArr = await FetchContent();
  dispatch(InitContent(newArr));
};
export default initiateData;
