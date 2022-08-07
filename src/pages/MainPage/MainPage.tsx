import { CategoriesList } from '../../components/CategoriesList';
import { StoryList } from '../../components/StoryList';
import { Pagination } from '../../components/Pagination';
import styles from './MainPage.module.css';
import type { Component } from 'solid-js';

export const MainPage: Component = () => {
  return (
    <main class={styles.main}>
      <CategoriesList />
      <Pagination />
      <StoryList />
    </main>
  );
};
