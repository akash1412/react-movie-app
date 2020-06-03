import React, { useEffect } from "react";
import "./App.scss";

import { connect, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";

//?ACTIONS
import { fetchPopularMoviesStartAsync } from "./redux/movies/popular/popular.action";

//?COMPONENTS
import Header from "./components/header/header.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Backdrop from "./components/backdrop/backdrop.component";
//?PAGES
import HomePage from "./pages/homepage/homepage.component";
import SignUpSignInPage from "./pages/sign-up-and-sign-in-page/sign-up-and-sign-in-page.component";
import MoviesPage from "./pages/moviespage/moviespage.component";

function App({ toggle }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMoviesStartAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />

      {toggle ? <Sidebar /> : null}
      <div className="nav-pusher">
        <div className="main-content">
          {toggle ? <Backdrop /> : null}
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:type" component={MoviesPage} />
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
