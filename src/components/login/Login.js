import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Heading from '../common/Heading';
import LoginForm from './LoginForm';

function Login() {
	return (
		<>
			<Helmet>
				<title>Login | Holidaze</title>
			</Helmet>
			<Container className="login">
				<div className="login__content">
					<Heading size="1" content="Admin Login" />
					<LoginForm />
				</div>
			</Container>
		</>
	);
}

export default Login;
