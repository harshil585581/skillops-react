import React from "react";

const About = () => {
  return (
    <div className="container static-page">
      <h1 className="page-title">About Swiggy Food</h1>
      <p className="page-description">
        Swiggy Food is your ultimate destination for quick and delicious meals. We partner with the best restaurants in the city to bring you a wide variety of cuisines right to your doorstep.
      </p>

      <div className="info-grid" style={{ justifyContent: 'center' }}>
        <div className="info-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3>Our Mission</h3>
          <p className="page-description" style={{ marginBottom: 0 }}>
            To make every meal a delight and every delivery a joyous experience. We believe in quality, speed, and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

