import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '../../../utils/@reduxjs/toolkit';
import { SettingConstant } from '../../constants/setting.constant';
import { ContainerState } from './bookmark.types';
import Blog from '../../models/blog.model';

export const initialState: ContainerState = {
  blogs: [],
  options: {
    page: 1,
    size: 10,
  },
  totalItems: 0,
};

const bookmarkSlice = createSlice({
  name: SettingConstant.SLICE_BOOKMARK_KEY,
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.options.page = action.payload;
    },
    setSize(state, action: PayloadAction<number>) {
      state.options.size = action.payload;
      state.options.page = 1;
    },
    setTotalItem(state, action: PayloadAction<number>) {
      state.totalItems = action.payload;
    },
    addToBookmark(state, action: PayloadAction<Blog>) {
      state.blogs.push(action.payload);
      state.totalItems = state.blogs.length;
    },
    deleteFromBookmark(state, action: PayloadAction<Blog>) {
      state.blogs = state.blogs.filter(blog => blog.url !== action.payload.url);
      state.totalItems = state.blogs.length;
    },
    resetState(state) {
      state = initialState;
    },
  },
});

export const { actions, reducer, name: sliceKey } = bookmarkSlice;
