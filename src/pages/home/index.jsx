import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import qs from 'qs';
import { Categories } from '../../components/categories';
import { PizzaBlock } from '../../components/pizza-block';
import { Sort } from '../../components/sort';
import useFetch from '../../hooks/useFetch';
import { FetchService } from '../../services/FetchService';
import { API_URLS } from '../../api/URL';
import Pagination from '../../components/pagination';
import { SearchContext } from '../../App';

export const Home = () => {
  const navigate = useNavigate();
  const page = useSelector((state) => state.pagination.currentPage);
  const { categoryId, sortType } = useSelector((state) => state.filter);
  const { searchingValue } = useContext(SearchContext);
  const [pizzaItems, setPizzaItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 4;

  // TODO: add choosing by DESC/ASC
  const getUrl = () => {
    const categoryQuery = categoryId > 0 ? `category=${categoryId}` : '';
    const sortQuery = sortType ? `sortBy=${sortType}&order=desc` : '';
    const searchQuery = searchingValue ? `search=${searchingValue}` : '';

    const queryParams = [categoryQuery, sortQuery, searchQuery].filter(Boolean).join('&');
// console.log(`${API_URLS.items}?page=${page}&limit=${itemsPerPage}&${queryParams}`);

    return `${API_URLS.items}?page=${page}&limit=${itemsPerPage}&${queryParams}`;
  };

  const { data: pizzaData, pending: pizzaPending, errorMsg } = useFetch(getUrl(), {});

  const pizza = pizzaItems.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  useEffect(() => {
    const fetchTotalCount = async () => {
      try {
        const response = await FetchService.getAllData(API_URLS.items);
        setTotalCount(response.data.length);
      } catch (error) {
        console.error('Error fetching total count:', error.message);
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
    if (!!pizzaData) {
      setPizzaItems(pizzaData);
    }
  }, [pizzaData]);

  useEffect(() => {
    navigate()
  },[]);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizza:</h2>
      <div className="content__items">
        {pizzaPending ? FetchService.createLoadingShadow() : pizza}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        pageCount={pageCount}
      />
    </>
  );
};
