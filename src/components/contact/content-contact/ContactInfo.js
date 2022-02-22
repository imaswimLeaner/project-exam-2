import Heading from "../../common/Heading";
import React from 'react';


export default function ContactInfo() {
  return (
    <div className="contact__left__content">
      <Heading size="1" content="Contact us" />
      <p>
        Got a question, comment or concern? We are here to help you! Fill out
        our contact form and we will get back to you within 7 business
        hours.{" "}
      </p>
      <p>You can also contact us through our social media!</p>
      <div className="contact__left__content__social-media">
        <a href=".">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href=".">
          <i className="fab fa-twitter"></i>
        </a>
        <a href=".">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}
