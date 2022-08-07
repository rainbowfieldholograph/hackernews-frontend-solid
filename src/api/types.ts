export interface Comment {
  id: string;
  user: string;
  time_ago: string;
  content: string;
  comments: Comment[];
}

export interface Story {
  id: string;
  points: string;
  url: string;
  title: string;
  domain?: string;
  type: string;
  time_ago: string;
  user: string;
  comments_count: number;
  comments: Comment[];
}

export const storyCategories = ['news', 'newest', 'show', 'ask', 'jobs'] as const;

export type StoryCategories = typeof storyCategories[number];
