import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import AddIngredient from '../constructor-ingredient/add-ingredient';
import style from './burger-constructor.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ORDER_SUCCESS } from '../../services/actions/ingredients';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state) => state.ingredients);
  const bun = ingredients.filter((item) => item.type === 'bun')[1];
  const selectedIngredients = ingredients.filter((item) => item.type !== 'bun');
  const cost = selectedIngredients.reduce(
    (result, item) => result + item.price,
    bun.price * 2
  );
  // const ingredientsId = selectedIngredients.map((item) => item._id);
  const sendOrder = () => {
    dispatch({
      type: ADD_ORDER_SUCCESS,
      order: 39945,
    });
  };

  return (
    <section className={style.burgerConstructor + ' pl-4'}>
      <div className={style.bun}>
        <ConstructorElement
          type='top'
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <ul className={style.dopElement}>
        {ingredients.map((item) => (
          <AddIngredient {...item} key={item._id} />
        ))}
      </ul>
      <div className={style.bun}>
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <div className={style.finalPrice}>
        <div className={style.price}>
          <span className='text text_type_digits-medium'>{cost}</span>
          <CurrencyIcon type='primary' />
        </div>
        <Button type='primary' size='large' onClick={sendOrder}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
