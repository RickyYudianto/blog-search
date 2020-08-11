import * as querystring from 'querystring';

import { request } from '../../utils/request';
import { SettingConstant } from '../constants/setting.constant';

export function getRequest(url: string, params: any = null) {
  let endpointUrl = `${url}`;

  if (params !== null) {
    const queryParams = querystring.stringify(params);
    endpointUrl = `${endpointUrl}?${queryParams}`;
  }

  return request(endpointUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `KakaoAK ${SettingConstant.REST_API_KEY}`,
    },
  });
}
