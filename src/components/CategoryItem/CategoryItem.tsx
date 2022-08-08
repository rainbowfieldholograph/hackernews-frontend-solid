import { currentCategory, setCurrentCategory, setCurrentPage } from '../../store';
import styles from './CategoryItem.module.css';
import type { Component } from 'solid-js';
import type { StoryCategories } from '../../api';

type Props = {
  category: StoryCategories;
};

export const CategoryItem: Component<Props> = (props) => {
  const onClick = () => {
    setCurrentCategory(props.category);
    setCurrentPage(1);
  };

  return (
    <button
      class={styles.category}
      classList={{ [styles.active]: currentCategory() === props.category }}
      onClick={onClick}
    >
      {props.category}
    </button>
  );
};
