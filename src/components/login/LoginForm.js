import { useState, useContext, } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import FormError from '../common/FormError';
import { BASE_URL } from '../../constants/api';
import AuthContext from '../../context/AuthContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

 

const schema = yup.object().shape({
	username: yup.string().required('Please enter your username'),
	password: yup.string().required('Please enter your password'),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const navigate = useNavigate();
	const url = BASE_URL + 'auth/local';
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const [, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		// console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log('response', response.data);
			setAuth(response.data);
			navigate('/');
		} catch (error) {
			console.log('error', error);
			setLoginError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<Container>
			{loginError && (
				<Alert variant="danger">
					Username or Password incorrect {loginError}
				</Alert>
			)}
			<Form className="login__content__form" onSubmit={handleSubmit(onSubmit)}>
				<fieldset disabled={submitting}>
					<Form.Group>
						
						<Form.Control
							name="username"
							placeholder="Username"
							{...register('username')}
						/>
						{errors.username && (
							<FormError>{errors.username.message}</FormError>
						)}
					</Form.Group>

					<Form.Group>
						<Form.Control
							name="password"
							placeholder="Password"
							ref={register}
							{...register('password')}
						/>
						{errors.password && (
							<FormError>{errors.password.message}</FormError>
						)}
					</Form.Group>
					<Button
						className="login__content__form__btn"
						variant="info"
						type="submit"
					>
						{submitting ? 'Loggin in...' : 'Login'}
					</Button>
				</fieldset>
			</Form>
		</Container>
	);
}
