import { useState, useEffect } from "react";
import React from 'react';
import axios from "axios";
import Row from "react-bootstrap/Row";
import { BASE_URL } from "../../../../constants/api";
import Loader from "../../../common/Loader";
import Enquiry from "./Enquiry";

export default function EnquiriesList() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_URL + "enquiries";

  useEffect(function () {
    async function getEnquiries() {
      try {
        const response = await axios.get(url);
        console.log("response", response);
        setEnquiries(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getEnquiries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;

  if (error)
    return (
      <div className="error">
        An error occured. Please contact the main office for more info.
      </div>
    );

  return (
    <div className="enquiries__results">
      <Row xs={1} md={2} lg={2} className="enquiries__results__row">
        {enquiries
          .map(function (enquiry) {
            const {
              id,
              full_name,
              email_address,
              check_in,
              check_out,
              establishment_name,
              created_at,
            } = enquiry;

            return (
              <Enquiry
                key={id}
                id={id}
                full_name={full_name}
                email_address={email_address}
                check_in={check_in}
                check_out={check_out}
                establishment_name={establishment_name}
                created_at={created_at}
              />
            );
          })
          .reverse()}
      </Row>
    </div>
  );
}
