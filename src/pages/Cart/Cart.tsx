import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { removeFromCart, clearCart, updateQuantity } from "../../store/cartSlice";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Cart.scss';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleIncrement = (id: number) => {
    dispatch(updateQuantity({ id, quantity: 1 }));
  };

  const handleDecrement = (id: number) => {
    dispatch(updateQuantity({ id, quantity: -1 }));
  };

  return (
    <>
      <Header />
      <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cart__container">
            <ul className="cart__list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart__item">
                  <img src={item.image} alt={item.title} className="cart__img" />
                  <div className="cart__info">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <div className="cart__quantity">
                      <button
                        className="button button--quantity"
                        onClick={() => handleDecrement(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="button button--quantity"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="button button--remove"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart__total">
              <p>Total: ${totalPrice.toFixed(2)}</p>
            </div>
            <button className="button" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;