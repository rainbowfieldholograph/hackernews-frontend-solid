import { currentCategory, setCurrentCategory } from '../../store';
import styles from './CategoryItem.module.css';
import type { Component } from 'solid-js';
import type { StoryCategories } from '../../api';

type Props = {
  category: StoryCategories;
};

export const CategoryItem: Component<Props> = (props) => {
  // eslint-disable-next-line solid/reactivity
  const isActive = currentCategory() === props.category;

  const onClick = () => {
    setCurrentCategory(props.category);
  };

  return (
    <button class={styles.category} classList={{ [styles.active]: isActive }} onClick={onClick}>
      {props.category}
    </button>
  );
};
