import React from 'react';
import * as Icon from 'react-feather';

import { translations } from '../../../locales/i18n';
import { PathConstant } from '../../constants/path.constant';

export class MenuConfigData {
  public static readonly MENU_LIST = [
    {
      icon: <Icon.FileText className="feather" size={16} />,
      link: `#${PathConstant.BLOG}`,
      title: translations.BLOG,
    },
    {
      icon: <Icon.Bookmark className="feather" size={16} />,
      link: `#${PathConstant.BOOKMARK}`,
      title: translations.BOOKMARK,
    },
  ];
}
