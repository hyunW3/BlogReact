const FetchCategory = async () => {
  const newArr = [];
  await fetch("./categories")
    .then((res) => res.json())
    .then((res) => res.forEach((data) => newArr.push([data._id, data.name])));
  return newArr;
};
export default FetchCategory;
