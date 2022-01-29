import React from "react";
import { Link } from "react-router-dom";

const ContentDetail = ({ postData, editable, API }) => {
  return (
    <div key={postData.id}>
      <div>
        <div className="view-content">
          {editable ? (
            <h2 className="view-style">
              <input
                value={postData.title}
                onChange={({ target: { value } }) => API.setTitle(value)}
              />
              &nbsp; 👍 : {postData.thumbs}{" "}
            </h2>
          ) : (
            <h2 className="view-style">
              {postData.title} &nbsp; 👍 : {postData.thumbs}{" "}
            </h2>
          )}
        </div>
        <p className="date-style">Date : {postData.date} </p>
        <hr />
        {editable ? (
          <input
            type="contentDetail"
            value={postData.content}
            onChange={({ target: { value } }) => API.setContent(value)}
          />
        ) : (
          <h3>{postData.content} </h3>
        )}
      </div>
      <div>
        {editable ? (
          <>
            <button type="button" onClick={API.Update}>
              {" "}
              Save{" "}
            </button>
            <button type="button" onClick={API.CancelSave}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={API.toggleEditable}>
              {" "}
              Edit
            </button>
            <Link to="../">
              <button type="button"> Back </button>
            </Link>
          </>
        )}
        <button type="button" onClick={API.toggleEditable}>
          {" "}
          Toggle{" "}
        </button>
      </div>
    </div>
  );
};
export default ContentDetail;
