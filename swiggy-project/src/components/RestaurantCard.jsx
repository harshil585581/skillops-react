import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === data.id);
  const qty = cartItem ? cartItem.qty : 0;
  
  return (
    <div className="card" onClick={() => navigate(`/restaurant/${data.id}`)} style={{ cursor: "pointer" }}>
      <img src={data.image} alt={data.name} />
      <div className="card-content">
        <h3>{data.name}</h3>
        <p className="card-cuisine">
          {Array.isArray(data.cuisine) ? data.cuisine.join(", ") : data.cuisine}
        </p>
        
        <div className="card-footer">
          <div className="rating">
            <span>⭐</span>
            <span>{data.rating}</span>
          </div>
          
          <button 
            className={`add-btn ${qty > 0 ? "added" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(addToCart(data));
            }}
          >
            ADD {qty > 0 && <span>({qty})</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

