import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizza, selectPizzaData } from '../../redux/slices/pizzaSlice';
import { selectFilter } from '../../redux/slices/filterSlice';
import { Categories } from '../../components/categories';
import { PizzaBlock } from '../../components/pizza-block';
import { Sort } from '../../components/sort';
import Error from '../../components/error';
import { FetchService } from '../../services/FetchService';
import { API_URLS } from '../../api/URL';
import Pagination from '../../components/pagination';
import { selectPagination } from '../../redux/slices/paginationSlice';
import { AppDispatch } from '../../redux/store';
import { Status } from '../../enums/status';

export const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { allPizza, status } = useSelector(selectPizzaData);
  const {currentPage} = useSelector(selectPagination);
  const { categoryId, sortType, searchValue } = useSelector(selectFilter);
  const [totalCount, setTotalCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 4;
  
  // TODO: add choosing by DESC/ASC
  const getUrl = (): string => {
    const categoryQuery = categoryId > 0 ? `category=${categoryId}` : '';
    const sortQuery = sortType ? `sortBy=${sortType}&order=desc` : '';
    const searchQuery = searchValue ? `search=${searchValue}` : '';

    const queryParams = [categoryQuery, sortQuery, searchQuery].filter(Boolean).join('&');

    return `${API_URLS.items}?page=${currentPage}&limit=${itemsPerPage}&${queryParams}`;
  };

  const pizza = allPizza.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  useEffect(() => {
    const fetchTotalCount = async () => {
      try {
        const response = await FetchService.getAllData(API_URLS.items);
        setTotalCount(response.data.length);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Error fetching total count:', error);
        } else {
          console.error('Error fetching total count: ', error);
        }
        return 0;
      }
    };
    fetchTotalCount();
  }, []);

  useEffect(() => {
    if (totalCount > 0) {
      setPageCount(Math.ceil(totalCount / itemsPerPage));
    }
  }, [totalCount]);

  useEffect(() => {
    dispatch(fetchPizza({ url: getUrl() }));
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort sortType={sortType}/>
      </div>
      <h2 className="content__title">All pizza:</h2>
      <div className="content__items">
        {status === 'error' ? (
          <Error />
        ) : status === Status.LOADING ? (
          FetchService.createLoadingShadow()
        ) : (
          pizza
        )}
      </div>
      <Pagination itemsPerPage={itemsPerPage} pageCount={pageCount} />
    </>
  );
};
