import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components/macro';

import { translations, LanguageKey } from '../../../locales/i18n';
import { FormLabel } from '../../components/FormLabel';
import { Radio } from '../../components/Radio';

export function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value as LanguageKey;
    i18n.changeLanguage(language);
  };

  console.log(i18n.language);

  return (
    <Wrapper>
      <Languages>
        <Radio
          id="en"
          label={t(translations.ENGLISH)}
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="en"
          isSelected={i18n.language === 'en'}
        />
        <Radio
          id="ko"
          label={t(translations.KOREA)}
          className="radio"
          name="language"
          onChange={handleLanguageChange}
          value="ko"
          isSelected={i18n.language === 'ko'}
        />
      </Languages>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${FormLabel} {
    margin-bottom: 0.625rem;
  }
  align-items: flex-end;
  padding: 0.625rem 0;
`;
const Languages = styled.div`
  display: flex;
  .radio {
    margin-right: 1.5rem;
  }
`;
