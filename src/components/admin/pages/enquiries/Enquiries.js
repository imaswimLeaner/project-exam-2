import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/Container";
import Heading from "../../../common/Heading";
import EnquiriesList from "./EnquiriesList";

export default function Enquiries() {
  return (
    <>
      <Helmet>
        <title>Admin - Enquiries | Holidaze</title>
      </Helmet>
      <div className="banner__enquiries">
        <div className="banner__enquiries__content">
          <Heading size="1" content="Booking Enquiries" />
        </div>
      </div>
      <Container className="enquiries">
        <EnquiriesList />
      </Container>
    </>
  );
}
