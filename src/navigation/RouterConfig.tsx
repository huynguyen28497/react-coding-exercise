import React from 'react';
import AboutPage from 'pages/about/AboutPage';
import HomePage from 'pages/home/HomePage';
import { Switch, Route } from 'react-router-dom';
import { ABOUT_PATH, ROOT } from './CONSTANT';
import NotFound from 'pages/error/NotFound';

interface Props {}

const RouterConfig = (props: Props) => {
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={HomePage} />
        <Route exact path={ABOUT_PATH} component={AboutPage} />

        {/* List all private/auth routes here */}

        {/* List a generic 404-Not Found route here */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default RouterConfig;
