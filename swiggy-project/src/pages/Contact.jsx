import React from "react";

const Contact = () => {
  return (
    <div className="container static-page">
      <h1 className="page-title">Contact Us</h1>
      <p className="page-description">
        Have questions or feedback? We'd love to hear from you. Reach out to us through any of the following channels.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h3>Email</h3>
          <p>
            <a href="mailto:support@swiggyfood.com" className="nav-item">
              support@swiggyfood.com
            </a>
          </p>
        </div>

        <div className="info-card">
          <h3>Phone</h3>
          <p>
            <a href="tel:+18007944493" className="nav-item">
              +1 (800) SWIGGY-FOOD
            </a>
          </p>
        </div>

        <div className="info-card">
          <h3>Address</h3>
          <p style={{ color: "var(--text-light)" }}>123 Foodie Lane, Gourmet City, FC 56789</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

