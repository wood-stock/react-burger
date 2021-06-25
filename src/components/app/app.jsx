import { useEffect } from 'react';
import style from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import Loader from '../loader/loader';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const App = () => {
  const { ingredientsSuccess, selectedIngredient, order } = useSelector(
    (state) => state.ingredients
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  return (
    <>
      <AppHeader />
      <main className={style.main}>
        {ingredientsSuccess ? (
          <>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
            {selectedIngredient && (
              <Modal headerText='Детали ингредиента'>
                <IngredientDetails />
              </Modal>
            )}
            {order && (
              <Modal>
                <OrderDetails />
              </Modal>
            )}
          </>
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
};

export default App;
