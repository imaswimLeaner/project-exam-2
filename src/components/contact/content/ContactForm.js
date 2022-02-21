import { useState, } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import FormError from '../../common/FormError';
import { BASE_URL } from '../../../constants/api';
import {
	MINIMUM_NAME_CHARACTERS,
	MINIMUM_MSG_CHARACTERS,
	DEFAULT_VALUES,
} from '../../../constants/form';

const schema = yup.object().shape({
	first_name: yup
		.string()
		.required('Please enter your first name')
		.min(
			MINIMUM_NAME_CHARACTERS,
			`Your first name must be at least ${MINIMUM_NAME_CHARACTERS} characters`
		),
	last_name: yup
		.string()
		.required('Please enter your last name')
		.min(
			MINIMUM_NAME_CHARACTERS,
			`Your last name must be at least ${MINIMUM_NAME_CHARACTERS} characters`
		),
	email_address: yup
		.string()
		.required('Please enter your email address')
		.email('Please enter a valid email address'),
	subject: yup.string().required('Please choose a subject'),
	message: yup
		.string()
		.required('Please enter your message')
		.min(
			MINIMUM_MSG_CHARACTERS,
			`Your message must be at least ${MINIMUM_MSG_CHARACTERS} characters`
		),
});

export default function ContactForm() {
	const [sending, setSending] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const url = BASE_URL + 'contact';

	// const { register, handleSubmit, errors, reset } = useForm({
	// 	resolver: yupResolver(schema),
	// });

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSending(true);

		try {
			const response = await axios.post(url, data);
			console.log('response', response.data);
			reset(DEFAULT_VALUES);
			setSubmitted(true);
		} catch (error) {
			console.log('error', error);
		} finally {
			setSending(false);
		}
	}

	return (
		<>
			<Form className="contact__right__form" onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Form.Label>First Name</Form.Label>
					<Form.Control
						name="first_name"
						placeholder="First Name"
						ref={register}
					/>
					{errors.first_name && (
						<FormError>{errors.first_name.message}</FormError>
					)}
				</Form.Group>

				<Form.Group>
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						name="last_name"
						placeholder="Last Name"
						ref={register}
					/>
					{errors.last_name && (
						<FormError>{errors.last_name.message}</FormError>
					)}
				</Form.Group>

				<Form.Group>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						name="email_address"
						placeholder="Email Address"
						ref={register}
					/>
					{errors.email_address && (
						<FormError>{errors.email_address.message}</FormError>
					)}
				</Form.Group>

				<Form.Group>
					<Form.Label>Subject</Form.Label>
					<Form.Control name="subject" ref={register} as="select">
						<option value="">Subject..</option>
						<option value="Booking">Booking</option>
						<option value="Payment">Payment</option>
						<option value="Cancellation">Cancellation</option>
						<option value="Other">Other</option>
					</Form.Control>
					{errors.subject && <FormError>{errors.subject.message}</FormError>}
				</Form.Group>

				<Form.Group>
					<Form.Label>Message</Form.Label>
					<Form.Control
						name="message"
						placeholder="Your message.."
						ref={register}
						as="textarea"
						rows={5}
					/>
					{errors.message && <FormError>{errors.message.message}</FormError>}
				</Form.Group>
				{submitted && (
					<Alert variant="success">
						Your message was successfully sent. We will contact you shortly!
					</Alert>
				)}
				<button className="contact__right__form__btn" type="submit">
					{sending ? 'Sending..' : 'Send'}
				</button>
			</Form>
		</>
	);
}
