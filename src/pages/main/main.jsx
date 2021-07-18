import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import Modal from '../../components/modal/modal';
import OrderDetails from '../../components/order-details/order-details';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
const Main = () => {
  const { orderSuccess, ingredientsError } = useSelector((state) => ({
    ingredientsError: state.ingredients.ingredientsError,
    orderSuccess: state.order.orderSuccess,
  }));
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
      {orderSuccess && (
        <Modal>
          <OrderDetails />
        </Modal>
      )}
      {ingredientsError && (
        <p className='text text_type_main-medium text_color_inactive'>
          Всё сломалось, на нас напали Тираниды
        </p>
      )}
    </>
  );
};
export default Main;
