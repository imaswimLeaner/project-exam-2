import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/api";

export default function SearchBar() {
  const [establishments, setEstablishments] = useState([]);
  const [establishmentMatch, setEstablishmentMatch] = useState([]);
  const url = BASE_URL + "bookings";

  useEffect(() => {
    const loadEstablishments = async () => {
      const response = await axios.get(url);
      setEstablishments(response.data);
    };

    loadEstablishments();
  }, [url]);

  const searchEstablishments = (text) => {
    if (!text) {
      setEstablishmentMatch([]);
    } else {
      let matches = establishments.filter((establishment) => {
        const regex = new RegExp(`${text}`, "gi");
        return establishment.name.match(regex);
      });
      setEstablishmentMatch(matches);
    }
  };

  return (
    <>
      <div className="search-bar">
        <input
          placeholder="Search accommodations..."
          onChange={(e) => searchEstablishments(e.target.value)}
        />
      </div>
      <div className="search-bar__results">
        <ul className="search-bar__results__list">
          {establishmentMatch.map((estab) => (
            <Link
              key={estab.id}
              className="search-bar__results__list__item"
              to={`accommodations/${estab.id}`}
            >
              <img src={estab.image.url} alt={estab.name} />
              <div className="search-bar__results__list__item--info">
                <p>{estab.name}</p>
                <p>{estab.price} NOK</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

