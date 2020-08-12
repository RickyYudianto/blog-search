import React from 'react';
import styled from 'styled-components/macro';

import { translations } from '../../../locales/i18n';

interface Props {
  intl: any;
  searchValue: string;
  onChange: (value) => void;
  onSearch: () => void;
}

export default function SearchInput(props: Props) {
  const onKeyPress = e => {
    if (e.charCode === 13) {
      props.onSearch();
    }
  };

  return (
    <>
      <div className="form-group has-search">
        <Span className="fa fa-search" />
        <Input
          type="text"
          className="form-control"
          value={props.searchValue}
          onChange={e => props.onChange(e.target.value)}
          onKeyPress={e => onKeyPress(e)}
          placeholder={translations.SEARCH}
        />
      </div>
    </>
  );
}

const Span = styled.span`
  position: absolute;
  z-index: 1;
  display: block;
  width: 2.375rem;
  height: 2.375rem;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
`;

const Input = styled.input`
  padding-left: 2.375rem;
`;
