import { useContext } from 'react';
import {
  BurgerIngredientsContext,
  OrderIdContext,
} from '../../services/appContext';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import AddIngredient from '../add-ingredient/add-ingredient';
import style from './burger-constructor.module.css';

const BurgerConstructor = () => {
  const { burgerIngredients } = useContext(BurgerIngredientsContext);
  const { setOrderId, pushOrderButton } = useContext(OrderIdContext);
  const bun = burgerIngredients.filter((item) => item.type === 'bun')[1];
  const ingredients = burgerIngredients.filter((item) => item.type !== 'bun');
  const ingredientsId = ingredients.map((item) => item._id);
  const cost = ingredients.reduce(
    (result, item) => result + item.price,
    bun.price * 2
  );
  const sendOrderTakeId = () => {
    const url = 'https://norma.nomoreparties.space/api/orders';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        ingredients: [...ingredientsId, bun._id],
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
        else return Promise.reject(response.status);
      })
      .then((result) => setOrderId(result.order.number))
      .catch((error) => console.log('error', error));
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
        <Button
          type='primary'
          size='large'
          onClick={() => {
            pushOrderButton();
            sendOrderTakeId();
          }}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
