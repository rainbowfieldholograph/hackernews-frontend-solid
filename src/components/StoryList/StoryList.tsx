import { Component, createResource, For, Show } from 'solid-js';
import { StoryItem } from '../StoryItem';
import { getStories } from '../../api/api';
import styles from './StoryList.module.css';

export const StoryList: Component = () => {
  const [stories] = createResource(1, getStories);

  return (
    <Show when={stories()?.data} fallback={<div>Data loading...</div>}>
      <ol class={styles.list}>
        <For each={stories()?.data}>
          {(story, index) => (
            <li>
              <StoryItem index={index()} {...story} />
            </li>
          )}
        </For>
      </ol>
    </Show>
  );
};
