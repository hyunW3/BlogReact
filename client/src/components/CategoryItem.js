import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = (info) => {
  const { name } = info;
  const path = `/${name}`;
  return (
    <Link to={path}>
      <li className="category-item">{name} </li>
      <li>|</li>
    </Link>
  );
};
export default CategoryItem;
