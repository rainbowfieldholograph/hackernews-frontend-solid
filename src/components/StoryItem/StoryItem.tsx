import { Component, Show } from 'solid-js';
import styles from './StoryItem.module.css';
import type { Story } from '../../api';

type Props = Story & {
  index: number;
};

export const StoryItem: Component<Props> = (props) => {
  return (
    <div class={styles.item}>
      <span class={styles.index}>{props.index + 1}.</span>
      <a class={styles.link} href={props.url}>
        {props.title}
      </a>{' '}
      <a class={styles.domain} href={props.domain}>
        <Show when={props.domain}>({props.domain})</Show>
      </a>
    </div>
  );
};
