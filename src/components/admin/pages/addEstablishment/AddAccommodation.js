import { useState } from "react";
import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import FormError from "../../../common/FormError";
import useAxios from "../../../../hooks/useAxios";

const schema = yup.object().shape({
	hotel: yup.boolean(),
	bed_and_breakfast: yup.boolean(),
	guesthouse: yup.boolean(),
	parking_available: yup.boolean(),
	breakfast_included: yup.boolean(),
	restaurant: yup.boolean(),
	pet_friendly: yup.boolean(),
	bar: yup.boolean(),
	name: yup.string().required('Establishment name is required'),
	price: yup
		.number()
		.typeError('Price is required')
		.required('Price is required'),
	description: yup.string().required('Description is required'),
	location: yup.string().required('Location is required'),
});

export default function AddAccommodation() {
  const [adding, setAdding] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const http = useAxios();

  
  const {
		register,
		handleSubmit,
		
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

  async function onSubmit(data) {
    setAdding(true);
    setError(null);

    const formData = new FormData();
    formData.append(
			'data',
			JSON.stringify({
				hotel: data.hotel,
				bed_and_breakfast: data.bed_and_breakfast,
				guesthouse: data.guesthouse,
				parking_available: data.parking_available,
				breakfast_included: data.breakfast_included,
				restaurant: data.restaurant,
				pet_friendly: data.pet_friendly,
				bar: data.bar,
				name: data.name,
				price: data.price,
				description: data.description,
				location: data.location,
			})
		);
    formData.append("files.image", data.files[0]);
    data.status = "publish";

    try {
      const response = await http.post("bookings", formData);
      console.log("response", response.data);
      setSubmitted(true);
    } catch (error) {
      console.log("error", error);
      setError(error);
    } finally {
      setAdding(false);
    }
  }

  return (
		<>
			{error && (
				<Alert variant="warning">
					Something went wrong. Please make sure all fields are properly filled
					out. If the problem persists, contact support.
				</Alert>
			)}
			<Form className="add-page__form" onSubmit={handleSubmit(onSubmit)}>
				<div className="add-page__form__group--left">
					<Form.Group controlId="formFile" className="mb-3">
						<Form.Label>Add Image (required)</Form.Label>
					  	<Form.Control
							type="file"
							name="files"
							label="Add image"
							{...register('files')}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Establishment type</Form.Label>
						<Form.Text className="checkbox-text">Choose one type</Form.Text>
						<Form.Check
							type="checkbox"
							label="Hotel"
							name="hotel"
							{...register('hotel')}
						/>
						<Form.Check
							type="checkbox"
							label="Bed & Breakfast"
							name="bed_and_breakfast"
							{...register('bed_and_breakfast')}
						/>
						<Form.Check
							type="checkbox"
							label="Guesthouse"
							name="guesthouse"
							{...register('guesthouse')}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Special features</Form.Label>
						<Form.Text className="checkbox-text">
							Choose one or several features
						</Form.Text>
						<Form.Check
							type="checkbox"
							label="Parking Available"
							name="parking_available"
							{...register('parking_available')}
						/>
						<Form.Check
							type="checkbox"
							label="Breakfast Included"
							name="breakfast_included"
							{...register('breakfast_included')}
						/>
						<Form.Check
							type="checkbox"
							label="Restaurant"
							name="restaurant"
							{...register('restaurant')}
						/>
						<Form.Check
							type="checkbox"
							label="Pet-friendly"
							name="pet_friendly"
							{...register('pet_friendly')}
						/>
						<Form.Check
							type="checkbox"
							label="Bar"
							name="bar"
							{...register('bar')}
						/>
					</Form.Group>
				</div>
				<div className="add-page__form__group--right">
					<Form.Group>
						<Form.Label>Establishment name</Form.Label>
						<Form.Control
							name="name"
							placeholder="Establishment name.."
							{...register('name')}
						/>
						{errors.name && <FormError>{errors.name.message}</FormError>}

						<Form.Label>Location</Form.Label>
						<Form.Control
							name="Location"
							placeholder="Location"
							{...register('location')}
						/>
						{errors.location && <FormError>{errors.location.message}</FormError>}
					</Form.Group>

					<Form.Group>
						<Form.Label>Price per night</Form.Label>
						<Form.Control
							name="price"
							placeholder="Price.."
							{...register('price')}
						/>
						{errors.price && <FormError>{errors.price.message}</FormError>}
					</Form.Group>

					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							row={3}
							name="description"
							placeholder="Description.."
							{...register('description')}
						/>
						{errors.description && (
							<FormError>{errors.description.message}</FormError>
						)}
					</Form.Group>

					{submitted && (
						<Alert variant="success">Establishment successfully added.</Alert>
					)}
					<button className="add-page__form__btn">
						{adding ? 'Adding...' : 'Add new establishment'}
					</button>
				</div>
			</Form>
		</>
	);
}
