import { lazyLoad } from 'utils/loadable';

export const BookmarkPage = lazyLoad(
  () => import('./index'),
  module => module.BookmarkPage,
);
