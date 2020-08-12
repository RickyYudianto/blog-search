import { createSlice } from '../../../utils/@reduxjs/toolkit';
import { SettingConstant } from '../../constants/setting.constant';
import { ContainerState } from './misc.types';

export const initialState: ContainerState = {
  isMenuOpen: false,
};

const miscSlice = createSlice({
  name: SettingConstant.SLICE_MISC_KEY,
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { actions, reducer, name: sliceKey } = miscSlice;
