import PropTypes from 'prop-types';
import style from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';

const BurgerIngredients = ({ items }) => (
  <section className={style.burgerIngredients}>
    <h1 className='text text_type_main-large'>Собери бургер</h1>
    <div
      style={{ display: 'flex', justifyContent: 'space-around' }}
      className='mt-5 mb-5'
    >
      <Tab value='one' active={true}>
        Булки
      </Tab>
      <Tab value='two'>Соусы</Tab>
      <Tab value='three'>Начинки</Tab>
    </div>
    <div className={style.wrapperAllIngredients}>
      <div className={style.allIngredients}>
        <h2 className='text text_type_main-medium'>Булки</h2>
        <ul className={style.cardsIngredients}>
          {items.map(
            (item) =>
              item.type === 'bun' && (
                <BurgerIngredient {...item} key={item._id} />
              )
          )}
        </ul>
      </div>
      <div className={style.allIngredients}>
        <h2 className='text text_type_main-medium'>Соусы</h2>
        <div className={style.cardsIngredients}>
          {items.map(
            (item) =>
              item.type === 'sauce' && (
                <BurgerIngredient {...item} key={item._id} />
              )
          )}
        </div>
      </div>
      <div className={style.allIngredients}>
        <h2 className='text text_type_main-medium'>Начинки</h2>
        <div className={style.cardsIngredients}>
          {items.map(
            (item) =>
              item.type === 'main' && (
                <BurgerIngredient {...item} key={item._id} />
              )
          )}
        </div>
      </div>
    </div>
  </section>
);

BurgerIngredients.propTypes = {
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

export default BurgerIngredients;
