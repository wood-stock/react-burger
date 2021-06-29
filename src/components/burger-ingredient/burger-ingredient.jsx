import { useMemo } from 'react';
import PropTypes from 'prop-types';
import style from './burger-ingredient.module.css';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { GET_SELECTED_INGREDIENT } from '../../services/actions/selectedIngredient';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';

const BurgerIngredient = ({ ingredient }) => {
  const dispatch = useDispatch();
  const { constructorIngredients, constructorBun } = useSelector(
    (state) => state.constructor
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
  const count = useMemo(() => {
    if (constructorIngredients) {
      return [...constructorIngredients, constructorBun, constructorBun].filter(
        (item) => item?.name === ingredient.name
      ).length;
    } else {
      return (
        [constructorBun].filter((item) => item?.name === ingredient.name)
          .length * 2
      );
    }
  }, [constructorIngredients, constructorBun, ingredient.name]);
  return (
    <li
      className={style.cardIngredient}
      name={ingredient.name}
      onClick={() => showIngredientDetails(ingredient)}
      ref={dragRef}
    >
      {count ? <Counter count={count} size='default' /> : null}
      <img src={ingredient.image} alt={ingredient.name} />
      <div className={style.price}>
        <span className='text text_type_digits-default pr-2'>
          {ingredient.price}
        </span>
        <CurrencyIcon type='primary' />
      </div>
      <p className='text text_type_main-default pb-4'>{ingredient.name}</p>
    </li>
  );
};
BurgerIngredient.propTypes = {
  ingredient: PropTypes.object.isRequired,
};
export default BurgerIngredient;
