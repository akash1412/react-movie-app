import React, { useState, useEffect, createContext, useContext } from 'react';
import { DB } from '../firebase/firebase.config';

const bookmarkContext = createContext({
	openBookMarkModal: false,
	toggleBookMarkModal: () => {},
});

export const useBookMarkContext = () => useContext(bookmarkContext);

const BookMarkContextProvider = ({ children }) => {
	const [openBookMarkModal, setBookMarkModalOpen] = useState(false);

	const [bookmarkedMovies, setBookMarkedMovies] = useState([]);

	useEffect(() => {
		(async () => {
			await DB.collection('savedmovies').onSnapshot(snap => {
				let savedDocs = [];
				snap.forEach(doc => {
					savedDocs.push({ docID: doc.id, ...doc.data() });
				});

				setBookMarkedMovies(savedDocs);
			});
		})();
	}, []);

	const toggleBookMarkModal = () => {
		setBookMarkModalOpen(prevState => !prevState);
	};

	const addMovieToBookmarks = movie => {
		DB.collection('savedmovies').doc().set(movie);
	};

	const removeMovieFromBookMarks = id => {
		DB.collection('savedmovies').doc(id).delete();
	};

	return (
		<bookmarkContext.Provider
			value={{
				openBookMarkModal,
				toggleBookMarkModal,
				bookmarkedMovies,
				addMovieToBookmarks,
				removeMovieFromBookMarks,
			}}>
			{children}
		</bookmarkContext.Provider>
	);
};

export default BookMarkContextProvider;
