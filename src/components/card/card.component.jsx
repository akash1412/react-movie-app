import React, { useState } from 'react';
import {
	CardContainer,
	CardImg,
	CardTitle,
	Details,
	ImageLoadWrapper,
} from './card.style';

import BlankCanvas from '../../assets/image-error/blank_canvas.svg';
import { Loader } from '../spinner/spinner.component';

import { withRouter } from 'react-router-dom';
import { useBookMarkContext } from './../../context/bookmarks.context';

import bookMarkIcon from '../../assets/bookmark/bookmark.svg';

export const textTrimFunc = title => {
	let newTitle;
	if (title.length > 20) {
		newTitle = title.substring(0, 20);
		return `${newTitle} ...`;
	}

	return title;
};

const Card = ({ id, title, src, history }) => {
	const [loaded, setLoaded] = useState(false);

	const { addMovieToBookmarks } = useBookMarkContext();

	const handleCardClick = () => {
		history.push(`/movie/${id}`);
	};

	const handleAddToBookMarksAction = data => {
		if (window.confirm('Confirm to add Movie to Bookmark.')) {
			addMovieToBookmarks(data);
		}
	};

	return (
		<CardContainer
			animate={{ scale: 1 }}
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.4 }}>
			{!loaded ? (
				<ImageLoadWrapper>
					<Loader />
				</ImageLoadWrapper>
			) : null}

			<button
				className='bookmark-btn'
				onClick={() =>
					handleAddToBookMarksAction({
						id,
						title,
						src,
					})
				}>
				<img src={bookMarkIcon} />
			</button>

			<CardImg
				onClick={() => handleCardClick()}
				style={!loaded ? { display: 'none' } : {}}
				src={`${process.env.REACT_APP_IMAGE_URL}${src}`}
				onLoad={() => setLoaded(true)}
				onError={e => {
					e.target.src = `${BlankCanvas}`;
				}}
			/>

			<Details>
				<CardTitle onClick={() => handleCardClick()}>
					{textTrimFunc(title)}
				</CardTitle>
			</Details>
		</CardContainer>
	);
};

export default withRouter(Card);
