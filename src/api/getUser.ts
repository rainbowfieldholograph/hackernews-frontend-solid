import axios from 'axios';

export const getUser = async (id: number) => {
  return axios.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
};
