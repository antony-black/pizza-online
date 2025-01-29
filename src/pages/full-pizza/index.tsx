import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URLS } from '../../api/URL';

type TFullPizza = {
  title: string;
  price: number;
};

const FullPizza: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fullPizza, setFullPizza] = useState<{ title: string; price: number }>();

  useEffect(() => {
    const getPizza = async () => {
      try {
        const pizza = await axios.get(`${API_URLS.items}/${id}`);
        setFullPizza(pizza.data);
      } catch (error: unknown) {
        alert('There is not this pizza. Choose another one please!');
        navigate('/');
        if (error instanceof Error) {
          console.error('FullPizza/The error cause getting this certain pizza: ', error.message);
        } else {
          console.error('FullPizza/An unexpected error occurred: ', error);
        }
        // throw Error('FullPizza/The error cause getting this certain pizza, ', error.message);
      }
    };

    getPizza();
  }, []);

  if (!fullPizza) {
    return <p>Loading...</p>;
  }
  console.log(fullPizza);
  return (
    <div className="container">
      <img
        className="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        // src={fullPizza.imageUrl}
        alt="pizza"
      />
      <h4>{fullPizza.title}</h4>
      <p>DESCRIPTION</p>
      <b>{fullPizza.price}$</b>
    </div>
  );
};

export default FullPizza;
