import React from "react";
import Footerlink from "../FooterLink/Footerlink";
import "./FooterComponent.css";

function FooterComponent() {
  return (
    <div className="footer-section">
      <h3 className="query-number">Questions? call 000-800-040-1843</h3>
      <div className="footer-wrapper">
        <div className="footer-column">
          <Footerlink>FAQ</Footerlink>
          <Footerlink>Investor Relation</Footerlink>
          <Footerlink>Privacy</Footerlink>
          <Footerlink>Speed Test</Footerlink>
        </div>
        <div className="footer-column">
          <Footerlink>Help Center</Footerlink>
          <Footerlink>Jobs</Footerlink>
          <Footerlink>Cookies Preference</Footerlink>
          <Footerlink>Legal Notice</Footerlink>
        </div>
        <div className="footer-column">
          <Footerlink>Account</Footerlink>
          <Footerlink>Ways to Watch</Footerlink>
          <Footerlink>Corporate Information</Footerlink>
          <Footerlink>Only on Netflix</Footerlink>
        </div>
        <div className="footer-column">
          <Footerlink>Media Center</Footerlink>
          <Footerlink>Terms of Use</Footerlink>
          <Footerlink>Contact Us</Footerlink>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
