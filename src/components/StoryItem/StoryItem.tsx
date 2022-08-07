import styles from './StoryItem.module.css';
import type { Component } from 'solid-js';
import type { Story } from '../../api/types';

type Props = Story & {
  index: number;
};

export const StoryItem: Component<Props> = (props) => {
  return (
    <div class={styles.item}>
      <span class={styles.index}>{props.index}.</span>
      <a class={styles.link} href={props.url}>
        {props.title}
      </a>{' '}
      <a class={styles.domain} href={props.domain}>
        ({props.domain})
      </a>
    </div>
  );
};
