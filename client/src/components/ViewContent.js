// https://www.sanity.io/guides/build-your-first-blog-using-react
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewContent = () => {
  const [postData, setPostData] = useState({
    id: "",
    title: "",
    content: "",
    thumbs: "",
    date: "",
  });
  const { id } = useParams();
  const viewStyle = { margin_bottom: "0px" };
  const dataStyle = { margin: "0px" };
  useEffect(() => {
    const path = `/contents/view/${id}`;
    fetch(path)
      .then((res) => res.json())
      .then((res) => {
        const data = res.body[0];
        setPostData({
          id: data._id,
          title: data.title,
          content: data.content,
          thumbs: data.thumbs,
          date: data.date,
        });
      });
    // .catch(err => console.log(err))
  }, []);
  return (
    <div key={postData.id}>
      <div>
        <div className="viewcontent">
          <h2 style={viewStyle}>
            {postData.title} &nbsp; 👍 : {postData.thumbs}{" "}
          </h2>
        </div>
        <h4 style={dataStyle}>Date : {postData.date} </h4>
        <hr />
        <h3>{postData.content} </h3>
      </div>
    </div>
  );
};

export default ViewContent;
// https://www.sanity.io/guides/build-your-first-blog-using-react
