import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../app/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>

      <button onClick={() => dispatch(addItem("Shoes"))}>
        Add Shoes
      </button>
      <button onClick={() => dispatch(addItem("Socks"))}>
        Add Socks
      </button>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => dispatch(removeItem(index))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;