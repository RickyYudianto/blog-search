import { BlogState } from '../app/stores/blog/blog.types';
import { BookmarkState } from '../app/stores/bookmark/bookmark.types';
import { MiscState } from '../app/stores/misc/misc.types';

export interface RootState {
  blog?: BlogState;
  bookmark?: BookmarkState;
  misc?: MiscState;
}
