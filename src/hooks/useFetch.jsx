import { useState, useEffect } from 'react';
import { FetchService } from '../services/FetchService';

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setPending(true);
      try {
        const response = await FetchService.getAllData(url);
        setData(response.data);

        setErrorMsg(null);
      } catch (error) {
        setErrorMsg(error.message || 'An error occurred');
      } finally {
        setPending(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    pending,
    errorMsg,
  };
}
