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
  const {
    ingredientsSuccess,
    selectedIngredient,
    orderSuccess,
    ingredientsRequest,
    ingredientsError,
  } = useSelector((state) => ({
    ingredientsSuccess: state.ingredients.ingredientsSuccess,
    ingredientsRequest: state.ingredients.ingredientsRequest,
    ingredientsError: state.ingredients.ingredientsError,
    selectedIngredient: state.selectedIngredient.selectedIngredient,
    orderSuccess: state.order.orderSuccess,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  return (
    <>
      <AppHeader />
      <main className={style.main}>
        {ingredientsRequest && <Loader />}
        {ingredientsSuccess && (
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
            {orderSuccess && (
              <Modal>
                <OrderDetails />
              </Modal>
            )}
          </>
        )}
        {ingredientsError && (
          <p className='text text_type_main-medium text_color_inactive'>
            Всё сломалось, на нас напали Тираниды
          </p>
        )}
      </main>
    </>
  );
};

export default App;
