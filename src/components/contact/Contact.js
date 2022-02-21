import React from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import ContactForm from './content/ContactForm';
import ContactInfo from './content/ContactInfo';

export default function Contact() {
	return (
		<>
			<Helmet>
				<title>Contact | Holidaze</title>
			</Helmet>
			<Container className="contact">
				<div className="contact__left">
					<ContactInfo />
				</div>
				<div className="contact__right">
					<ContactForm />
				</div>
			</Container>
		</>
	);
}
