import React from 'react';
import * as Icon from 'react-feather';
import { useTranslation } from 'react-i18next';

import { translations } from '../../../locales/i18n';
import { PathConstant } from '../../constants/path.constant';

import './style.scss';

export interface Props {
  onToggleSidebar: () => void;
}

export function Header(props: Props) {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <div className="navbar-brand-wrapper col-md-2 col-12 mr-0">
        <Icon.Menu
          className="col-md-3 col-2 navbar-menu-toggle"
          size={16}
          onClick={() => props.onToggleSidebar()}
        />
        <a
          className="navbar-brand col-md-7 col-10"
          href={`#${PathConstant.ROOT}`}
        >
          {t(translations.BLOG_FINDER)}
        </a>
      </div>
    </nav>
  );
}
