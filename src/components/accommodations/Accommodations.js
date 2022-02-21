import React from 'react';

import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import Heading from '../common/Heading';
import AccommodationsList from './AccommodationsList';

export default function Accommodations() {
	return (
		<>
			<Helmet>
				<title>Accommodations | Holidaze</title>
			</Helmet>
			<div className="banner__accommodations">
				<div className="banner__accommodations__content">
					<Heading size="2" content="Accommodations" />
				</div>
			</div>
			<Container className="accommodations">
				<AccommodationsList />
			</Container>
		</>
	);
}
