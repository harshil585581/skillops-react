import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { items, addItem, removeItem } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>

      <button onClick={() => addItem("Shoes")}>
        Add Shoes
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;