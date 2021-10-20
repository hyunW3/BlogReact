// ../components/PageContentsList.js에서 사용합니다.
const FetchContent = async () => {
  const newArr = [];
  await fetch("/contents")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((data) => {
        newArr.push({
          id: data._id,
          title: data.title,
          content: data.content,
          date: data.date,
          thumbs: data.thumbs,
          modified: false,
        });
      });
    });
  return newArr;
};
export default FetchContent;
