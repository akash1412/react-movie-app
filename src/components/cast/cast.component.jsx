import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

import { Wrapper, LinkWrapper, MovieImg } from "./cast.style";

import { Loader } from "../spinner/spinner.component";

import placeholder from "../../assets/profile-image-error/man.png";

const Cast = ({ cast }) => {
	const [loaded, setLoaded] = useState(false);
	const [totalShow, setTotalShow] = useState(null);
	const sliderElement = useRef();

	const changeTotalShow = () => {
		let totalItems = Math.round(sliderElement.current.offsetWidth / 70);
		if (totalItems > cast.length) {
			totalItems = cast.length;
		}
		setTotalShow(totalItems);
	};

	useEffect(() => {
		changeTotalShow();
		window.addEventListener("resize", changeTotalShow);
		return () => window.removeEventListener("resize", changeTotalShow);
	}, []);

	const items = cast.map(cst => (
		<LinkWrapper key={cst.id} loaded={loaded ? 1 : 0}>
			<MovieImg
				src={`${process.env.REACT_APP_IMAGE_URL}${cst.profile_path}`}
				onLoad={() => setLoaded(true)}
				onError={e => (e.target.src = `${placeholder}`)}
			/>
		</LinkWrapper>
	));

	let setting = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		swipeToSlide: true,
		speed: 500,
		slidesToShow: totalShow,
		slidesToScroll: 1,
	};

	if (!cast) {
		return <Loader />;
	}

	return (
		<Wrapper ref={sliderElement}>
			<Slider {...setting}>{items}</Slider>
		</Wrapper>
	);
};

export default Cast;
