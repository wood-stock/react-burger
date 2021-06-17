import PropTypes from 'prop-types';
import style from './burger-ingredient.module.css';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredient = ({
  image,
  price,
  name,
  ingredient,
  showIngredientDetails,
}) => {
  return (
    <li
      className={style.cardIngredient}
      name={name}
      onClick={() => showIngredientDetails(ingredient)}
    >
      {<Counter count={1} size='default' />}
      <img src={image} alt={name} />
      <div className={style.price}>
        <span className='text text_type_digits-default pr-2'>{price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <p className={style.name + ' text text_type_main-default pb-4'}>{name}</p>
    </li>
  );
};
BurgerIngredient.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  ingredient: PropTypes.object.isRequired,
  showIngredientDetails: PropTypes.func.isRequired,
};
export default BurgerIngredient;
