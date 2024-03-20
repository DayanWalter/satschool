"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Popup from "./Popup";

export default function ContactForm() {
  const form = useRef();
  const [popup, setPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2n1b8f9", "template_dxv4he7", form.current, {
        publicKey: "N21MnRLlPBPVc0mQf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
    setPopup(true);
    e.target.reset();
    setTimeout(() => {
      setPopup(false);
    }, 2000);
  };
  return (
    <>
      <form
        className="mt-6 flex w-full flex-col items-start justify-start"
        name="contact"
        ref={form}
        onSubmit={sendEmail}
      >
        <label htmlFor="user_name" className="mb-5 w-full max-w-sm">
          Name:
          <span className="text-red-500">*</span>
          <input
            id="user_name"
            className="mt-2 w-full rounded-sm border border-gray-400 px-2 py-1 shadow-sm ring-transparent ring-offset-2 ring-offset-blue-400/20 focus:border-blue-400 focus:outline-none focus:ring dark:text-black"
            type="text"
            required
            autoComplete="true"
            name="user_name"
          />
        </label>
        <label htmlFor="user_email" className="mb-5 w-full max-w-sm">
          Email:
          <span className="text-red-500">*</span>
          <input
            id="user_email"
            className="mt-2 w-full rounded-sm border border-gray-400 px-2 py-1 shadow-sm ring-transparent ring-offset-2 ring-offset-blue-400/20 focus:border-blue-400 focus:outline-none focus:ring dark:text-black"
            type="email"
            required
            autoComplete="true"
            name="user_email"
          />
        </label>
        <label htmlFor="user_message" className="mb-5 w-full max-w-sm">
          Message:
          <span className="text-red-500">*</span>
          <textarea
            className="mt-2 w-full rounded-sm border border-gray-400 px-2 py-1 shadow-sm ring-transparent ring-offset-2 ring-offset-blue-400/20 focus:border-blue-400 focus:outline-none focus:ring dark:text-black"
            name="user_message"
            id="user_message"
            rows={8}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="rounded-lg bg-primary px-4 py-2 font-medium text-white hover:bg-primary/80"
        >
          Send Message
        </button>
      </form>
      {popup ? <Popup /> : ""}
    </>
  );
}
