const ChangeContentData = (postData, category, value) => {
  let newData;
  switch (category) {
    case "title":
      newData = {
        id: postData.id,
        title: value,
        content: postData.content,
        thumbs: postData.thumbs,
        date: postData.date,
        modified: true,
      };
      break;
    case "content":
      newData = {
        id: postData.id,
        title: postData.title,
        content: value,
        thumbs: postData.thumbs,
        date: postData.date,
        modified: true,
      };
      break;
    default:
      newData = Object({}, postData);
  }
  return newData;
};
export default ChangeContentData;
