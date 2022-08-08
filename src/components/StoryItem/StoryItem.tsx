import { Component, Show } from 'solid-js';
import { currentPage } from '../../store';
import styles from './StoryItem.module.css';
import type { Story } from '../../api';

const STORIES_PER_PAGE = 30;

type Props = Story & {
  index: number;
};

export const StoryItem: Component<Props> = (props) => {
  const calculateIndex = () => {
    const index = props.index + 1;
    const page = currentPage() - 1;
    return page * STORIES_PER_PAGE + index;
  };

  return (
    <div class={styles.item}>
      <span class={styles.index}>{calculateIndex()}.</span>
      <a class={styles.link} href={props.url}>
        {props.title}
      </a>{' '}
      <a class={styles.domain} href={props.domain}>
        <Show when={props.domain}>({props.domain})</Show>
      </a>
    </div>
  );
};
