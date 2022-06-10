import React from "react";

function ContactForm() {
  return (
    <div className="border-2 border-slate-400 rounded-lg p-2 m-2">
      <form>
        <label htmlFor="name" hidden>
          Your Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="off"
          name="name"
          required
          placeholder="Your Name"
          className="border-2 border-slate-400 rounded-lg p-1 m-1 w-96"
        ></input>

        <label htmlFor="email" hidden>
          Your Email
        </label>
        <input
          id="email"
          type="text"
          autoComplete="off"
          name="email"
          required
          placeholder="Your Email"
          className="border-2 border-slate-400 rounded-lg p-1 m-1  w-96"
        ></input>

        <div className="grid grid-rows-1 m-2 p-2">
          <label htmlFor="subject" hidden>
            Subject
          </label>
          <input
            id="subject"
            type="text"
            autoComplete="off"
            name="subject"
            required
            placeholder="Subject"
            className="border-2 border-slate-400 rounded-lg p-1 m-1"
          ></input>

          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            id="message"
            autoComplete="off"
            name="message"
            placeholder="Message"
            required
            className="border-2 border-slate-400 rounded-lg p-1 m-1 h-96 resize-none"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-slate-300 border-2 border-slate-500 p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
