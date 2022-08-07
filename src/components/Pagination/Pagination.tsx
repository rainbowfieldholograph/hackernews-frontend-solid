import { currentPage, setCurrentPage } from '../../store';
import styles from './Pagination.module.css';
import type { Component } from 'solid-js';

export const Pagination: Component = () => {
  const changeCurrentPage = (operand: number) => () => {
    setCurrentPage((prev) => {
      const newValue = prev + operand;
      if (newValue <= 0) return prev;
      return prev + operand;
    });
  };

  return (
    <div class={styles.wrapper}>
      <span class={styles.current}>{currentPage()}</span>
      <div class={styles.buttons}>
        <button class={styles.button} onClick={changeCurrentPage(-1)}>
          {'<'}
        </button>
        <button class={styles.button} onClick={changeCurrentPage(1)}>
          {'>'}
        </button>
      </div>
    </div>
  );
};
