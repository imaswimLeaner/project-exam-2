import { useState, } from "react";
import React from 'react';
import PropTypes from "prop-types";
import useAxios from "../../../../hooks/useAxios";

export default function DeleteEntry({ id }) {
  const [error, setError] = useState(null);

  const http = useAxios();

  const url = `messages/${id}`;

  async function handleDelete() {
    const confirmDelete = window.confirm("Delete this entry?");

    if (confirmDelete) {
      try {
        await http.delete(url);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        window.location.reload();
      }
    }
  }

  return (
    <button type="button" className="btn btns__delete" onClick={handleDelete}>
      {error ? "Error" : "Delete"}
    </button>
  );
}

DeleteEntry.propTypes = {
  id: PropTypes.number.isRequired,
};
