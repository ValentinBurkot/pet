import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

import { useDispatch } from "react-redux";
import { setPagination } from "../../Redux/slices/filterSlice";

export default function Pagination() {
  const dispatch = useDispatch();

  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => dispatch(setPagination(e.selected + 1))}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
