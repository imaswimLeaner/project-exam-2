import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import React from 'react';
import Heading from "../common/Heading";

export default function Admin() {
  return (
    <>
      <Helmet>
        <title>Admin | Holidaze</title>
      </Helmet>
      <div className="banner__admin">
        <div className="banner__admin__content">
          <Heading size="1" content="Admin" />
          <Link to="/admin/enquiries">
            View all enquiries <i className="fas fa-chevron-right icon"></i>
          </Link>
          <Link to="/admin/entries">
            View all entries <i className="fas fa-chevron-right icon"></i>
          </Link>
          <Link to="/admin/add-establishment">
            Add new establishment <i className="fas fa-chevron-right icon"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
