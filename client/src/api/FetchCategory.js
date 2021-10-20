// ../components/Navigation.js에서 활용합니다.

const FetchCategory = async () => {
  const newArr = [];
  await fetch("./categories")
    .then((res) => res.json())
    .then((res) => res.forEach((data) => newArr.push([data._id, data.name])));
  return newArr;
};
export default FetchCategory;
