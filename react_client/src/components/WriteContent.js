import React, { useState } from "react";
import { Link } from "react-router-dom";

const WriteContent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const postContent = () => {
    const databody = {
      title,
      content,
      thumbs: 0,
    };
    fetch("/contents", {
      method: "POST",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const titleStyle = { width: "80%" };
  const contentStyle = { width: "80%", height: "450px" };
  const buttonStyle = { margin: "10px" };
  return (
    <div>
      <h2>WriteContent</h2>
      <form>
        <input
          type="title"
          style={titleStyle}
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          placeholder="이곳에 제목을 입력하세요"
        />
        <br />
        <input
          type="content"
          style={contentStyle}
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
          placeholder="이곳에 내용을 입력하세요"
        />
        <div style={buttonStyle}>
          <Link to="/">
            <button type="reset"> BACK </button>
            <button type="submit" onClick={postContent}>
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
