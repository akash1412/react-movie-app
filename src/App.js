import React from "react";
import "./App.scss";

import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

//?COMPONENTS
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Backdrop from "./components/backdrop/backdrop.component";
//?PAGES
import HomePage from "./pages/homepage/homepage.component";
import SignUpSignInPage from "./pages/sign-up-and-sign-in-page/sign-up-and-sign-in-page.component";
import MoviesCategoryPage from "./pages/movies/movies-category-page.component";
import TvCategoryPage from "./pages/tv/tv-category-page.component";

function App({ toggle }) {
  return (
    <div className="App">
      <Header />

      {toggle ? <Sidebar /> : null}
      <div className="nav-pusher">
        <div className="main-content">
          {toggle ? <Backdrop /> : null}
          <Switch>
            {/* <Route exact path="/:pageno" component={HomePage} /> */}
            <Route exact path="/movies" component={MoviesCategoryPage} />
            <Route path="/tv" component={TvCategoryPage} />
            <Route path="/signin" component={SignUpSignInPage} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ toggleReducer }) => ({
  toggle: toggleReducer.toggle,
});

export default connect(mapStateToProps)(App);
