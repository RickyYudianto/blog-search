import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from '../../../locales/i18n';

import './style.scss';

export interface Props {
  icon: any;
  isActive: boolean;
  link: string;
  title: string;
}

export function Menu(props: Props) {
  const { t } = useTranslation();

  const current = props.isActive ? (
    <span className="sr-only">
      ({t(translations.CURRENT)})
    </span>
  ) : null;

  const activeClass = props.isActive ? 'active' : '';

  return (
    <li className="nav-item">
      <a className={`nav-link ${activeClass}`} href={props.link}>
        {props.icon}
        {t(props.title)} {current}
      </a>
    </li>
  );
}
