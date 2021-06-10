import { useContext } from 'react';
import { DataContext } from '../../services/ingredientsContext';
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import AddIngredient from '../add-ingredient/add-ingredient';
import style from './burger-constructor.module.css';

const BurgerConstructor = ({ pushOrderButton }) => {
  const { data, setOrderId } = useContext(DataContext);
  const buns = data.filter((item) => item.type === 'bun')[1];
  const ingredients = data.filter((item) => item.type !== 'bun');
  const ingredientsId = ingredients.map((item) => item._id);
  const coast = ingredients.reduce(
    (result, item) => result + item.price,
    buns.price * 2
  );
  const getOrderId = () => {
    const url = 'https://norma.nomoreparties.space/api/orders';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        ingredients: [...ingredientsId, buns._id],
      }),
    })
      .then((response) => response.json())
      .then((result) => setOrderId(result.order.number))
      .catch((error) => console.log('error', error));
  };

  return (
    <section className={style.burgerConstructor + ' pl-4'}>
      <div className={style.bun}>
        <ConstructorElement
          type='top'
          isLocked={true}
          text={`${buns.name} (верх)`}
          price={buns.price}
          thumbnail={buns.image}
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
          text={`${buns.name} (низ)`}
          price={buns.price}
          thumbnail={buns.image}
        />
      </div>
      <div className={style.finalPrice}>
        <div className={style.price}>
          <span className='text text_type_digits-medium'>{coast}</span>
          <CurrencyIcon type='primary' />
        </div>
        <Button
          type='primary'
          size='large'
          onClick={() => {
            pushOrderButton();
            getOrderId();
          }}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};

export default BurgerConstructor;
