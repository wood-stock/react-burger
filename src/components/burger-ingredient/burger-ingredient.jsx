import PropTypes from 'prop-types';
import style from './burger-ingredient.module.css';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { GET_SELECTED_INGREDIENT } from '../../services/actions/ingredients';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

const BurgerIngredient = ({ image, price, name, ingredient }) => {
  const dispatch = useDispatch();
  const { constructorIngredients, constructorBun } = useSelector(
    (state) => state.ingredients
  );
  const showIngredientDetails = (item) => {
    dispatch({
      type: GET_SELECTED_INGREDIENT,
      item,
    });
  };
  const [, dragRef] = useDrag({
    type: 'Ingredient',
    item: { ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const count = [
    ...constructorIngredients,
    constructorBun,
    constructorBun,
  ].filter((item) => item.name === name).length;
  return (
    <li
      className={style.cardIngredient}
      name={name}
      onClick={() => showIngredientDetails(ingredient)}
      ref={dragRef}
    >
      {count ? <Counter count={count} size='default' /> : null}
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
};
export default BurgerIngredient;
