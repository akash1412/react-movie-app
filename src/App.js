import React from 'react';

import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Theme from './theme.provider';
import GlobalStyle from './global-styles';

import { MainWrapper, Main } from './app.style.jsx';

import Navbar from './components/navbar/navbar.component';
import Sidebar from './components/sidebar/sidebar.component';
import BackDrop from './components/backdrop/backdrop.component';
import ErrorUI from './components/error-ui/error-ui.component';

import Upcoming from './pages/upcoming/upcoming.component';
import TopRated from './pages/top-rated/top-rated.component';
import Popular from './pages/popular/popular.component';
import DetailsPage from './pages/details-page/details-page.component';
import Genre from './pages/genre/genre.component';
import SearchPage from './pages/search/search.component';
import BookMarkContextProvider from './context/bookmarks.context';
import BookMarks from './pages/Bookmarks/Bookmarks.component';

function App({ toggle }) {
	return (
		<Theme>
			<GlobalStyle />
			<BookMarkContextProvider>
				<Navbar />
				<MainWrapper>
					{toggle ? <BackDrop /> : null}

					<Sidebar />

					<Main>
						<Switch>
							<Redirect exact from='/' to='/upcoming' />
							<Route path='/upcoming' component={Upcoming} />

							<Route exact path='/top-rated' component={TopRated} />
							<Route exact path='/popular' component={Popular} />
							<Route exact path='/movie/:id' component={DetailsPage} />
							<Route exact path='/genre/:genre' component={Genre} />
							<Route path='/search' component={SearchPage} />
							<Route path='/bookmarks' component={BookMarks} />
							<Route path='*' component={ErrorUI} />
						</Switch>
					</Main>
				</MainWrapper>
			</BookMarkContextProvider>
		</Theme>
	);
}

const mapStateToProps = ({ toggleReducer }) => ({
	toggle: toggleReducer.toggle,
});

export default connect(mapStateToProps)(App);
