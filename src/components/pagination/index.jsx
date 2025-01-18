import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/slices/paginationSlice';
import styles from './index.module.scss';

const Pagination = ({ itemsPerPage, pageCount }) => {
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => dispatch(setPage(event.selected + 1))}
      pageRangeDisplayed={itemsPerPage}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
