import PropTypes from "prop-types";
import React from 'react';
import dateFormat from "dateformat";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import DeleteEnquiry from "./DeleteEnquiry";
import Heading from "../../../common/Heading";


export default function Enquiry({
  id,
  full_name,
  email_address,
  check_in,
  check_out,
  establish_name,
  created_at,
}) {
  return (
		<Accordion
			className="enquiries__results__row__acc"
			defaultActiveKey="0"
			flush
		>
			<Card className="enquiries__results__row__acc__card">
				<Accordion.Header
					className="enquiries__results__row__acc__card__header"
					as={Card.Header}
					eventKey={id}
				>
					
					<p>
						<strong>Establishment : {establish_name} </strong>
					</p>

					<p>
						<i>Sent : {dateFormat(created_at, 'dd.mm.yyyy')} </i>
					</p>
				</Accordion.Header>
				<Accordion.Body eventKey={id}>
					<Card.Body className="enquiries__results__row__acc__card__body">
						<Heading size="3" content="Full name of client:" />
						<p>{full_name}</p>

						<Heading size="3" content="Email address of client:" />
						<p>{email_address}</p>

						<Heading size="3" content="Check-in date:" />
						<p>{dateFormat(check_in, 'dd.mm.yyyy')}</p>

						<Heading size="3" content="Check-out date:" />
						<p>{dateFormat(check_out, 'dd.mm.yyyy')}</p>

						<div className="btns">
							<a className="btn btns__accept" href=".">
								Accept
							</a>
							<DeleteEnquiry id={id} />
						</div>
					</Card.Body>
				</Accordion.Body>
			</Card>
		</Accordion>
	);
}

Enquiry.propTypes = {
  id: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
  email_address: PropTypes.string.isRequired,
  check_in: PropTypes.any.isRequired,
  check_out: PropTypes.any.isRequired,
  establish_name: PropTypes.string.isRequired,
  created_at: PropTypes.any.isRequired,
};
