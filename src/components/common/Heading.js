import PropTypes from "prop-types";
import React from 'react';

export default function Heading({ size = "1", content, title }) {
  const VariableHeading = `h${size}`;

  return (
    <VariableHeading>
      {content} {title}
    </VariableHeading>
  );
}

Heading.propTypes = {
  size: PropTypes.string,
  content: PropTypes.any.isRequired,
  title: PropTypes.any,
};
