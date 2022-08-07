import { currentPage, setCurrentPage } from '../../store';
import { CategoriesList } from '../../components/CategoriesList';
import { StoryList } from '../../components/StoryList';
import styles from './MainPage.module.css';
import type { Component } from 'solid-js';

export const MainPage: Component = () => {
  const changeCurrentPage = (operand: number) => () => {
    setCurrentPage((prev) => {
      const newValue = prev + operand;
      if (newValue <= 0) return prev;
      return prev + operand;
    });
  };

  return (
    <main class={styles.main}>
      <CategoriesList />
      <div class={styles.buttons}>
        <button onClick={changeCurrentPage(-1)}>{'<'}</button>
        <button onClick={changeCurrentPage(1)}>{'>'}</button>
        {currentPage()}
      </div>
      <StoryList />
    </main>
  );
};
