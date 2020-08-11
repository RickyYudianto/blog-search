import React from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { getBlogList } from '../../services/blog.service';

import './style.scss';

interface Props {
  children: any;
  location: any;
  title: string;
}

export function HomePage(props: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Header onToggleSidebar={() => console.log('hehe')} />
        {/*<Sidebar*/}
        {/*  isMenuOpen={isMenuOpen}*/}
        {/*  isMobile={isMobile}*/}
        {/*  currentPath={props.location.pathname}*/}
        {/*  onToggleSidebar={() => onToggleSidebar()} />*/}
        <main role="main" className="col-md-10 ml-sm-auto px-4">
          <H1 className="page-title">{t(props.title)}</H1>
          {props.children}
        </main>
        <Footer />
      </Container>
      {console.log(getBlogList({ query: 'asu', size: 50 }))}
    </>
  );
}

const Container = styled.div`
  height: 1005;
`;

const H1 = styled.h1`
  margin-bottom: 20px;
`;
