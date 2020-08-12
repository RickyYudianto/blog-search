import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import isEmpty from 'lodash/isEmpty';

import { useInjectReducer } from '../../../utils/redux-injectors';
import { BlogCard } from '../../components/BlogCard';
import { CustomPagination } from '../../components/CustomPagination';
import { NoData } from '../../components/NoData';
import {
  selectBookmarkBlogList,
  selectOptions,
  selectTotalItems,
} from '../../selectors/bookmark.selectors';
import {
  actions,
  reducer,
  sliceKey,
} from '../../stores/bookmark/bookmark.slice';

export function BookmarkPage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const { page, size } = useSelector(selectOptions);
  const totalItems = useSelector(selectTotalItems);

  const bookmarkList = useSelector(selectBookmarkBlogList);

  const dispatch = useDispatch();

  const isBookmarked = blog =>
    !isEmpty(bookmarkList.find(bookmark => bookmark.url === blog.url));
  const objBookmarkList = bookmarkList.slice(0);
  const sliceBookmarkList = objBookmarkList.slice(
    page * size - size,
    page * size,
  );

  useEffect(() => {
    if (totalItems === (page - 1) * size && page > 1) {
      dispatch(actions.setPage(page - 1));
    }
  }, [dispatch, bookmarkList, totalItems, page, size]);

  const renderBookmarkList = () => {
    if (totalItems > 0) {
      return sliceBookmarkList.map(blog => (
        <BlogCard
          key={blog.url}
          blog={blog}
          isBookmarked={isBookmarked(blog)}
          onAddToBookmark={() => dispatch(actions.addToBookmark(blog))}
          onDeleteFromBookmark={() =>
            dispatch(actions.deleteFromBookmark(blog))
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
          page={page}
          size={size}
          totalItems={totalItems}
          onPageChange={page => dispatch(actions.setPage(page))}
          onSizeChange={size => dispatch(actions.setSize(size))}
        />
      );
    }

    return null;
  };

  return (
    <>
      {renderBookmarkList()}
      {renderPagination()}
    </>
  );
}
