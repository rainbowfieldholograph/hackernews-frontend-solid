import styles from './Header.module.css';
import type { Component } from 'solid-js';

export const Header: Component = () => {
  return (
    <header class={styles.header}>
      <h1 class={styles.title}>Hackernews frontend</h1>
      <h2 class={styles.description}>Built with SolidJS</h2>
    </header>
  );
};
