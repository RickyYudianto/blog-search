import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import isEmpty from 'lodash/isEmpty';

import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';
import { BlogCard } from '../../components/BlogCard';
import { CustomPagination } from '../../components/CustomPagination';
import { NoData } from '../../components/NoData';
import { SearchInput } from '../../components/SearchInput';
import blogSaga from '../../sagas/blog.saga';
import {
  selectBlogList,
  selectIsEnd,
  selectOptions,
  selectTotalItems,
} from '../../selectors/blog.selectors';
import { selectBookmarkBlogList } from '../../selectors/bookmark.selectors';
import {
  actions as blogActions,
  reducer as blogReducer,
  sliceKey as blogSliceKey,
} from '../../stores/blog/blog.slice';
import {
  actions as bookmarkActions,
  reducer as bookmarkReducer,
  sliceKey as bookmarkSliceKey,
} from '../../stores/bookmark/bookmark.slice';

export function BlogPage() {
  useInjectReducer({ key: blogSliceKey, reducer: blogReducer });
  useInjectReducer({ key: bookmarkSliceKey, reducer: bookmarkReducer });
  useInjectSaga({ key: blogSliceKey, saga: blogSaga });

  const blogList = useSelector(selectBlogList);
  const isEnd = useSelector(selectIsEnd);
  const { page, query, size } = useSelector(selectOptions);
  const totalItems = useSelector(selectTotalItems);

  const bookmarkList = useSelector(selectBookmarkBlogList);

  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };
  useEffectOnMount(() => {
    dispatch(blogActions.fetchBlog());
  });

  const isBookmarked = blog =>
    !isEmpty(bookmarkList.find(bookmark => bookmark.url === blog.url));

  const renderBlogList = () => {
    if (totalItems > 0) {
      return blogList.map(blog => (
        <BlogCard
          key={blog.url}
          blog={blog}
          isBookmarked={isBookmarked(blog)}
          onAddToBookmark={() => dispatch(bookmarkActions.addToBookmark(blog))}
          onDeleteFromBookmark={() =>
            dispatch(bookmarkActions.deleteFromBookmark(blog))
          }
        />
      ));
    }

    return <NoData />;
  };

  const renderPagination = () => {
    if (totalItems > 0) {
      return (
        <CustomPagination
          isEnd={isEnd}
          page={page}
          size={size}
          totalItems={totalItems}
          onPageChange={page => dispatch(blogActions.setPage(page))}
          onSizeChange={size => dispatch(blogActions.setSize(size))}
          isLimitation
        />
      );
    }

    return null;
  };

  return (
    <>
      <SearchInput
        searchValue={query}
        onChange={value => dispatch(blogActions.setQuery(value))}
        onSearch={() => dispatch(blogActions.setPage(1))}
      />
      {renderBlogList()}
      {renderPagination()}
    </>
  );
}
