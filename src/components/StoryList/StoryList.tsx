import { Component, createResource, For, Match, Switch } from 'solid-js';
import { getStories } from '../../api';
import { currentCategory, currentPage } from '../../store';
import { StoryItem } from '../StoryItem';
import styles from './StoryList.module.css';

export const StoryList: Component = () => {
  const paramList = () => ({ variant: currentCategory(), page: currentPage() });
  const [stories] = createResource(paramList, getStories);

  return (
    <Switch
      fallback={
        <ol class={styles.list}>
          <For each={stories()?.data}>
            {(story, index) => (
              <li>
                <StoryItem index={index()} {...story} />
              </li>
            )}
          </For>
        </ol>
      }
    >
      <Match when={stories.loading}>
        <div>Data loading...</div>
      </Match>
      <Match when={!stories()?.data.length}>
        <div>No data found</div>
      </Match>
    </Switch>
  );
};
