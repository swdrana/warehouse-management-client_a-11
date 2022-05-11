import React from "react";
import "./Footer.css";
import { FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="sm-footer ">
      <div className="container d-flex align-items-center ">
        <span className="ms-3">
          Copyright © {new Date().getFullYear()} | Powered by{" "}
          <a href="https://github.com/swdrana" target="_blank" rel="noreferrer">
            swdRana
          </a>
          .
        </span>
        <p className="text-end pe-3 m-0">
          <a
            className="me-3"
            href="https://www.facebook.com/swdrana"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size="20px" color="#0237ff" />
          </a>
          <a
            className="me-3"
            href="https://www.youtube.com/swdrana"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube size="25px" color="red" />
          </a>
          <a
            className="me-3"
            href="https://www.github.com/swdrana"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="20px" color="black" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
