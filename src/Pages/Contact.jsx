import React from "react";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <div className="grid justify-center">
      <div className="flex justify-center">
        <h1 className="text-4xl pt-5 m-2">Contact Me</h1>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
