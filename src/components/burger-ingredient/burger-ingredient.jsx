import { useState } from 'react';
import style from './burger-ingredient.module.css';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredient = ({ image, price, name }) => {
  const [count, setCount] = useState(+0);
  return (
    <li className={style.cardIngredient} onClick={() => setCount(count + 1)}>
      {count > 0 && <Counter count={count} size='default' />}
      <img src={image} alt={name} />
      <div className={style.price}>
        <span className='text text_type_digits-default pr-2'>{price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <p className={style.name + ' text text_type_main-default pb-4'}>{name}</p>
    </li>
  );
};

export default BurgerIngredient;
