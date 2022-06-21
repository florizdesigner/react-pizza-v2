import React from "react";

import styles from "./index.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ pages, setPage }) => {
  const onClickPage = (e) => {};

  return (
    <div className={styles.pagination}>
      <apple-pay-button
        buttonstyle="black"
        type="buy"
        locale="el-GR"
      ></apple-pay-button>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => {
          setPage(e.selected + 1);
        }}
        pageRangeDisplayed={2}
        pageCount={pages}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
