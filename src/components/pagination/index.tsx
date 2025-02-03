import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setPage } from '../../redux/pagination/slice';
import styles from './index.module.scss';

interface IPaginationProps {
  itemsPerPage: number;
  pageCount: number;
}

const Pagination: React.FC<IPaginationProps> = ({ itemsPerPage, pageCount }) => {
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
