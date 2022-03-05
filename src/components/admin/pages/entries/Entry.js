import PropTypes from "prop-types";
import React from 'react';
import dateFormat from "dateformat";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import DeleteEntry from "./DeleteEntry";
import Heading from "../../../common/Heading";

export default function Entry({
  id,
  first_name,
  last_name,
  email_address,
  subject,
  message,
  created_at,
}) {
  return (
		<Accordion
			className="entries__results__row__acc"
			defaultActiveKey="0"
			flush
		>
			<Card className="entries__results__row__acc__card">
				<Accordion.Header
					className="entries__results__row__acc__card__header"
					as={Card.Header}
					
				>
					<p>NAME : {first_name}/ </p>
					<p>
						<strong>Subject : {subject} </strong>
					</p>
					<p>
						<i>/Sent: {dateFormat(created_at, 'dd.mm.yyyy')} </i>
					</p>
				</Accordion.Header>
				<Accordion.Body eventKey={id}>
					<Card.Body className="entries__results__row__acc__card__body">
						<Heading size="3" content="First name:" />
						<p>{first_name}</p>

						<Heading size="3" content="Last name:" />
						<p>{last_name}</p>

						<Heading size="3" content="Email address:" />
						<p>{email_address}</p>

						<Heading size="3" content="Subject:" />
						<p>{subject}</p>

						<Heading size="3" content="Message:" />
						<p>{message}</p>

						<div className="btns">
							<a className="btn btns__accept" href={`mailto:${email_address}`}>
								Reply
							</a>
							<DeleteEntry id={id} />
						</div>
					</Card.Body>
				</Accordion.Body>
			</Card>
		</Accordion>
	);
}

Entry.propTypes = {
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email_address: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  created_at: PropTypes.any.isRequired,
};
