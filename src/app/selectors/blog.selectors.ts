import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '../stores/blog/blog.slice';

const selectDomain = (state: RootState) => state.blog || initialState;

export const selectBlogList = createSelector(
  [selectDomain],
  blogState => blogState.blogs,
);

export const selectIsEnd = createSelector(
  [selectDomain],
  blogState => blogState.isEnd,
);

export const selectLoading = createSelector(
  [selectDomain],
  blogState => blogState.loading,
);

export const selectOptions = createSelector(
  [selectDomain],
  blogState => blogState.options,
);

export const selectTotalItems = createSelector(
  [selectDomain],
  blogState => blogState.totalItems,
);
