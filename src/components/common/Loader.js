import Spinner from "react-bootstrap/Spinner";
import React from 'react';


export default function Loader() {
  return (
    <div className="spinner-container" role="status">
      <Spinner animation="border">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
