/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { translations } from '../locales/i18n';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { PathConstant } from './constants/path.constant';
import { BlogPage } from './containers/BlogPage/Loadable';
import { BookmarkPage } from './containers/BookmarkPage/Loadable';
import { HomePage } from './containers/HomePage/Loadable';

export function App() {
  return (
    <Router>
      <Helmet titleTemplate="Blog Finder" defaultTitle="Blog Finder">
        <meta name="description" content="Project Assignment Blog Finder" />
      </Helmet>

      <Switch>
        <Route
          exact
          path={PathConstant.ROOT}
          render={props => (
            <HomePage {...props} title={translations.BLOG}>
              <BlogPage />
            </HomePage>
          )}
        />
        <Route
          exact
          path={PathConstant.BLOG}
          render={props => (
            <HomePage {...props} title={translations.BLOG}>
              <BlogPage />
            </HomePage>
          )}
        />
        <Route
          exact
          path={PathConstant.BOOKMARK}
          render={props => (
            <HomePage {...props} title={translations.BOOKMARK}>
              <BookmarkPage />
            </HomePage>
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}
