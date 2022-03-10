import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

const contentProps = {
  id: PropTypes.id,
  title: PropTypes.string,
  thumbs: PropTypes.int,
  date: PropTypes.string,
};
const apiProps = {
  setTitle: PropTypes.function,
  setContent: PropTypes.function,
  Update: PropTypes.function,
  CancelSave: PropTypes.function,
  toggleEditable: PropTypes.function,
};
ContentDetail.propTypes = {
  postData: PropTypes.shape(contentProps).isRequired,
  editable: PropTypes.bool.isRequired,
  API: PropTypes.shape(apiProps).isRequired,
};

export default ContentDetail;
