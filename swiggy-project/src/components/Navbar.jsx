import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const count = useSelector((state) =>

    state.cart.items.reduce((acc, item) => acc + item.qty, 0),
  );

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "900",
              color: "var(--primary)",
              letterSpacing: "-1px",
            }}
          >
            Swiggy Food
          </span>
        </Link>

        <div 
          className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ zIndex: 1000 }}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>


        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/offers" className="nav-item" onClick={() => setIsMenuOpen(false)}>
            Offers
          </Link>
          <Link to="/about" className="nav-item" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="nav-item" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>

          <Link to="/cart" style={{ textDecoration: "none" }} onClick={() => setIsMenuOpen(false)}>
            <div className="cart-btn">
              <span>🛒</span>
              <span>Cart</span>
              {count > 0 && <span className="cart-count">{count}</span>}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
