import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPizza } from '../../redux/pizza/asyncActions';
import { selectPizzaData } from '../../redux/pizza/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import { selectCart } from '../../redux/cart/selectors';
import { selectPagination } from '../../redux/pagination/selectors';
import { AppDispatch } from '../../redux/store';

import { Categories, PizzaBlock, Pagination, Error, Sort } from '../../components';

import { FetchService } from '../../services/FetchService';
import { API_URLS } from '../../api/URL';
import { Status } from '../../enums/status';


export const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
   const { allCartPizza } = useSelector(selectCart);
  const { allPizza, status } = useSelector(selectPizzaData);
  const { currentPage } = useSelector(selectPagination);
  const { categoryId, sortType, searchValue } = useSelector(selectFilter);
  const [totalCount, setTotalCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 4;

      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(allCartPizza));
      }, [allCartPizza]);

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
        <Sort sortType={sortType} />
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
