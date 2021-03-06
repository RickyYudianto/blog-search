import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import debounce from 'lodash/debounce';
import styled from 'styled-components/macro';

import { translations } from '../../../locales/i18n';

interface Props {
  searchValue: string;
  onChange: (value) => void;
  onSearch: () => void;
}

export function SearchInput(props: Props) {
  const { t } = useTranslation();

  const debounceSearch = useRef(debounce(() => props.onSearch(), 500)).current;
  const onChange = e => {
    props.onChange(e.target.value);
    debounceSearch();
  };

  return (
    <>
      <div className="form-group has-search">
        <Icon icon={faSearch} />
        <Input
          type="text"
          className="form-control"
          value={props.searchValue}
          onChange={e => onChange(e)}
          placeholder={t(translations.SEARCH)}
        />
      </div>
    </>
  );
}

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  z-index: 1;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
  margin: 0.05rem 0.75rem;
`;

const Input = styled.input`
  padding-left: 2.375rem !important;
`;
