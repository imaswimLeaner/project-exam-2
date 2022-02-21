import { useState, useEffect, React} from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import { BASE_URL } from "../../../../constants/api";
import Loader from "../../../common/Loader";
import Entry from "./Entry";

export default function EnquiriesList() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = BASE_URL + "contacts";

  useEffect(function () {
    async function getEntries() {
      try {
        const response = await axios.get(url);
        console.log("response", response);
        setEntries(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getEntries();
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
    <div className="entries__results">
      <Row xs={1} md={2} lg={2} className="entries__results__row">
        {entries
          .map(function (entry) {
            const {
              id,
              first_name,
              last_name,
              email_address,
              subject,
              message,
              created_at,
            } = entry;

            return (
              <Entry
                key={id}
                id={id}
                first_name={first_name}
                last_name={last_name}
                email_address={email_address}
                subject={subject}
                message={message}
                created_at={created_at}
              />
            );
          })
          .reverse()}
      </Row>
    </div>
  );
}
