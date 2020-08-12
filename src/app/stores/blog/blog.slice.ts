import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '../../../utils/@reduxjs/toolkit';
import { SettingConstant } from '../../constants/setting.constant';
import { ContainerState } from './blog.types';
import Blog from '../../models/blog.model';

export const initialState: ContainerState = {
  blogs: [],
  isEnd: false,
  loading: false,
  options: {
    page: 1,
    query: '',
    size: 10,
  },
  totalItems: 0,
};

const blogSlice = createSlice({
  name: SettingConstant.SLICE_BLOG_KEY,
  initialState,
  reducers: {
    setIsEnd(state, action: PayloadAction<boolean>) {
      state.isEnd = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.options.page = action.payload > 50 ? 50 : action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.options.query = action.payload;
    },
    setSize(state, action: PayloadAction<number>) {
      state.options.size = action.payload;
      state.options.page = 1;
    },
    setTotalItem(state, action: PayloadAction<number>) {
      state.totalItems = action.payload;
    },
    fetchBlog(state) {
      state.loading = true;
    },
    fetchBlogSuccess(state, action: PayloadAction<Blog[]>) {
      state.blogs = action.payload;
      state.loading = false;
    },
    fetchBlogFailed(state) {
      state.blogs = [];
      state.isEnd = false;
      state.loading = false;
      state.options.page = 1;
      state.totalItems = 0;
    },
    resetState(state) {
      state = initialState;
    },
  },
});

export const { actions, reducer, name: sliceKey } = blogSlice;
