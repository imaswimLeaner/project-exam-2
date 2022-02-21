import { useState, useEffect, } from "react";
import React from 'react';
import axios from "axios";
import Row from "react-bootstrap/Row";
import { BASE_URL } from "../../constants/api";
import Loader from "../common/Loader";
import Card from "./Card";

export default function AccommodationsList() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_URL + "bookings";

  useEffect(function () {
    async function getAccommodations() {
      try {
        const response = await axios.get(url);
        console.log("response", response);
        setAccommodations(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getAccommodations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;

  if (error)
    return (
      <div className="error">
        Sorry, an error occured. Please try again later!{" "}
      </div>
    );

  return (
    <div className="accommodations__results">
      <Row>
        {accommodations.map(function (accommodation) {
          const {
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
          } = accommodation;

          return (
            <Card
              key={id}
              id={id}
              name={name}
              image={image.url}
              price={price}
              bar={bar}
              breakfast_included={breakfast_included}
              restaurant={restaurant}
              pet_friendly={pet_friendly}
              parking_available={parking_available}
              location={location}
            />
          );
        })}
      </Row>
    </div>
  );
}
