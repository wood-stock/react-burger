import { useContext } from 'react';
import { BurgerIngredientsContext } from '../../services/appContext';
import style from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';

const BurgerIngredients = () => {
  const { burgerIngredients, showIngredientDetails } = useContext(
    BurgerIngredientsContext
  );
  return (
    <section className={style.burgerIngredients}>
      <h1 className='text text_type_main-large'>Собери бургер</h1>
      <div className={`${style.tabs} mt-5 mb-5`}>
        <div className={style.tab}>
          <Tab value='one' active={true}>
            Булки
          </Tab>
        </div>
        <div className={style.tab}>
          <Tab value='two'>Соусы</Tab>
        </div>
        <div className={style.tab}>
          <Tab value='three'>Начинки</Tab>
        </div>
      </div>
      <div className={style.wrapperAllIngredients}>
        <div className={style.allIngredients}>
          <h2 className='text text_type_main-medium'>Булки</h2>
          <ul className={style.cardsIngredients}>
            {burgerIngredients.map(
              (item, i) =>
                item.type === 'bun' && (
                  <BurgerIngredient
                    {...item}
                    showIngredientDetails={showIngredientDetails}
                    ingredient={item}
                    key={item._id}
                  />
                )
            )}
          </ul>
        </div>
        <div className={style.allIngredients}>
          <h2 className='text text_type_main-medium'>Соусы</h2>
          <div className={style.cardsIngredients}>
            {burgerIngredients.map(
              (item, i) =>
                item.type === 'sauce' && (
                  <BurgerIngredient
                    {...item}
                    showIngredientDetails={showIngredientDetails}
                    ingredient={item}
                    key={item._id}
                  />
                )
            )}
          </div>
        </div>
        <div className={style.allIngredients}>
          <h2 className='text text_type_main-medium'>Начинки</h2>
          <div className={style.cardsIngredients}>
            {burgerIngredients.map(
              (item, i) =>
                item.type === 'main' && (
                  <BurgerIngredient
                    {...item}
                    showIngredientDetails={showIngredientDetails}
                    ingredient={item}
                    key={item._id}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BurgerIngredients;
