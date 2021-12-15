import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentDetail from "./ContentDetail";
import { UpdateContent } from "../redux/BlogContent";
import initiateData from "../api/InitiateDataRedux";
import initiateContentData from "../api/ChangeDataRedux";
import "../css/ViewContentDetail.css";

const ViewContentDetail = ({ match }) => {
  const targetId = match?.params.id;
  let postData = useSelector((state) => {
    return state.BlogContent.contents.find((x) => x.id === targetId);
  });
  const [prevPostData, setPrevPostData] = useState();
  const dispatch = useDispatch();

  const [editable, setEditable] = useState(false);
  const setContent = (value) => {
    const newData = initiateContentData(postData, "content", value);
    if (prevPostData === undefined) setPrevPostData(postData);
    dispatch(UpdateContent(postData.id, newData));
  };
  const setTitle = (value) => {
    const newData = initiateContentData(postData, "title", value);
    if (prevPostData === undefined) setPrevPostData(postData);
    dispatch(UpdateContent(postData.id, newData));
  };
  const toggleEditable = () => {
    setEditable((prev) => !prev);
  };
  const CancelSave = () => {
    toggleEditable();
    dispatch(UpdateContent(postData.id, prevPostData));
  };
  const Update = async () => {
    toggleEditable();
    if (postData.modified === true) {
      const updateArr = [
        {
          id: postData.id,
          title: postData.title,
          content: postData.content,
          date: new Date(Date.now()),
        },
      ];

      await fetch("/contents/update", {
        method: "PATCH",
        body: JSON.stringify(updateArr),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };
  // 새로고침했을 때 정보가 사라지는 것을 방지하기 위해 두었습니다.
  if (postData === undefined) {
    postData = window.localStorage.getItem("state");
    initiateData(dispatch);
  } else {
    window.localStorage.setItem("state", postData);
  }
  const API = {
    toggleEditable,
    CancelSave,
    Update,
    setContent,
    setTitle,
  };

  return (
    <>
      <ContentDetail postData={postData} editable={editable} API={API} />
    </>
  );
};

export default ViewContentDetail;
