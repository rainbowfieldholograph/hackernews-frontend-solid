import axios from 'axios';
import type { Story } from './types';

export const getStory = async (id: number) => {
  return await axios.get<Story>(`https://node-hnapi.herokuapp.com/item/${id}`);
};
