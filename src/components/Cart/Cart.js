import { useContext } from 'react';
import Modal from '../UI/Modal';
import classess from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `₹${cartCtx.amount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItem = (
    <ul className={classess['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItem}
      <div className={classess.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classess.actions}>
        <button className={classess['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        {hasItem && <button className={classess.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
