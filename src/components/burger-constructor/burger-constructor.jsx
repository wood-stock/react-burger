import { useMemo } from 'react';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import AddIngredient from '../constructor-ingredient/add-ingredient';
import style from './burger-constructor.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CONSTRUCTOR_INGREDIENT } from '../../services/actions/constructor';
import { handleAddOrder } from '../../services/actions/order';
import { useDrop } from 'react-dnd';

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const { constructorIngredients, constructorBun } = useSelector(
    (state) => state.constructor
  );
  const [, dropTarget] = useDrop({
    accept: 'Ingredient',
    drop(ingredient) {
      dispatch({
        type: ADD_CONSTRUCTOR_INGREDIENT,
        ...ingredient,
        randomId: Math.round(Math.random() * 1000),
      });
    },
  });

  const idForOrder = () => {
    const fullList = [...constructorIngredients, constructorBun];
    return fullList && fullList.map((item) => item._id);
  };
  const calculate = (constructorIngredients, constructorBun) => {
    if (constructorIngredients && constructorBun) {
      return constructorIngredients.reduce(
        (result, item) => result + item.price,
        constructorBun?.price * 2
      );
    } else if (constructorBun) return constructorBun?.price * 2;
    else
      return constructorIngredients?.reduce(
        (result, item) => result + item.price,
        0
      );
  };
  const totalPrice = useMemo(
    () => calculate(constructorIngredients, constructorBun),
    [constructorIngredients, constructorBun]
  );

  return (
    <section className={style.burgerConstructor + ' pl-4'} ref={dropTarget}>
      {constructorIngredients || constructorBun ? (
        <>
          {constructorBun && (
            <div className={style.bun}>
              <ConstructorElement
                type='top'
                isLocked={true}
                text={`${constructorBun.name} (верх)`}
                price={constructorBun.price}
                thumbnail={constructorBun.image}
              />
            </div>
          )}
          {constructorIngredients ? (
            <ul className={style.dopElement}>
              {constructorIngredients.map((item, index) => (
                <AddIngredient
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item._id}
                  index={index}
                  key={item.key}
                />
              ))}
            </ul>
          ) : (
            <p className='text text_type_main-medium text_color_inactive'>
              Может хоты бы кетчуп?
            </p>
          )}
          {constructorBun && (
            <div className={style.bun}>
              <ConstructorElement
                type='bottom'
                isLocked={true}
                text={`${constructorBun.name} (низ)`}
                price={constructorBun.price}
                thumbnail={constructorBun.image}
              />
            </div>
          )}

          <div className={style.finalPrice}>
            <div className={style.price}>
              <span className='text text_type_digits-medium'>{totalPrice}</span>
              <CurrencyIcon type='primary' />
            </div>
            {constructorBun && constructorIngredients ? (
              <>
                <Button
                  type='primary'
                  size='large'
                  onClick={() => dispatch(handleAddOrder(idForOrder()))}
                >
                  Оформить заказ
                </Button>
              </>
            ) : constructorIngredients ? (
              <p className='text text_type_main-medium text_color_inactive'>
                И булку не забудь
              </p>
            ) : (
              <p className='text text_type_main-medium text_color_inactive'>
                Добавь начинку
              </p>
            )}
          </div>
        </>
      ) : (
        <>
          <div
            className='text text_type_main-default text_color_inactive'
            style={{ paddingLeft: '70px' }}
          >
            <p>Давай собери уже свой бургер!</p>
            <p>Перетаскивай сюда всё что хочешь!</p>
            <p>И булку не забудь.</p>
            <p>Бургер без булки, как окрошка без кваса - салат.</p>
          </div>
        </>
      )}
    </section>
  );
};

export default BurgerConstructor;
