import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import {
	Wrapper,
	Logo,
	GenreLogo,
	List,
	RouteLink,
	ListItem,
	Title,
} from './sidebar.style';

import { connect } from 'react-redux';

import { genres } from '../../utils/utils';

const Sidebar = ({ toggle }) => {
	const params = useParams();
	const location = useLocation();

	// console.log(history, location);
	// const [active, setActive] = React.useState('');
	// React.useState(() => {
	//   const activeUrl = location.pathname.split('/')[1];
	//   setActive(activeUrl);
	// }, [location.pathname]);

	let current;
	if (location.pathname.includes('genre')) {
		current = location.pathname.split('/')[2];
		console.log(current);
	} else {
		current = location.pathname.split('/')[1];
	}

	const [active, setActive] = React.useState(current);

	return (
		<Wrapper toggle={toggle}>
			<Logo />
			<Title>Discover</Title>
			<List>
				<ListItem
					active={active}
					listName='bookmarks'
					onClick={() => setActive('bookmarks')}>
					<RouteLink to='/bookmarks' active={active} listName='bookmarks'>
						bookmarks
					</RouteLink>
				</ListItem>
				<ListItem
					active={active}
					listName='upcoming'
					onClick={() => setActive('upcoming')}>
					<RouteLink to='/upcoming' active={active} listName='upcoming'>
						upcoming
					</RouteLink>
				</ListItem>
				<ListItem
					active={active}
					listName='popular'
					onClick={() => setActive('popular')}>
					<RouteLink to='/popular' active={active} listName='popular'>
						popular
					</RouteLink>
				</ListItem>
				<ListItem
					active={active}
					listName='top-rated'
					onClick={() => setActive('top-rated')}>
					<RouteLink to='/top-rated' active={active} listName='top-rated'>
						top rated
					</RouteLink>
				</ListItem>
			</List>

			<Title>Genre</Title>
			<List>
				{genres.map(({ path, name }, idx) => (
					<ListItem
						key={idx}
						active={active}
						listName={name}
						onClick={() => setActive(name)}>
						<GenreLogo active={active} listName={name} />
						<RouteLink to={path} active={active} listName={name}>
							{name}
						</RouteLink>
					</ListItem>
				))}
			</List>
		</Wrapper>
	);
};

const mapStateToProps = ({ toggleReducer }) => ({
	toggle: toggleReducer.toggle,
});

export default connect(mapStateToProps)(Sidebar);
