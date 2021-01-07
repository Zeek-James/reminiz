import React from "react";

export const RightNav = ({ buger }) => {
  return (
    <ul className={!buger ? " " : "close"}>
      <li className={!buger ? "" : "close"}>
        <a href="/#" className="nav_link">
          Home
        </a>
      </li>
      <li className={!buger ? "" : "close"}>
        <a href="/" className="nav_link">
          About Us
        </a>
      </li>
      <li className={!buger ? "" : "close"}>
        <a href="/" className="nav_link">
          Contact Us
        </a>
      </li>
      <li className={!buger ? "" : "close"}>
        <a href="/" className="nav_link">
          Sign in
        </a>
      </li>
      <li className={!buger ? "" : "close"}>
        <a href="/" className="nav_link">
          Sign Up
        </a>
      </li>
    </ul>
  );
};
