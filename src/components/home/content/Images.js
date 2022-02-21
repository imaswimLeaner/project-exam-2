import image2 from "../../../images/bergen-2.jpg";
import image3 from '../../../images/attractions/bergenAquarium.jpg';
import React from 'react';



export default function Images() {
  return (
		<div className="image-container">
			<div className="image-container__inner image-container__inner--first">
				<img
					className="image-container__inner__img"
					src={image3}
					alt="Aquarium, Bergen"
				/>
				<div className="paragraph-container">
					<p className="image-container__text">Aquarium Bergen</p>
				</div>
			</div>
			<div className="image-container__inner image-container__inner--second">
				<img
					className="image-container__inner__img"
					src={image2}
					alt="Bryggen, Bergen"
				/>
				<p className="image-container__text">Bryggen</p>
			</div>
		</div>
	);
}
