import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Heading from '../../../common/Heading';
import EntriesList from './EntriesList';

export default function Enquiries() {
	return (
		<>
			<Helmet>
				<title>Admin - Entries | Holidaze</title>
			</Helmet>
			<div className="banner__entries">
				<div className="banner__entries__content">
					<Heading size="1" content="Contact Entries" />
				</div>
			</div>
			<Container className="entries">
				<EntriesList />
			</Container>
		</>
	);
}
