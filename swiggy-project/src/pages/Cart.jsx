import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const subtotal = items.reduce(
    (acc, item) => acc + (item.price || 250) * item.qty,
    0
  );
  const deliveryFee = items.length > 0 ? 50 : 0;
  const platformFee = items.length > 0 ? 5 : 0;
  const total = subtotal + deliveryFee + platformFee;

  return (
    <div className="container cart-page">
      <div className="cart-header">
        <h1 style={{ color: "var(--secondary)", fontSize: "2rem", marginBottom: "8px" }}>Secure Checkout</h1>
        <p style={{ color: "var(--text-light)" }}>You have {items.length} items in your cart</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div style={{ fontSize: "5rem", marginBottom: "20px" }}>🛒</div>
          <h3 style={{ fontSize: "1.8rem", color: "var(--secondary)" }}>Your cart is empty</h3>
          <p style={{ color: "var(--text-light)", marginBottom: "30px" }}>You can go to home page to view more restaurants</p>
          <Link to="/">
            <button className="checkout-btn" style={{ width: "auto", padding: "12px 40px" }}>
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items-list">
            {items.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-info">
                  <h4 style={{ fontWeight: "700" }}>{item.name}</h4>
                  <p className="item-price">₹{item.price || 250}</p>
                </div>
                <div style={{ color: "var(--success)", fontWeight: "800" }}>
                  {item.qty} x ₹{item.price || 250}
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{
                    background: "#ffe5e5",
                    color: "#ff0000",
                    border: "none",
                    padding: "4px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3 style={{ marginTop: 0, marginBottom: "20px", fontSize: "1.3rem" }}>Order Summary</h3>
            <div className="summary-row">
              <span style={{ color: "var(--text-light)" }}>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="summary-row">
              <span style={{ color: "var(--text-light)" }}>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="summary-row" style={{ borderBottom: "1px solid var(--border)", paddingBottom: "15px" }}>
              <span style={{ color: "var(--text-light)" }}>Platform Fee</span>
              <span>₹{platformFee}</span>
            </div>
            <div className="summary-row" style={{ paddingTop: "15px", fontSize: "1.2rem", fontWeight: "800" }}>
              <span>Total Payable</span>
              <span>₹{total}</span>
            </div>
            
            <button className="checkout-btn">
              PROCEED TO PAY
            </button>
          </div>
        </div>

      )}
    </div>
  );
};

export default Cart;
