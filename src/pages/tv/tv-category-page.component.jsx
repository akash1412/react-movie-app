import React from "react";
import "./tv-category-page.style.scss";

import { Switch, Route, Redirect } from "react-router-dom";

//?pages
import TopRated from "./top-rated/top-rated.component";
import Popular from "./popular/popular.component";
import Latest from "./latest/latest.component";

const TvCategoryPage = ({ match: { url } }) => {
  return (
    <div className="tv-page">
      <Switch>
        <Route exact path={`${url}/popular/:page`} component={Popular} />
        <Route path={`${url}/top-rated/:page`} component={TopRated} />
        <Route path={`${url}/latest`} component={Latest} />
      </Switch>
    </div>
  );
};

export default TvCategoryPage;
