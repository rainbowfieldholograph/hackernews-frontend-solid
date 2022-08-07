import { createSignal } from 'solid-js';
import type { StoryCategories } from '../api';

export const [currentPage, setCurrentPage] = createSignal(1);
export const [currentCategory, setCurrentCategory] = createSignal<StoryCategories>('news');
