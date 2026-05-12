import React from "react";

const Offers = () => {
  return (
    <div className="container static-page">
      <h1 className="page-title">Exciting Offers Just for You!</h1>
      <p className="page-description">
        Discover the best deals on your favorite meals. From flat discounts to free deliveries, we've got it all.
      </p>
      
      <div className="info-grid">
        {[1, 2, 3].map((i) => (
          <div key={i} className="info-card">
            <h3>50% OFF</h3>
            <p>On all orders above ₹499. Use code: <strong>SWIGGY50</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;

