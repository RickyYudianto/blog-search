import camelcaseKeys from 'camelcase-keys';
import { put, select, takeLatest } from 'redux-saga/effects';

import { convertJsonToArrayOfObject } from '../helpers/util.helper';
import Blog from '../models/blog.model';
import { selectOptions } from '../selectors/blog.selectors';
import { getBlogList } from '../services/blog.service';
import { actions } from '../stores/blog/blog.slice';

export function* fetchBlogList$() {
  try {
    const options = yield select(selectOptions);
    const response = yield getBlogList(options);

    const { meta, documents } = camelcaseKeys(response);
    const objBlogs: Blog[] = convertJsonToArrayOfObject(
      Blog,
      camelcaseKeys(documents),
    );

    yield put(actions.fetchBlogSuccess(objBlogs));
    yield put(actions.setIsEnd(meta.isEnd));
    yield put(actions.setTotalItem(meta.totalCount));
  } catch (error) {
    yield put(actions.fetchBlogFailed());
  }
}

export default function* mainCategorySaga() {
  yield takeLatest(actions.fetchBlog.type, fetchBlogList$);
  yield takeLatest(actions.setPage.type, fetchBlogList$);
  yield takeLatest(actions.setSize.type, fetchBlogList$);
}
