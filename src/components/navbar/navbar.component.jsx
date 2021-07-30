import React from 'react';
import styled from 'styled-components';
import { NavContainer, Menu } from './navbar.styles';

import { useDispatch } from 'react-redux';

//?ACTIONS
import { toggleSidebar } from '../../redux/toggle/toggleAction';

import { ReactComponent as Logo } from '../../assets/logo/undraw_movie_night_fldd.svg';
//?COMPONENTS
import SearchBar from '../searchbar/searchbar.component';

const NavBar = () => {
	const dispatch = useDispatch();

	return (
		<NavContainer>
			<SmallScreenLogoWrapper>
				<Logo style={{ width: '5rem', height: '5rem' }} />
				<h1 className='title'>WatchFlix</h1>
			</SmallScreenLogoWrapper>

			<SearchBar />
			<Menu onClick={() => dispatch(toggleSidebar())} />
		</NavContainer>
	);
};

export default NavBar;

const SmallScreenLogoWrapper = styled.div`
	display: none;
	margin-right: auto;
	align-items: center;

	.title {
		margin-left: 2rem;
		color: #fff;
	}

	@media (max-width: 1200px) {
		display: flex;
	}
`;
