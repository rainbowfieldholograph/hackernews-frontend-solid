import { Component, createResource, For, Show } from 'solid-js';
import { getStories } from '../../api';
import { currentCategory, currentPage } from '../../store';
import { StoryItem } from '../StoryItem';
import styles from './StoryList.module.css';

export const StoryList: Component = () => {
  const paramList = () => ({ variant: currentCategory(), page: currentPage() });
  const [stories] = createResource(paramList, getStories);

  return (
    <Show when={stories()?.data && !stories.loading} fallback={<div>Data loading...</div>}>
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
