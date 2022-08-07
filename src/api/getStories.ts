import axios from 'axios';
import type { Story, StoryCategories } from './types';

type Params = { variant: StoryCategories; page: number };

export const getStories = async (params: Params) => {
  const { page, variant } = params;
  return await axios.get<Story[]>(`https://node-hnapi.herokuapp.com/${variant}?page=${page}`);
};
