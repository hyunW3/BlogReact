import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostContent from "../api/PostContent";
import "../css/WriteContent.css";

const WriteContent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const requestPost = async () => {
    await PostContent(title, content);
  };
  return (
    <div>
      <h2>WriteContent</h2>
      <form>
        <input
          type="title"
          className="post-title-style"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          placeholder="이곳에 제목을 입력하세요"
        />
        <br />
        <input
          type="content"
          className="content-style"
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
          placeholder="이곳에 내용을 입력하세요"
        />
        <div className="post-button-style">
          <Link to="/">
            <button type="reset"> BACK </button>

            <button type="submit" onClick={requestPost}>
              {" "}
              POST{" "}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default WriteContent;
