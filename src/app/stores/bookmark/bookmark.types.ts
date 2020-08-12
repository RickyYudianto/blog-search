import Blog from '../../models/blog.model';

export interface BookmarkState {
  blogs: Blog[];
  options: {
    page: number;
    size: number;
  };
  totalItems: number;
}

export type ContainerState = BookmarkState;
