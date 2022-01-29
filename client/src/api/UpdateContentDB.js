const UpdateContentDB = async (updateArr) => {
  await fetch("/contents/update", {
    method: "PATCH",
    body: JSON.stringify(updateArr),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export default UpdateContentDB;
