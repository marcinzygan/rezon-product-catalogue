import React from "react";
import classes from "./paginationMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  prevPage,
  firstPage,
  lastPage,
} from "@/state/paginationSlice";
const PaginationMenu = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.page.currentPage);
  return (
    <div className={classes.paginate__container}>
      <button onClick={() => dispatch(firstPage())}>first</button>
      <button onClick={() => dispatch(prevPage())}>prev</button>{" "}
      <p>
        {currentPage} z {props.numberOfPages}
      </p>
      <button onClick={() => dispatch(nextPage(props.numberOfPages))}>
        next
      </button>
      <button onClick={() => dispatch(lastPage(props.numberOfPages))}>
        last
      </button>
    </div>
  );
};

export default PaginationMenu;
