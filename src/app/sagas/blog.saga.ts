import camelcaseKeys from 'camelcase-keys';
import isUndefined from 'lodash/isUndefined';
import { put, select, takeLatest } from 'redux-saga/effects';

import { convertJsonToArrayOfObject } from '../helpers/util.helper';
import Blog from '../models/blog.model';
import { selectOptions } from '../selectors/blog.selectors';
import { getBlogList } from '../services/blog.service';
import { actions } from '../stores/blog/blog.slice';

export function* fetchBlogList$() {
  try {
    yield put(actions.setLoading(true));
    const options = yield select(selectOptions);
    const response = yield getBlogList(options);

    const { meta, documents } = camelcaseKeys(response);
    const objBlogs: Blog[] = convertJsonToArrayOfObject(
      Blog,
      camelcaseKeys(documents),
    );

    const objMeta = camelcaseKeys(meta);

    if (!isUndefined(objBlogs)) {
      yield put(actions.fetchBlogSuccess(objBlogs));
      yield put(actions.setIsEnd(objMeta.isEnd));
      yield put(actions.setTotalItem(objMeta.pageableCount));
    } else {
      yield put(actions.fetchBlogFailed());
    }
  } catch (error) {
    yield put(actions.fetchBlogFailed());
  }
}

export default function* blogSaga() {
  yield takeLatest(actions.fetchBlog.type, fetchBlogList$);
  yield takeLatest(actions.setPage.type, fetchBlogList$);
  yield takeLatest(actions.setSize.type, fetchBlogList$);
}
