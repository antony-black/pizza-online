import React, { useState, useEffect } from 'react';
import { Categories } from '../../components/categories';
import { PizzaBlock } from '../../components/pizza-block';
import { Sort } from '../../components/sort';
import useFetch from '../../hooks/useFetch';
import { FetchService } from '../../services/FetchService';
import { API_URLS } from '../../api/URL';

export const Home = () => {
  const [pizzaItems, setPizzaItems] = useState([]);
  const { data: pizzaData, pending: pizzaPending, errorMsg } = useFetch(API_URLS.items, {});

  useEffect(() => {
    if (!!pizzaData) {
      setPizzaItems(pizzaData);
    }
  }, [pizzaData]);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizza:</h2>
      <div className="content__items">
        {errorMsg ? <div className="content__error-info">{`${errorMsg}!!!`}</div> : null}
        {pizzaPending
          ? FetchService.createLoadingShadow()
          : pizzaItems.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </>
  );
};
