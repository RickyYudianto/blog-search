import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useTranslation } from 'react-i18next';
import Pagination from 'react-js-pagination';

import styled from 'styled-components';

import { translations } from '../../../locales/i18n';

import './style.scss';

interface Props {
  isEnd?: boolean;
  page: number;
  size: number;
  totalItems: number;

  onPageChange: (page) => void;
  onSizeChange: (size) => void;
}

export function CustomPagination(props: Props) {
  const { t } = useTranslation();

  const lastPageItemIndex =
    props.page * props.size > props.totalItems
      ? props.totalItems
      : props.page * props.size;
  return (
    <>
      <Container className="flex-container col-12 p-0 space-between">
        <Wrapper className="flex-container col-md-8 col-12 p-0">
          <SizeContainer id="dropdown-item-button" title={props.size}>
            <Dropdown.Item onClick={() => props.onSizeChange(10)}>
              10
            </Dropdown.Item>
            <Dropdown.Item onClick={() => props.onSizeChange(25)}>
              25
            </Dropdown.Item>
            <Dropdown.Item onClick={() => props.onSizeChange(50)}>
              50
            </Dropdown.Item>
          </SizeContainer>
          <Span>
            {t(translations.PAGINATION_DESCRIPTION, {
              firstIndex: (props.page - 1) * props.size + 1,
              lastIndex: lastPageItemIndex,
              totalItems: props.totalItems,
            })}
          </Span>
        </Wrapper>
        <Pagination
          itemClass="page-item"
          linkClass="page-link"
          activePage={props.page}
          itemsCountPerPage={props.size}
          totalItemsCount={props.totalItems}
          pageRangeDisplayed={5}
          onChange={props.onPageChange}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  justify-content: flex-start !important;
`;

const SizeContainer = styled(DropdownButton)`
  margin-bottom: 1rem;
`;

const Span = styled.span`
  font-size: 0.85rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
`;
