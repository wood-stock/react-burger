import { useEffect } from 'react';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import AddIngredient from '../constructor-ingredient/add-ingredient';
import style from './burger-constructor.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_INGREDIENT,
  RECALCULATE_TOTAL_PRICE,
  handleAddOrder,
} from '../../services/actions/ingredients';
import { useDrop } from 'react-dnd';

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const { constructorIngredients, totalPrice, constructorBun } = useSelector(
    (state) => state.ingredients
  );
  const [, dropTarget] = useDrop({
    accept: 'Ingredient',
    drop(ingredient) {
      dispatch({
        type: ADD_INGREDIENT,
        ingredient,
      });
    },
  });
  useEffect(() => {
    dispatch({
      type: RECALCULATE_TOTAL_PRICE,
    });
  }, [constructorBun, constructorIngredients, dispatch]);
  const idForOrder = [
    ...constructorIngredients.map((item) => item._id),
    constructorBun._id,
  ];
  return (
    <section className={style.burgerConstructor + ' pl-4'} ref={dropTarget}>
      <div className={style.bun}>
        <ConstructorElement
          type='top'
          isLocked={true}
          text={`${constructorBun.name} (верх)`}
          price={constructorBun.price}
          thumbnail={constructorBun.image}
        />
      </div>

      {constructorIngredients.length ? (
        <ul className={style.dopElement}>
          {constructorIngredients.map((item, index) => (
            <AddIngredient
              item={item}
              index={index}
              key={Math.round(Math.random() * 1000)}
            />
          ))}
        </ul>
      ) : (
        <div
          className='text text_type_main-default text_color_inactive'
          style={{ paddingLeft: '70px' }}
        >
          <p>Давай собери уже свой бургер!</p>
          <p>Перетаскивай сюда всё что хочешь!</p>
          <p>Булку мы выбрали за тебя, можешь поменять.</p>
          <p>Бургер без булки, как окрошка без кваса - салат.</p>
        </div>
      )}
      <div className={style.bun}>
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text={`${constructorBun.name} (низ)`}
          price={constructorBun.price}
          thumbnail={constructorBun.image}
        />
      </div>
      <div className={style.finalPrice}>
        <div className={style.price}>
          <span className='text text_type_digits-medium'>{totalPrice}</span>
          <CurrencyIcon type='primary' />
        </div>
        <Button
          type='primary'
          size='large'
          onClick={() => dispatch(handleAddOrder(idForOrder))}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;
