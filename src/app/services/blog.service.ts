import { EndpointConstant } from '../constants/endpoint.constant';
import * as apiHelper from '../helpers/api.helper';

export function getBlogList(options: any = {}) {
  return apiHelper.getRequest(
    EndpointConstant.BASE_SEARCH_BLOG_API_URL,
    options,
  );
}
