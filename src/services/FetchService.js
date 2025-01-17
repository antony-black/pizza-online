import axios from 'axios';
import { Skeleton } from '../components/pizza-block/skeleton';

export const FetchService = {
  // async getPaginatedData(url, options) {
  //   try {
  //     const data = await axios.get(url, { params: options });
  //     return data;
  //   } catch (error) {
  //     console.error('Error in getPaginatedData:', error.message);
  //   }
  // },

  async getAllData(url) {
    try {
      // console.log("Fetching data from URL:", url);
      const data = await axios.get(url);
      return data;
    } catch (error) {
      console.error('Error in getAllData:', error.message);
      throw error;
    }
  },

  // extractUrlPart(url) {
  //   const pageNamePart = url.split('/');
  //   return pageNamePart[pageNamePart.length - 1];
  // },

  createLoadingShadow() {
    return [...Array(12)].map((_, index) => <Skeleton key={index} />);
  },
};
