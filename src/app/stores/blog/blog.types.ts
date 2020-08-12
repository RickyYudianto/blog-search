import Blog from '../../models/blog.model';

export interface BlogState {
  blogs: Blog[];
  isEnd: boolean;
  loading: boolean;
  options: {
    page: number;
    query: string;
    size: number;
  };
  totalItems: number;
}

export type ContainerState = BlogState;
