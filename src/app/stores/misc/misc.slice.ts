import { createSlice } from '../../../utils/@reduxjs/toolkit';
import { SettingConstant } from '../../constants/setting.constant';
import { ContainerState } from './misc.types';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: ContainerState = {
  isMenuOpen: false,
};

const miscSlice = createSlice({
  name: SettingConstant.SLICE_MISC_KEY,
  initialState,
  reducers: {
    toggleMenu(state, actions: PayloadAction<boolean | undefined>) {
      if (actions.payload !== undefined) {
        state.isMenuOpen = actions.payload;
      } else {
        state.isMenuOpen = !state.isMenuOpen;
      }
    },
  },
});

export const { actions, reducer, name: sliceKey } = miscSlice;
