import React from 'react';
import { useTranslation } from 'react-i18next';

import { Empty } from 'antd';

import { translations } from '../../../locales/i18n';

import './style.scss';

export function NoData() {
  const { t } = useTranslation();

  return <Empty description={t(translations.NO_DATA)} />;
}
