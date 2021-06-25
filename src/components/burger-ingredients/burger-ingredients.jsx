import style from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import { useSelector } from 'react-redux';
import { useState, useCallback, useRef } from 'react';
const BurgerIngredients = () => {
  const { ingredients } = useSelector((state) => state.ingredients);
  const [tab, setTab] = useState('bun');

  const wrapperRef = useRef(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const hadnleTab = (value, ref) => () => {
    setTab(value);
    if (bunRef.current && sauceRef.current && mainRef.current) {
      ref.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  const handlerScrollBar = useCallback(() => {
    if (
      Math.ceil(wrapperRef.current.scrollTop) <
      bunRef.current.scrollHeight / 2
    ) {
      setTab('bun');
    } else if (
      Math.ceil(wrapperRef.current.scrollTop) <
      bunRef.current.scrollHeight + sauceRef.current.scrollHeight / 2
    ) {
      setTab('sauce');
    } else {
      setTab('main');
    }
  }, []);

  return (
    <section className={style.burgerIngredients}>
      <h1 className='text text_type_main-large'>Собери бургер</h1>
      <div className={`${style.tabs} mt-5 mb-5`}>
        <div className={style.tab} onClick={hadnleTab('bun', bunRef)}>
          <Tab value='bun' active={tab === 'bun'}>
            Булки
          </Tab>
        </div>
        <div className={style.tab} onClick={hadnleTab('sauce', sauceRef)}>
          <Tab value='sauce' active={tab === 'sauce'}>
            Соусы
          </Tab>
        </div>
        <div className={style.tab} onClick={hadnleTab('main', mainRef)}>
          <Tab value='main' active={tab === 'main'}>
            Начинки
          </Tab>
        </div>
      </div>
      <div
        className={style.wrapperAllIngredients}
        onScroll={handlerScrollBar}
        ref={wrapperRef}
      >
        <div className={style.allIngredients}>
          <h2 className='text text_type_main-medium'>Булки</h2>
          <ul className={style.cardsIngredients} ref={bunRef}>
            {ingredients.map(
              (item) =>
                item.type === 'bun' && (
                  <BurgerIngredient
                    {...item}
                    ingredient={item}
                    key={item._id}
                  />
                )
            )}
          </ul>
        </div>
        <div className={style.allIngredients}>
          <h2 className='text text_type_main-medium'>Соусы</h2>
          <div className={style.cardsIngredients} ref={sauceRef}>
            {ingredients.map(
              (item) =>
                item.type === 'sauce' && (
                  <BurgerIngredient
                    {...item}
                    ingredient={item}
                    key={item._id}
                  />
                )
            )}
          </div>
        </div>
        <div className={style.allIngredients}>
          <h2 className='text text_type_main-medium'>Начинки</h2>
          <div className={style.cardsIngredients} ref={mainRef}>
            {ingredients.map(
              (item) =>
                item.type === 'main' && (
                  <BurgerIngredient
                    {...item}
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
