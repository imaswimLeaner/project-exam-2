import React from 'react';

import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Heading from '../../../common/Heading';
import AddEstab from './AddEstab';

export default function AddPage() {
	return (
		<>
			<Helmet>
				<title>Admin - Add Establishment | Holidaze</title>
			</Helmet>
			<div className="banner__add-page">
				<div className="banner__add-page__content">
					<Heading size="1" content="Add establishment" />
				</div>
			</div>
			<Container className="add-page">
				<AddEstab />
			</Container>
		</>
	);
}
