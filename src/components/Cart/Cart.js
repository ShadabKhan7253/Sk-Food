import Modal from '../UI/Modal';
import classess from './Cart.module.css';

const Cart = (props) => {
  const CartItem = (
    <ul className={classess['cart-items']}>
      {[{ id: 'c1', name: 'Sandwich', amount: 2, price: 75 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {CartItem}
      <div className={classess.total}>
        <span>Total Amount</span>
        <span>285.60</span>
      </div>
      <div className={classess.actions}>
        <button className={classess['button--alt']} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classess.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
