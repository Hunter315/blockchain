import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import React from 'react';

import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from '../pages/Home'
import routes from "./config";
import GlobalStyles from "../globalStyles";
import Blocks from "../pages/Blocks";
const LoadingMessage = () => (
  "I'm loading..."
)


let home = lazy(() => import(Home));
let blocks = lazy(() => import(Blocks));


const Router = () => {
  return (
    <Suspense fallback={<LoadingMessage />}>
      <GlobalStyles />
      <Header />
      <Switch>

        <Route
          key={'Home'}
          path={"/"}
          exact={true}
          component={Home}
        />

        <Route
          key={'Blocks'}
          path={"/Blocks"}
          exact={false}
          component={Blocks}
        />







      </Switch>
      {/* <Footer /> */}
    </Suspense>
  );
};

export default Router;
