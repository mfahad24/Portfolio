import React from "react";
import "./ContactMe.css";

function ContactMe() {
  return (
    <div id="aboutme" className="aboutmecontainer">
      <form>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        ></input>
      </form>
    </div>
  );
}
export default ContactMe;
