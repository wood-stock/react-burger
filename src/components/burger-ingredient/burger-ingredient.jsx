import { useMemo } from 'react';
import PropTypes from 'prop-types';
import style from './burger-ingredient.module.css';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';

const BurgerIngredient = ({ ingredient }) => {
  const location = useLocation();
  const { constructorIngredients, constructorBun } = useSelector(
    (state) => state.constructor
  );
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
    <Link
      to={{
        pathname: `/ingredients/${ingredient._id}`,
        state: { background: location },
      }}
      className={style.cardIngredient}
      name={ingredient.name}
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
    </Link>
  );
};
BurgerIngredient.propTypes = {
  ingredient: PropTypes.object.isRequired,
};
export default BurgerIngredient;
