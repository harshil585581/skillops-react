import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Shimmer from "../components/Shimmer";

const fetchRestaurant = async ({ queryKey, signal }) => {
  const [, resId] = queryKey;
  const res = await fetch(`https://dummyjson.com/recipes/${resId}`, { signal });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const { data: restaurant, isLoading, isError } = useQuery({
    queryKey: ["restaurant", resId],
    queryFn: fetchRestaurant,
  });

  if (isLoading) return <div className="container" style={{ marginTop: "40px" }}><Shimmer /></div>;
  if (isError) return <div className="container" style={{ marginTop: "40px" }}>Error loading restaurant details.</div>;

  const cartItem = cartItems.find((i) => i.id === restaurant.id);
  const qty = cartItem ? cartItem.qty : 0;

  return (
    <div className="container menu-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="menu-header">
        <div className="res-info">
          <h1>{restaurant.name}</h1>
          <p className="res-cuisine">{restaurant.cuisine}</p>
          <div className="res-meta">
            <span className="rating">⭐ {restaurant.rating}</span>
            <span>•</span>
            <span>{restaurant.prepTimeMinutes} mins</span>
            <span>•</span>
            <span>{restaurant.difficulty}</span>
          </div>
          
          <button 
            className={`add-btn ${qty > 0 ? "added" : ""}`}
            style={{ marginTop: "24px", padding: "12px 32px" }}
            onClick={() => dispatch(addToCart(restaurant))}
          >
            {qty > 0 ? `ADDED (${qty})` : "ADD TO CART"}
          </button>
        </div>
        <div className="res-image">
          <img src={restaurant.image} alt={restaurant.name} />
        </div>
      </div>

      <div className="menu-section">
        <h2>Menu (Ingredients)</h2>
        <div className="menu-list">
          {restaurant.ingredients.map((ingredient, index) => (
            <div key={index} className="menu-item">
              <div className="item-details">
                <h4>{ingredient}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="instructions-section">
        <h2>Instructions</h2>
        <ol>
          {restaurant.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RestaurantMenu;
