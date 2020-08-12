import { BlogState } from '../app/stores/blog/blog.types';
import { MiscState } from '../app/stores/misc/misc.types';

export interface RootState {
  blog?: BlogState;
  misc?: MiscState;
}
