import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './index.module.scss'

const Pagination = ({itemsPerPage, pageCount, onPageChange}) => {
  return (
    <ReactPaginate
    className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onPageChange(event.selected + 1)}
        pageRangeDisplayed={itemsPerPage}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
  );
}

export default Pagination;
