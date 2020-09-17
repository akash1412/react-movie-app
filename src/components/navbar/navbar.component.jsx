import React from 'react';

import { NavContainer, Menu } from './navbar.styles';

import { useDispatch } from 'react-redux';

//?ACTIONS
import { toggleSidebar } from '../../redux/toggle/toggleAction';

//?COMPONENTS
import SearchBar from '../searchbar/searchbar.component';

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <NavContainer>
      <SearchBar />
      <Menu onClick={() => dispatch(toggleSidebar())} />
    </NavContainer>
  );
};

export default NavBar;
