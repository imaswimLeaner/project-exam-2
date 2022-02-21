import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Heading from '../common/Heading';
import SearchBar from './search/SearchBar';
import Images from './content/Images';

export default function Home() {
	return (
		<>
			<div className="hero-banner">
				<div className="hero-banner__content">
					<div className="hero-banner__content__text">
						<Heading size="2" content="Bergen, Norway" />
						<i className="icon fas fa-map-marked-alt"></i>
					</div>
					<SearchBar />
				</div>
				<a href="#home">
					<div id="home" className="arrow"></div>
				</a>
			</div>
			<Container className="home">
				<div className="home__text">
					<Heading size="1" content="Welcome to Bergen" />
					<Heading size="2" content="The gateway to the fjords of Norway" />
					<p>
						Experience the ideal combination of nature, culture, and exciting
						urban life
					</p>
				</div>
				<Images />
				<Link to="/accommodations" className="home__button">
					View all accommodations{' '}
					<i className="fas fa-chevron-right home__button__icon"></i>
				</Link>
			</Container>
		</>
	);
}
