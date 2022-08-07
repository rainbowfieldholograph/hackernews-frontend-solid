import { Component, createEffect, createSignal } from 'solid-js';
import { currentCategory, setCurrentCategory } from '../../store';
import styles from './CategoryItem.module.css';
import type { StoryCategories } from '../../api';

type Props = {
  category: StoryCategories;
};

export const CategoryItem: Component<Props> = (props) => {
  const [isActive, setIsActive] = createSignal(false);

  createEffect(() => {
    setIsActive(currentCategory() === props.category);
  });

  const onClick = () => {
    setCurrentCategory(props.category);
  };

  return (
    <button class={styles.category} classList={{ [styles.active]: isActive() }} onClick={onClick}>
      {props.category}
    </button>
  );
};
