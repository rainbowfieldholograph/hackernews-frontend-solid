import styles from './Footer.module.css';
import type { Component } from 'solid-js';

export const Footer: Component = () => {
  return (
    <footer class={styles.footer}>
      <a class={styles.link} href="https://github.com/rainbowfieldholograph">
        Github
      </a>
    </footer>
  );
};
