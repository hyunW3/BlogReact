import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ContentInList = ({ content, thumbsUp }) => {
  return (
    <div key={content.id}>
      <h3>
        <Link
          to={{
            pathname: `/contents/view/${content.id}`,
            datum: content,
          }}
        >
          {content.title} &nbsp;
        </Link>

        <button type="button" value={content.id} onClick={thumbsUp}>
          👍{content.thumbs}
        </button>
      </h3>
      {content.date}에 작성
      <hr />
    </div>
  );
};
const contentProps = {
  id: PropTypes.id,
  title: PropTypes.string,
  thumbs: PropTypes.int,
  date: PropTypes.string,
};
ContentInList.propTypes = {
  content: PropTypes.shape(contentProps).isRequired,
  thumbsUp: PropTypes.func.isRequired,
};
export default ContentInList;
