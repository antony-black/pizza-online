import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './index.module.scss'

const Pagination = ({onPageChange}) => {
  return (
    <ReactPaginate
    className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onPageChange(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
  );
}

export default Pagination;
