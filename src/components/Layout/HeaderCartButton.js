import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classess from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isBtnHighLighted, setIsBtnHighLighted] = useState(false);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classess.button} ${isBtnHighLighted ? classess.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighLighted(true);

    const timer = setTimeout(() => {
      setIsBtnHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classess.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classess.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
