import PropTypes from 'prop-types';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import AddIngredient from '../add-ingredient/add-ingredient';
import style from './burger-constructor.module.css';

const BurgerConstructor = ({ items, pushOrderButton }) => (
  <section className={style.burgerConstructor + ' pl-4'}>
    <div className={style.bun}>
      <ConstructorElement
        type='top'
        isLocked={true}
        text='Краторная булка N-200i (верх)'
        price={200}
        thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
      />
    </div>
    <ul className={style.dopElement}>
      {items.map(
        (item) =>
          item.type !== 'bun' && <AddIngredient {...item} key={item._id} />
      )}
    </ul>
    <div className={style.bun}>
      <ConstructorElement
        type='bottom'
        isLocked={true}
        text='Краторная булка N-200i (низ)'
        price={200}
        thumbnail='https://code.s3.yandex.net/react/code/bun-02.png'
      />
    </div>
    <div className={style.finalPrice}>
      <div className={style.price}>
        <span className='text text_type_digits-medium'>610</span>
        <CurrencyIcon type='primary' />
      </div>
      <Button type='primary' size='large' onClick={pushOrderButton}>
        Оформить заказ
      </Button>
    </div>
  </section>
);

BurgerConstructor.propTypes = {
  items: PropTypes.arrayOf(
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
