import HeaderCartButton from './HeaderCartButton';
import classess from './Header.module.css';
import mealImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <>
      <header className={classess.header}>
        <h1>SK Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classess['main-image']}>
        {/* since it's a class with dash(-) inside so w cannot we . inside it */}
        <img src={mealImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
