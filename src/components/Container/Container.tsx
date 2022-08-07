import styles from './Container.module.css';
import type { ParentComponent } from 'solid-js';

export const Container: ParentComponent = (props) => {
  return <div class={styles.container}>{props.children}</div>;
};
