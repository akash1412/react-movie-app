import React from "react";

import "./sidebar.style.scss";

import { useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";

import { toggleSidebar } from "../../redux/toggle/toggleAction";

//?COMPONENTS

const sidebarRoutes = [
  {
    path: "/",
    label: "home",
  },
  {
    path: "/movies/popular/1",
    label: "popular movies",
  },
  {
    path: "/movies/top-rated/1",
    label: "top rated movies",
  },
  {
    path: "/movie/trending/1",
    label: "trending movies ",
  },

  {
    path: "/tv/popular/1",
    label: "popular tv shows",
  },
  {
    path: "/tv/top-rated/1",
    label: "top rated tv shows",
  },
  {
    path: "/tv/trending/1",
    label: "trending on tv",
  },

  {
    path: "/movie/genres",
    label: "search movie by genres",
  },
  {
    path: "/tv/genres",
    label: "search tv shows by genres",
  },
];

const ListSidebar = ({ sidebar, pageNo }) => {
  const dispatch = useDispatch();
  return (
    <div className={`sidebar ${sidebar ? "slide-in" : ""} `}>
      <div className="nav">
        <div className="close-btn-container">
          <li>
            <Link to="/" className="logo sidebar-logo">
              logo
            </Link>
          </li>
          <div className="close-btn" onClick={() => dispatch(toggleSidebar())}>
            &times;
          </div>
        </div>

        {sidebarRoutes.map(({ path, label }) => (
          <li className="nav__item">
            <Link className="nav__link" to={path}>
              {label}
            </Link>
          </li>
        ))}
      </div>

      <div className="copyright">copyright &copy; by tmdb</div>
    </div>
  );
};

const mapStateToProps = ({ toggleReducer }) => ({
  sidebar: toggleReducer.toggle,
});

export default connect(mapStateToProps)(ListSidebar);
