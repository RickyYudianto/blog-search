import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import isNil from 'lodash/isNil';
import styled from 'styled-components';

import { useInjectReducer } from '../../../utils/redux-injectors';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { selectIsMenuOpen } from '../../selectors/misc.selectors';
import { actions, reducer, sliceKey } from '../../stores/misc/misc.slice';

import './style.scss';

interface Props {
  children: any;
  location: any;
  title: string;
}

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect((): any => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize, isClient]);

  return windowSize;
}

export function HomePage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const isMenuOpen = useSelector(selectIsMenuOpen);

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const screenSize = useWindowSize();

  const onToggleSidebar = () => dispatch(actions.toggleMenu());

  const isMobile =
    screenSize.width && !isNil(screenSize.width)
      ? screenSize.width < 768
      : false;

  useEffect(() => {
    if (!isMobile) {
      dispatch(actions.toggleMenu(false));
    }
  }, [dispatch, isMobile]);

  return (
    <>
      <Container>
        <Header onToggleSidebar={() => onToggleSidebar()} />
        <Sidebar
          isMenuOpen={isMenuOpen}
          isMobile={isMobile}
          currentPath={props.location.pathname}
          onToggleSidebar={() => onToggleSidebar()}
        />
        <main role="main" className="col-md-10 ml-sm-auto px-4">
          <H1 className="page-title">{t(props.title)}</H1>
          {props.children}
        </main>
        <Footer />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 1005;
`;

const H1 = styled.h1`
  margin-bottom: 20px;
`;
