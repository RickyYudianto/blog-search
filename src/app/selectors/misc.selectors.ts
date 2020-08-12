import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '../stores/misc/misc.slice';

const selectDomain = (state: RootState) => state.misc || initialState;

export const selectIsMenuOpen = createSelector(
  [selectDomain],
  miscState => miscState.isMenuOpen,
);
