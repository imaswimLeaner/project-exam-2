import { useState, useEffect, } from "react";
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Heading from "../../common/Heading";
import FormError from "../../common/FormError";
import { BASE_URL } from "../../../constants/api";
import { MINIMUM_NAME_CHARACTERS } from "../../../constants/form";

const schema = yup.object().shape({
  full_name: yup
    .string()
    .required("Please enter your full name")
    .min(
      MINIMUM_NAME_CHARACTERS,
      `Your full name must be at least ${MINIMUM_NAME_CHARACTERS} characters`
    ),
  email_address: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  check_in: yup.string().required("Please provide a check-in date"),
  check_out: yup.string().required("Please provide a check-out date"),
  establish_name: yup.string().required(),
});

export default function Enquiry(props) {
  const [establishment, setEstablishment] = useState({});
  let { id } = useParams();
  const estabUrl = BASE_URL + `bookings/${id}`;

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const url = BASE_URL + "enquiries/";

  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

  useEffect(function () {
    async function getEstab() {
      try {
        const response = await axios.get(estabUrl);
        console.log("response", response);
        setEstablishment(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEstab();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(data) {
    setSubmitting(true);
    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setSubmitted(true);
    } catch (error) {
      console.log("error", error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
		<>
			<Modal
				className="enquiry"
				animation={false}
				show={props.show}
				onHide={props.onHide}
			>
				<Modal.Header closeButton>
					<Heading
						size="1"
						content="Book your stay at"
						title={establishment.name}
					/>
				</Modal.Header>
				<Heading
					size="2"
					content="Fill out the form to complete your booking"
				/>
				<Form className="enquiry__form" onSubmit={handleSubmit(onSubmit)}>
					<Form.Group>
						<Form.Label>Full name</Form.Label>
						<Form.Control
							name="full_name"
							placeholder="Full name"
							{...register('full_name')}
						/>
						{errors.full_name && (
							<FormError>{errors.full_name.message}</FormError>
						)}
					</Form.Group>

					<Form.Group>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							name="email_address"
							placeholder="Email address"
							{...register('email_address')}
						/>
						{errors.email_address && (
							<FormError>{errors.email_address.message}</FormError>
						)}
					</Form.Group>

					<Form.Group>
						<Form.Label>Check-in</Form.Label>
						<Form.Control
							name="check_in"
							type="date"
							{...register('check_in')}
						/>
						{errors.check_in && (
							<FormError>{errors.check_in.message}</FormError>
						)}
					</Form.Group>

					<Form.Group>
						<Form.Label>Check-out</Form.Label>
						<Form.Control
							name="check_out"
							type="date"
							{...register('check_out')}
						/>
						{errors.check_out && (
							<FormError>{errors.check_out.message}</FormError>
						)}
					</Form.Group>

					<Form.Group hidden>
						<Form.Label>Establishment Name</Form.Label>
						<Form.Control
							readOnly
							name="establish_name"
							value={establishment.name}
							{...register('establish_name')}
						/>
					</Form.Group>
					{submitted && (
						<Alert variant="success">
							Thank you for choosing us! Your booking was successful. You will
							receive a booking confirmation with all details within 24 hours.
						</Alert>
					)}
					<button className="enquiry__form__btn" type="submit">
						{submitting ? 'Submitting...' : 'Submit'}
					</button>
				</Form>
				<Modal.Footer className="enquiry__footer">
					<Link className="enquiry__footer__link" to={`/accommodations`}>
						Return to all accommodations
						<i className="fas fa-chevron-right icon"></i>
					</Link>
				</Modal.Footer>
			</Modal>
		</>
	);
}
