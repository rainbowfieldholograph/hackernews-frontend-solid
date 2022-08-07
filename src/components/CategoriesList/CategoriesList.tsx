import { Component, For } from 'solid-js';
import { storyCategories } from '../../api';
import { CategoryItem } from '../CategoryItem';
import styles from './CategoriesList.module.css';

export const CategoriesList: Component = () => {
  return (
    <ul class={styles.list}>
      <For each={storyCategories}>
        {(category) => {
          return (
            <li>
              <CategoryItem category={category} />
            </li>
          );
        }}
      </For>
    </ul>
  );
};
