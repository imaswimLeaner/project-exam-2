import { useState } from "react";
import PropTypes from "prop-types";
import useAxios from "../../../../hooks/useAxios";

export default function DeleteEnquiry({ id }) {
  const [error, setError] = useState(null);

  const http = useAxios();

  const url = `enquiries/${id}`;

  async function handleReject() {
    const confirmReject = window.confirm("Reject this enquiry?");

    if (confirmReject) {
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
    <button type="button" className="btn btns__delete" onClick={handleReject}>
      {error ? "Error" : "Reject"}
    </button>
  );
}

DeleteEnquiry.propTypes = {
  id: PropTypes.number.isRequired,
};
