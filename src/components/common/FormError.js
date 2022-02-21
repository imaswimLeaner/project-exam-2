import PropTypes from "prop-types";
import React from 'react';


export default function ValidationError({ children }) {
  return <div className="form-error">{children}</div>;
}

ValidationError.propTypes = {
  children: PropTypes.node.isRequired,
};
