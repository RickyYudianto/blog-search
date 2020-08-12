import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '../stores/bookmark/bookmark.slice';

const selectDomain = (state: RootState) => state.bookmark || initialState;

export const selectBookmarkBlogList = createSelector(
  [selectDomain],
  bookmarkState => bookmarkState.blogs,
);

export const selectOptions = createSelector(
  [selectDomain],
  bookmarkState => bookmarkState.options,
);

export const selectTotalItem = createSelector(
  [selectDomain],
  bookmarkState => bookmarkState.totalItems,
);
