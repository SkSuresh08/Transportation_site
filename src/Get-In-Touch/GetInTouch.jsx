import React from "react";
import "./git-style.css";

function Git() {
  return (
    <section id="git">
      <h2>Get in Touch</h2>
      <p>
        Get in touch with us today! Our team is here to answer any questions you
        may have and help you with your social media needs. Simply fill out the
        form below with your name, email, and message, and we'll be in touch
        shortly. We're excited to hear from you and help you achieve your social
        media goals!
      </p>
      <form action="#">
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your E-mail" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Git;
