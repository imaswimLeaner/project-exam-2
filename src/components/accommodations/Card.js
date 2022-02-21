import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";

export default function Card({
  id,
  name,
  image,
  price,
  bar,
  breakfast_included,
  restaurant,
  pet_friendly,
  parking_available,
  location,
}) {
  return (
		<div className="card" key={id}>
			<div className="card__img-container">
				<img className="card__img-container__img" src={image} alt={name} />
			</div>
			<div className="card__desc">
				<Heading size="1" content={name} />
				<Heading size="2" content={price} title="NOK" />
				<span>
					Location <i className="icon fas fa-map-marked-alt"></i><br></br>
					<Heading  content={location} />
				</span>
				<ul className="card__desc__special-features">
					{bar && <li className="card__desc__special-features__item">Bar</li>}
					{breakfast_included && (
						<li className="card__desc__special-features__item">
							Breakfast Included
						</li>
					)}
					{restaurant && (
						<li className="card__desc__special-features__item">Restaurant</li>
					)}
					{pet_friendly && (
						<li className="card__desc__special-features__item">Pet-friendly</li>
					)}
					{parking_available && (
						<li className="card__desc__special-features__item">
							Parking Available
						</li>
					)}
				</ul>
				<Link to={`/accommodations/${id}`} className="card__desc__btn">
					Details
				</Link>
			</div>
		</div>
	);
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bar: PropTypes.any,
  breakfast_included: PropTypes.any,
  restaurant: PropTypes.any,
  pet_friendly: PropTypes.any,
  parking_available: PropTypes.any,
  guesthouse: PropTypes.any,
  hotel: PropTypes.any,
  bed_and_breakfast: PropTypes.any,
  location: PropTypes.string.isRequired,
};
