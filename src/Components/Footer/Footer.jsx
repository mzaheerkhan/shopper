import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer_logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-container-icons">
          <img src={instagram_icon} alt="instagram_icon" />
        </div>
        <div className="footer-container-icons">
          <img src={pintester_icon} alt="pintester_icon" />
        </div>
        <div className="footer-container-icons">
          <img src={whatsapp_icon} alt="whatsapp_icon" className="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved .</p>
      </div>
    </div>
  );
};

export default Footer;
