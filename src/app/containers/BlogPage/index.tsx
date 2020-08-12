import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';
import { BlogCard } from '../../components/BlogCard';
import { CustomPagination } from '../../components/CustomPagination';
import { SearchInput } from '../../components/SearchInput';
import blogSaga from '../../sagas/blog.saga';
import {
  selectBlogList,
  selectIsEnd,
  selectOptions,
  selectTotalItem,
} from '../../selectors/blog.selectors';
import { actions, reducer, sliceKey } from '../../stores/blog/blog.slice';

import './style.scss';

export function BlogPage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: blogSaga });

  const blogList = useSelector(selectBlogList);
  const isEnd = useSelector(selectIsEnd);
  const { page, query, size } = useSelector(selectOptions);
  const totalItem = useSelector(selectTotalItem);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };
  useEffectOnMount(() => {
    dispatch(actions.fetchBlog());
  });

  const renderBlogList = () => {
    return blogList.map(blog => (
      <BlogCard
        key={blog.url}
        blog={blog}
        onBookmark={value => console.log(value)}
      />
    ));
  };

  return (
    <>
      <SearchInput
        searchValue={query}
        onChange={value => dispatch(actions.setQuery(value))}
        onSearch={() => dispatch(actions.setPage(1))}
      />
      {renderBlogList()}
      <CustomPagination
        isEnd={isEnd}
        page={page}
        size={size}
        totalItems={totalItem}
        onPageChange={page => dispatch(actions.setPage(page))}
        onSizeChange={size => dispatch(actions.setSize(size))}
      />
    </>
  );
}
