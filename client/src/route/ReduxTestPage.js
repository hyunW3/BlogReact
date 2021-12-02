import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReduxStarter, {
  reduxADD,
  reduxMINUS,
  reduxTOGGLE,
} from "../redux/ReduxStarter";
import FetchContent from "../api/FetchContent";
import BlogContent, { InitContent, ADDContent } from "../redux/BlogContent";

const ReduxTestPage = () => {
  const { count, status } = useSelector((state) => {
    return state.ReduxStarter;
  });
  const [contents, setContents] = useState([]);
  const fetchData = async () => {
    const newArr = await FetchContent();
    setContents(newArr);
  };
  const dispatch = useDispatch();
  const Increase = () => dispatch(reduxADD());
  const Decrease = () => dispatch(reduxMINUS());
  const Toggle = () => dispatch(reduxTOGGLE());
  const logger = () => {
    console.log(count);
  };
  useEffect(async () => {
    fetchData();
  }, []);
  useEffect(() => {
    dispatch(InitContent(contents));
  }, [contents]);

  return (
    <>
      <div>
        <h2> test Page for redux</h2>
        <h3> count : {count} </h3>
        <h3> status : {status} </h3>
        <button onClick={Increase}> UP</button>
        <button onClick={Decrease}> DOWN</button>
        <button onClick={logger}>logger </button>
        <button onClick={Toggle}>Toggle Status</button>
      </div>
      <div>
        {contents &&
          contents.map((data) => {
            return <p>{data.title}</p>;
          })}
      </div>
    </>
  );
};
export default ReduxTestPage;
