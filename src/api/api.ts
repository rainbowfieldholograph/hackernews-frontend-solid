import axios from 'axios';
import type { Story } from './types';

// const mapStories = {
//   top: 'news',
//   new: 'newest',
//   show: 'show',
//   ask: 'ask',
//   job: 'jobs',
// };

// const get = (path: string) =>
//   fetch(path, {
//     headers: { 'User-Agent': 'chrome' },
//   });

export const getStory = async (id: number) => {
  return await axios.get<Story>(`https://node-hnapi.herokuapp.com/item/${id}`);
};

export function getUser(id: number) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
}

// type StoryVariants = 'news' | 'newest' | 'show' | 'ask' | 'jobs';
export const getStories = async (page: number) => {
  const type = 'news';
  return await axios.get<Story[]>(`https://node-hnapi.herokuapp.com/${type}?page=${page}`);
};
