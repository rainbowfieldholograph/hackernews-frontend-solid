import { currentPage, setCurrentPage } from '../../store';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';
import styles from './Pagination.module.css';
import type { Component } from 'solid-js';

const MIN_PAGE = 0;
const MAX_PAGE = 10;

export const Pagination: Component = () => {
  const changeCurrentPage = (operand: number) => () => {
    setCurrentPage((prev) => {
      const newValue = prev + operand;
      if (newValue <= MIN_PAGE || newValue > MAX_PAGE) return prev;
      return prev + operand;
    });
  };

  return (
    <div class={styles.wrapper}>
      <span class={styles.current}>Current page: {currentPage()}</span>
      <div class={styles.buttons}>
        <button class={styles.button} onClick={changeCurrentPage(-1)}>
          <ArrowLeftIcon width={30} height={15} />
        </button>
        <button class={styles.button} onClick={changeCurrentPage(1)}>
          <ArrowLeftIcon width={30} height={15} />
        </button>
      </div>
    </div>
  );
};
