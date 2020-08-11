import React from 'react';

import styled from 'styled-components/macro';

import { LanguageSwitch } from '../../containers/LanguageSwitch';

export function Footer() {
  return (
    <Wrapper className="flex-container">
      <LanguageSwitch />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 48px;
  width: 100%;
  bottom: 0;
  position: absolute;
  text-align: center;

  background: #ffffff;
  background-color: #343a40;

  justify-content: space-between !important;
`;
