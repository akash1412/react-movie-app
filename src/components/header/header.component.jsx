import React from "react";
import "./header.styles.scss";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//?ACTIONS
import { toggleSidebar } from "../../redux/toggle/toggleAction";

//?COMPONENTS
import { ReactComponent as MenuIcon } from "../../assets/hamburger-icon/menu.svg";
import SearchBar from "../searchbar/searchbar.component";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="menu-logo-container">
        <span onClick={() => dispatch(toggleSidebar())}>
          <MenuIcon className="menu" />
        </span>

        <div className="logo">Logo </div>
      </div>

      <div className="header__controls-container ">
        <SearchBar />
        <Link to="signin">sign in</Link>
        <span className="header__dark-mode"> Dark mode </span>
      </div>
    </div>
  );
};

export default Header;
