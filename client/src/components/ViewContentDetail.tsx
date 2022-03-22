import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentDetail from "./ContentDetail";
import { RootState, BlogContentType } from "../redux/RootReducer";
import { UpdateContent, dataType } from "../redux/BlogContent";
import initiateData from "../api/InitiateDataRedux";
import initiateContentData from "../api/ChangeDataRedux";
import UpdateContentDB from "../api/UpdateContentDB";
import "../css/ViewContentDetail.css";

type matchProps = {
  path: string;
  url: string;
  isExact: boolean;
  params: {
    id: string;
  };
};
export type dataTypeWithUndefined = dataType | undefined;

const ViewContentDetail = ({ match }): React.ReactElement<matchProps> => {
  const targetId = match?.params.id;
  const postData: dataTypeWithUndefined = useSelector(
    (state: { BlogContent: BlogContentType }) => {
      return state.BlogContent.contents.find((x) => x.id === targetId);
    }
  );
  const [prevPostData, setPrevPostData] = useState<dataTypeWithUndefined>();
  const dispatch = useDispatch();

  const [editable, setEditable] = useState(false);
  const setContent = (value) => {
    const newData = initiateContentData(postData, "content", value);
    if (prevPostData === undefined) setPrevPostData(postData);
    dispatch(UpdateContent(postData?.id, newData));
  };
  const setTitle = (value) => {
    const newData: dataTypeWithUndefined = initiateContentData(
      postData,
      "title",
      value
    );
    console.log("postData : ", postData);
    if (prevPostData === undefined) setPrevPostData(postData);
    dispatch(UpdateContent(postData?.id, newData));
  };
  const toggleEditable = () => {
    setEditable((prev) => !prev);
  };
  const CancelSave = () => {
    toggleEditable();
    dispatch(UpdateContent(postData?.id, prevPostData));
  };
  const Update = async () => {
    toggleEditable();
    if (postData?.modified === true) {
      const updateArr = [
        {
          id: postData.id,
          title: postData.title,
          content: postData.content,
          date: new Date(Date.now()),
        },
      ];
      UpdateContentDB(updateArr);
    }
  };
  // 새로고침했을 때 정보가 사라지는 것을 방지하기 위해 두었습니다.
  if (postData === undefined) {
    // postData = window.localStorage.getItem("state");
    initiateData(dispatch);
  } else {
    const postDataForLocalStorage = JSON.stringify(postData);
    window.localStorage.setItem("state", postDataForLocalStorage);
  }
  const API = {
    toggleEditable,
    CancelSave,
    Update,
    setContent,
    setTitle,
  };
  return <ContentDetail postData={postData} editable={editable} API={API} />;
};

export default ViewContentDetail;
