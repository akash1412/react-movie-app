import React from "react";

import "./sidebar.style.scss";

import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";

import { toggleSidebar } from "../../redux/toggle/toggleAction";

//?COMPONENTS

const ListSidebar = ({ sidebar }) => {
  const dispatch = useDispatch();
  return (
    <div className={`sidebar ${sidebar ? "slide-in" : ""} `}>
      <div className="nav">
        <div className="nav__link close-btn-container">
          <Link to="/" className="logo sidebar-logo">
            Logo
          </Link>
          <div className="close-btn" onClick={() => dispatch(toggleSidebar())}>
            &times;
          </div>
        </div>

        <li className="nav__item">
          <Link className="nav__link" to="/movies/now-playing">
            now playing
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/movies/popular">
            popular movies
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/movies/top-rated">
            top rated movies
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/movies/upcoming">
            upcoming movies
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/movies/top-movies">
            not working
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/movies/top-rated">
            top movies
          </Link>
        </li>
      </div>

      <div className="copyright">copyright &copy; by tmdb</div>
    </div>
  );
};

const mapStateToProps = ({ toggleReducer }) => ({
  sidebar: toggleReducer.toggle,
});

export default connect(mapStateToProps)(ListSidebar);
